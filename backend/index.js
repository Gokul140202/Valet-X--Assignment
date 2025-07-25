const express = require("express");
const cors = require("cors");
const app = express();
const valetRoutes = require("./routes/valetRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/valet", valetRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
