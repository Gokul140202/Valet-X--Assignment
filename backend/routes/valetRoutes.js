const express = require("express");
const router = express.Router();
const { processSensorData } = require("../controllers/valetController");

router.post("/sensor-data", processSensorData);

module.exports = router;
