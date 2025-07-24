exports.calculateScores = (ble, wifi, imu, gps) => {
  const gates = ["A", "B", "C", "D"];
  const scores = {};

  gates.forEach(gate => {
    const bleScore = ble.length * 20;
    const gpsScore = 20 - Math.abs(gps.lat - 12.9716) * 1000;
    const speedScore = Math.min(imu.speed * 10, 20);

    scores[gate] = bleScore + gpsScore + speedScore + Math.random() * 10;
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const bestGate = sorted[0][0];
  const maxScore = sorted[0][1];

  const triggerDispatch = maxScore > 60;

  return {
    bestGate,
    score: maxScore.toFixed(2),
    triggerDispatch
  };
};
