function BasicInfusion_CalculateValues(bolusDose, infusionRate, clearance, infusionTime) {
  const numTimepoints = 1000;
  
  var fiveHalfLifes = 5 * Math.log(2) / clearance;

  var plasmaConc = [];
  plasmaConc.push(bolusDose);
  
  var elimRate = [];
  elimRate.push(clearance * bolusDose);

  var infusionSpeed = [];
  for (i = 0; i < numTimepoints; i++) {
    if (i < infusionTime){
      infusionSpeed.push(infusionRate);
    }
    else{
      infusionSpeed.push(0.0);
    }
  }

  var prevConc = bolusDose;

  for (i = 0; i < numTimepoints - 1; i++) {
    var currentElim = clearance * prevConc;
    var currentConc = prevConc + infusionSpeed[i] - currentElim;
    
    plasmaConc.push(currentConc);
    elimRate.push(currentElim);

    prevConc = currentConc;
  }
  
  return new Array(plasmaConc, elimRate, infusionSpeed, fiveHalfLifes);
}
