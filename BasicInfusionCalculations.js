function BasicInfusion_CalculateValues(bolusDose, infusionRate, halflife, infusionTime) {
  const numTimepoints = 1000;
  const Vd = 70;

  var fiveHalfLifes = 5 * halflife;
  var clearance = Vd * Math.log(2) / halflife;

  var plasmaConc = [];
  plasmaConc.push(bolusDose);
  
  var elimRate = [];
  elimRate.push(clearance * bolusDose);

  var infusionSpeed = [];
  for (i = 0; i < numTimepoints; i++) {
    if (i < infusionTime) {
      infusionSpeed.push(infusionRate);
    }
    else {
      infusionSpeed.push(0.0);
    }
  }

  var prevConc = bolusDose;

  for (i = 0; i < numTimepoints - 1; i++) {
    var currentElim = clearance / Vd * prevConc;
    var currentConc = prevConc + infusionSpeed[i] - currentElim;
    
    plasmaConc.push(currentConc);
    elimRate.push(currentElim);

    prevConc = currentConc;
  }
  
  return new Array(plasmaConc, elimRate, infusionSpeed, fiveHalfLifes);
}