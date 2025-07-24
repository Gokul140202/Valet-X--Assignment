const { calculateScores } = require("../utils/scoringModel");

exports.processSensorData = (req, res) => {
  const { ble, wifi, imu, gps } = req.body;
  const result = calculateScores(ble, wifi, imu, gps);
  res.json(result);
};
