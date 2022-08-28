function OnNewSliderValue() {
  UpdateSliderValueLabels();
  
  if (CurrentTab == "Both") {
    UpdateGraph();
  }
}

function OnCanvasResize(){
  UpdateGraph();
}

function UpdateGraph() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  const bolusDose = BasicInfusion_BolusDoseSliderValue * 1.0;
  const infusionRate = BasicInfusion_InfusionRateSliderValue * 1.0;
  const clearance = BasicInfusion_ClearanceSliderValue * 1.0;
  const infusionTime = BasicInfusion_InfusionTimeSliderValue * 1.0;

  var calculatedValues = BasicInfusion_CalculateValues(bolusDose, infusionRate, clearance, infusionTime);
  var plasmaConc = calculatedValues[0];
  var elimRate = calculatedValues[1];
  var infSpeed = calculatedValues[2];
  var fiveHalfLifes = calculatedValues[3];

  const axisLabelFont = '24px arial';
  const axisLabelAlignment = "center";

  const tickMarkLabelFont = '12px arial';
  const tickMarkLabelAlignment = "right";

  const plasmaConcColor = "#428bca";
  const infRateColor = "#bd2b30";
  const elimRateColor = "#3f9762";
  const halfLifeMarkerColor = "#fd9228";

  const axisWidth = 100;
  const numRightHandYaxises = 2;

  const tickSize = 10;

  const leftMargin = axisWidth;
  const rightMargin = axisWidth * numRightHandYaxises;
  const bottomMargin = 50;
  const upperMargin = 20;

  const plotWidth = canvas.width - leftMargin - rightMargin;
  const plotHeight = canvas.height - bottomMargin - upperMargin;

  const plasmaConcAxisTickValues = new Array(0, 2500, 5000, 7500, 10000);
  var plasmaConcAxisTickPositions = new Array();
  for (let i = 0; i < plasmaConcAxisTickValues.length; i++) {
    plasmaConcAxisTickPositions.push(plasmaConcAxisTickValues[i] / 10000 * plotHeight);
  }

  const timeAxisTickValues = new Array(0, 250, 500, 750, 1000);
  var timeAxisTickPositions = new Array();
  for (let i = 0; i < timeAxisTickValues.length; i++) {
    timeAxisTickPositions.push(timeAxisTickValues[i] / 1000 * plotWidth);
  }

  const infusionAxisTickValues = new Array(0, 25, 50, 75, 100);
  var infusionAxisTickPositions = new Array();
  for (let i = 0; i < infusionAxisTickValues.length; i++) {
    infusionAxisTickPositions.push(infusionAxisTickValues[i] / 100 * plotHeight);
  }

  const elimAxisTickValues = infusionAxisTickValues;
  const elimAxisTickPositions = infusionAxisTickPositions;

  var yPos = [];
  for (let i = 0; i < 1000; i++) {
    yPos.push(plasmaConc[i] * plotHeight / 10000.0);
  }
  
  var elimYpos = [];
  for (let i = 0; i < 1000; i++) {
    elimYpos.push(elimRate[i] * plotHeight / 100.0);
  }

  var infYpos = [];
  for (let i = 0; i < 1000; i++) {
    infYpos.push(infSpeed[i] * plotHeight / 100.0);
  }

  var timeValues = [];
  for (let i = 0.0; i < 1000.0; i++) {
    timeValues.push(i * plotWidth / 1000.0);
  }

  var halfLifeMarkerPosition = plotWidth * fiveHalfLifes / 1000;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  
  const lineWidth = 2;
  ctx.lineWidth = lineWidth;

  // x-axis
  ctx.beginPath();
  ctx.moveTo(leftMargin - lineWidth/2, canvas.height - bottomMargin);
  ctx.lineTo(canvas.width - rightMargin + lineWidth/2, canvas.height - bottomMargin);
  ctx.stroke();

  // x-axis label
  ctx.font = axisLabelFont;
  ctx.textAlign = axisLabelAlignment;
  ctx.textBaseline = 'middle';
  ctx.fillText('Time (minutes)', leftMargin + plotWidth / 2, canvas.height - bottomMargin / 5);

  // x-axis tick marks
  ctx.font = tickMarkLabelFont;
  ctx.textAlign = "center";

  for (let i = 0; i < timeAxisTickPositions.length; i++) {
    let tickMarkXpos = timeAxisTickPositions[i] + leftMargin;
    let tickMarkLabel = timeAxisTickValues[i];

    ctx.beginPath();
    ctx.moveTo(tickMarkXpos, canvas.height - bottomMargin);
    ctx.lineTo(tickMarkXpos, canvas.height - bottomMargin + tickSize);
    ctx.stroke();

    ctx.fillText(tickMarkLabel, tickMarkXpos, canvas.height - bottomMargin + tickSize + 10);
  }

  // y-axis
  ctx.strokeStyle = plasmaConcColor;
  ctx.fillStyle = plasmaConcColor;
  
  ctx.beginPath();
  ctx.moveTo(leftMargin, canvas.height - bottomMargin + lineWidth/2);
  ctx.lineTo(leftMargin, upperMargin - lineWidth/2);
  ctx.stroke();

  // y-axis tick marks
  ctx.font = tickMarkLabelFont;
  ctx.textAlign = tickMarkLabelAlignment;

  for (let i = 0; i < plasmaConcAxisTickPositions.length; i++) {
    let tickMarkYpos = plasmaConcAxisTickPositions[i];
    let tickMarkLabel = plasmaConcAxisTickValues[i];

    ctx.beginPath();
    ctx.moveTo(leftMargin - tickSize, canvas.height - bottomMargin - tickMarkYpos);
    ctx.lineTo(leftMargin, canvas.height - bottomMargin - tickMarkYpos);
    ctx.stroke();

    ctx.fillText(tickMarkLabel, leftMargin - tickSize - 5, canvas.height - bottomMargin - tickMarkYpos);
  }

  // y-axis label
  ctx.font = axisLabelFont;
  ctx.textAlign = axisLabelAlignment;
  const yLabel = "Plasma concentration (mg/ml)";

  var x = leftMargin / 5;
  var y = canvas.height - bottomMargin - plotHeight / 2;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();

  // Plasma concentration
  if (BasicInfusion_DisplayPlasmaConcentration) {
    ctx.beginPath();
    ctx.moveTo(leftMargin, canvas.height - bottomMargin);
    for (let i = 0; i < 1000; i++) {
      if (yPos[i] <= plotHeight){
        ctx.lineTo(leftMargin + timeValues[i], canvas.height - bottomMargin - yPos[i]);
      }
    }
    ctx.stroke();
  }
  
  // Infusion rate y-axis
  ctx.strokeStyle = infRateColor;
  ctx.fillStyle = infRateColor;

  ctx.beginPath();
  ctx.moveTo(leftMargin + plotWidth + 10, canvas.height - bottomMargin + lineWidth/2);
  ctx.lineTo(leftMargin + plotWidth + 10, upperMargin);
  ctx.stroke();

  // Infusion rate label
  ctx.font = axisLabelFont;
  ctx.textAlign = axisLabelAlignment;
  const infRateLabel = "Infusion rate (mg/min)";

  x = leftMargin + plotWidth + 10 + axisWidth / 2;
  y = canvas.height - bottomMargin - plotHeight / 2;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(infRateLabel, 0, 0);
  ctx.restore();

  // Infusion axis tick marks
  ctx.font = tickMarkLabelFont;
  ctx.textAlign = "left";

  for (let i = 0; i < infusionAxisTickPositions.length; i++) {
    let tickMarkYpos = infusionAxisTickPositions[i];
    let tickMarkLabel = infusionAxisTickValues[i];

    ctx.beginPath();
    ctx.moveTo(canvas.width - rightMargin + 10, canvas.height - bottomMargin - tickMarkYpos);
    ctx.lineTo(canvas.width - rightMargin + 10 + tickSize, canvas.height - bottomMargin - tickMarkYpos);
    ctx.stroke();

    ctx.fillText(tickMarkLabel, canvas.width - rightMargin + 10 + tickSize + 5, canvas.height - bottomMargin - tickMarkYpos);
  }

  // Infusion rate
  if (BasicInfusion_DisplayInfusionRate) {
    ctx.beginPath();
    ctx.moveTo(leftMargin, canvas.height - bottomMargin);
    for (let i = 0; i < 1000; i++) {
      if (infYpos[i] <= plotHeight){
        ctx.lineTo(leftMargin + timeValues[i], canvas.height - bottomMargin - infYpos[i]);
      }
    }
    ctx.stroke();
  }

  // Elimination rate
  ctx.strokeStyle = elimRateColor;
  ctx.fillStyle = elimRateColor;

  if (BasicInfusion_DisplayEliminationRate) {
    ctx.beginPath();
    ctx.moveTo(leftMargin, canvas.height - bottomMargin);
    for (let i = 0; i < 1000; i++) {
      if (elimYpos[i] <= plotHeight){
        ctx.lineTo(leftMargin + timeValues[i], canvas.height - bottomMargin - elimYpos[i]);
      }
    }
    ctx.stroke();
  }

  // Elimination rate y-axis
  ctx.beginPath();
  ctx.moveTo(leftMargin + plotWidth + axisWidth + 10, canvas.height - bottomMargin + lineWidth/2);
  ctx.lineTo(leftMargin + plotWidth + axisWidth + 10, upperMargin);
  ctx.stroke();

  // Elimination rate label
  ctx.font = axisLabelFont;
  ctx.textAlign = axisLabelAlignment;
  const elimRateLabel = "Elimination rate (mg/min)";

  x = leftMargin + plotWidth + axisWidth + axisWidth / 2 + 10;
  y = canvas.height - bottomMargin - plotHeight / 2;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(elimRateLabel, 0, 0);
  ctx.restore();

  // Elimination axis tick marks
  ctx.font = tickMarkLabelFont;
  ctx.textAlign = "left";

  for (let i = 0; i < elimAxisTickPositions.length; i++) {
    let tickMarkYpos = elimAxisTickPositions[i];
    let tickMarkLabel = elimAxisTickValues[i];

    ctx.beginPath();
    ctx.moveTo(canvas.width - rightMargin + 10 + axisWidth, canvas.height - bottomMargin - tickMarkYpos);
    ctx.lineTo(canvas.width - rightMargin + 10 + axisWidth + tickSize, canvas.height - bottomMargin - tickMarkYpos);
    ctx.stroke();

    ctx.fillText(tickMarkLabel, canvas.width - rightMargin + 10 + axisWidth + tickSize + 5, canvas.height - bottomMargin - tickMarkYpos);
  }

  // Five half lifes
  ctx.strokeStyle = halfLifeMarkerColor;
  ctx.fillStyle = halfLifeMarkerColor;

  if (BasicInfusion_DisplayHalflifeMarker) {
    ctx.beginPath();
    ctx.moveTo(leftMargin + halfLifeMarkerPosition, canvas.height - bottomMargin);
    ctx.lineTo(leftMargin + halfLifeMarkerPosition, canvas.height - bottomMargin - plotHeight);
    ctx.stroke();
  }
}