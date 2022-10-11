function OralAdmin_UpdateGraph() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var calculatedValues = OralAdmin_CalculateValues(OralAdmin_DailyDoseSliderSliderValue, OralAdmin_TabletsPerDaySliderValue, OralAdmin_TabletDissolveTimeSliderValue);
  var plasmaConc = calculatedValues[0];
  
  const plasmaConcColor = "#428bca";
  const infRateColor = "#bd2b30";
  const elimRateColor = "#3f9762";
  const halfLifeMarkerColor = "#fd9228";

  let canvasPadding = new Padding(10, 10, 10, 10);

  const graphRegion = new DrawRegion(
    canvas.height - canvasPadding.bottom,
    canvasPadding.left,
    canvasPadding.top,
    canvas.width - canvasPadding.right
  )

  const axisWidth = canvas.width * 0.06;
  const yAxisWidth = axisWidth;
  const xAxisHeight = yAxisWidth * 0.6;
  const rightSideAxisSpacing = yAxisWidth * 0.1;

  const numRightHandYaxises = 3;

  const tickSize = axisWidth * 0.1;

  let plotRegionMargin = new Margin(20, 20, 0, 20);

  const leftMargin = axisWidth;
  const rightMargin = axisWidth * numRightHandYaxises;
  const bottomMargin = canvas.width * 0.03;
  const upperMargin = canvas.width * 0.01;

  const plotWidth = canvas.width - leftMargin - rightMargin;
  const plotHeight = canvas.height - bottomMargin - upperMargin;

  const yAxisHeight = canvas.height - bottomMargin - upperMargin;

  const plotRegion = new DrawRegion(
    graphRegion.bottom - xAxisHeight - plotRegionMargin.bottom,
    graphRegion.left + yAxisWidth + plotRegionMargin.left,
    graphRegion.top + plotRegionMargin.top,
    graphRegion.right - numRightHandYaxises * yAxisWidth - (numRightHandYaxises - 1) * rightSideAxisSpacing - plotRegionMargin.right
  )

  const leftYAxisRegion = new DrawRegion(
    plotRegion.bottom,
    graphRegion.left,
    plotRegion.top,
    graphRegion.left + yAxisWidth
  )

  const xAxisRegion = new DrawRegion(
    graphRegion.bottom,
    plotRegion.left,
    graphRegion.bottom - xAxisHeight,
    plotRegion.right
  )

  const rightSideAxisRegion = new DrawRegion(
    plotRegion.bottom,
    plotRegion.right + plotRegionMargin.right,
    plotRegion.top,
    graphRegion.right
  )

  const infusionAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + yAxisWidth
  )

  const eliminationAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left + yAxisWidth + rightSideAxisSpacing,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + 2 * yAxisWidth + rightSideAxisSpacing
  )

  const clearanceAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left + 2 * yAxisWidth + 2 * rightSideAxisSpacing,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + 3 * yAxisWidth + 2 * rightSideAxisSpacing
  )

  const canvasFonts = DetermineCanvasFont(ctx, yAxisHeight * 0.8, axisWidth * 0.5, "Plasma concentration (mg/ml)");
  const axisLabelFont = canvasFonts[0];
  const tickMarkLabelFont = canvasFonts[1];
  
  const drawSettings = new DrawSettings(axisLabelFont, tickMarkLabelFont, 2);

  const plasmaConcAxisTickValues = new Array(0, 2500, 5000, 7500, 10000);
  const leftYxis = new LeftYAxis("Plasma concentration (mg/ml)", leftYAxisRegion, plasmaConcAxisTickValues, plasmaConcColor);

  const timeAxisLabels = new Array(0, 250, 500, 750, 1000);
  const xAxis = new XAxis("Time (minutes)", xAxisRegion, timeAxisLabels, "white");

  const infusionAxisTickValues = new Array(0, 25, 50, 75, 100);
  const infusionAxis = new RightYAxis("Infusion rate (mg/min)", infusionAxisRegion, infusionAxisTickValues, infRateColor);

  const elimAxisTickValues = infusionAxisTickValues;
  const eliminationAxis = new RightYAxis("Elimination rate (mg/min)", eliminationAxisRegion, elimAxisTickValues, elimRateColor);

  const clearanceAxisTickValues = new Array(0, 1, 2, 3, 4, 5);
  const clearanceAxis = new RightYAxis("Clearance (ml/min)", clearanceAxisRegion, clearanceAxisTickValues, "white");

  var yPos = [];
  for (let i = 0; i < 1000; i++) {
    yPos.push(plasmaConc[i] * plotRegion.height / 10000.0);
  }

  var timeValues = [];
  for (let i = 0.0; i < 1000.0; i++) {
    timeValues.push(i * plotRegion.width / 1000.0);
  }
  
  xAxis.drawAxis(ctx, drawSettings, tickSize);
  
  // y-axis
  leftYxis.drawAxis(ctx, drawSettings, tickSize);

  if (true) {
    ctx.strokeStyle = plasmaConcColor;
    ctx.fillStyle = plasmaConcColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom);
    for (let i = 0; i < 1000; i++) {
      if (yPos[i] <= plotRegion.height){
        ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - yPos[i]);
      }
    }
    ctx.stroke();
  }




}