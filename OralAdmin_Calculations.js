function OralAdmin_CalculateValues(dailyDose, tabletsPerDay, dissolveTime) {
  tabletsPerDay = tabletsPerDay * 1.0;
  
  console.log(tabletsPerDay);

  const numTimepoints = 1000.0;
  
  const numSimulatedDays = 20.0;

  const dissolveDuration = Math.round(numTimepoints / numSimulatedDays * dissolveTime / 24);
  const tabletDose = dailyDose / tabletsPerDay * 100;
  const tabletRadius = 1;
  const totalVolume = 4 / 3 * Math.PI * Math.pow(tabletRadius, 3);
  var releaseProfile = [];
  for (i = 0; i < dissolveDuration; i++) {
    const startRadius = (dissolveDuration - i) / dissolveDuration;
    const endRadius = (dissolveDuration - i - 1) / dissolveDuration;
    
    const startVolume = 4 / 3 * Math.PI * Math.pow(startRadius, 3);
    const endVolume = 4 / 3 * Math.PI * Math.pow(endRadius, 3);

    const substanceReleased = tabletDose * (startVolume - endVolume) / totalVolume;

    releaseProfile.push(substanceReleased);
  }

  var releaseRate = [];
  for (i = 0; i < numTimepoints; i++) {
    releaseRate.push(0);
  }

  dayDuration = numTimepoints / numSimulatedDays;
  for (day = 0; day < numSimulatedDays; day++) {
    const dayStart = day * numTimepoints / numSimulatedDays;
    for (tablet = 0; tablet < tabletsPerDay; tablet++) {
      const tabletStart = Math.round(dayStart + tablet * dayDuration / tabletsPerDay);
      for (dissolveTime = 0; dissolveTime < dissolveDuration; dissolveTime++) {
        const timepoint = tabletStart + dissolveTime;
        if (timepoint < numTimepoints) {
          releaseRate[timepoint] += releaseProfile[dissolveTime];
        }
      }
    }
  }

  var currentConc = 1000
  var plasmaConc = [];
  plasmaConc.push(currentConc);

  for (i = 0; i < numTimepoints - 1; i++) {
    
    plasmaConc.push(currentConc * dissolveTime);
   
  }
  
  return new Array(releaseRate);
}