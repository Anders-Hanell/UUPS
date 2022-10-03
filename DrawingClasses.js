class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class DrawRegion {
  width;
  height;

  left;
  right;
  top;
  bottom;

  topleft;
  topright;
  bottomleft;
  bottomright;

  center;

  constructor(bottom, left, top, right) {
    this.width = right - left;
    this.height = bottom - top;

    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;

    this.topleft = new Point(this.left, this.top);
    this.topright = new Point(this.right, this.top);
    this.bottomleft = new Point(this.left, this.bottom);
    this.bottomright = new Point(this.right, this.bottom);

    this.center = new Point(this.left + this.width / 2, this.top + this.height / 2);
  }
}

class Margin {
  constructor(bottom, left, top, right) {
    this.bottom = bottom;
    this.left = left;
    this.top = top;
    this.right = right;
  }
}

class Padding {
  constructor(bottom, left, top, right) {
    this.bottom = bottom;
    this.left = left;
    this.top = top;
    this.right = right;
  }
}

class DrawSettings {
  constructor(axisLabelFont, tickLabelFont, axisLineWidth) {
    this.axisLabelFont = axisLabelFont;
    this.tickLabelFont = tickLabelFont;
    this.axisLineWidth = axisLineWidth;
  }
}

class LeftYAxis {
  constructor(axisLabel, tickLabels, tickPositions, axisColor) {
    this.axisLabel = axisLabel;
    this.tickLabels = tickLabels;
    this.tickPositions = tickPositions;
    this.axisColor = axisColor;
  }

  drawAxis = function(ctx, drawRegion, drawSettings, tickSize) {
    const lineWidth = drawSettings.axisLineWidth;
    
    ctx.strokeStyle = this.axisColor;
    ctx.fillStyle = this.axisColor;

    // Axis
    ctx.beginPath();
    ctx.moveTo(drawRegion.right, drawRegion.bottom + lineWidth/2);
    ctx.lineTo(drawRegion.right, drawRegion.top - lineWidth/2);
    ctx.stroke();

    // Tick marks
    ctx.font = drawSettings.tickLabelFont;
    ctx.textAlign = "right";

    for (let i = 0; i < this.tickPositions.length; i++) {
      let tickMarkYpos = this.tickPositions[i];
      let tickMarkLabel = this.tickLabels[i];

      ctx.beginPath();
      ctx.moveTo(drawRegion.right - tickSize, drawRegion.bottom - tickMarkYpos);
      ctx.lineTo(drawRegion.right, drawRegion.bottom - tickMarkYpos);
      ctx.stroke();

      ctx.fillText(tickMarkLabel, drawRegion.right - tickSize - 5, drawRegion.bottom - tickMarkYpos);
    }

    // Axis label
    ctx.font = drawSettings.axisLabelFont;
    ctx.textAlign = "center";
    
    const yLabel = this.axisLabel;

    var x = drawRegion.left + drawRegion.width / 5;
    var y = drawRegion.center.y;
  
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();
  }
}

class XAxis {
  constructor(axisLabel, tickLabels, tickPositions, axisColor) {
    this.axisLabel = axisLabel;
    this.tickLabels = tickLabels;
    this.tickPositions = tickPositions;
    this.axisColor = axisColor;
  }

  drawAxis = function(ctx, drawRegion, drawSettings, tickSize) {
    const lineWidth = drawSettings.axisLineWidth;
    
    ctx.strokeStyle = this.axisColor;
    ctx.fillStyle = this.axisColor;

    // Axis
    ctx.beginPath();
    ctx.moveTo(drawRegion.left - lineWidth / 2, drawRegion.top);
    ctx.lineTo(drawRegion.right + lineWidth / 2, drawRegion.top);
    ctx.stroke();

    // Tick marks
    ctx.font = drawSettings.tickLabelFont;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let i = 0; i < this.tickPositions.length; i++) {
      let tickMarkXpos = this.tickPositions[i];
      let tickMarkLabel = this.tickLabels[i];

      ctx.beginPath();
      ctx.moveTo(drawRegion.left + tickMarkXpos, drawRegion.top);
      ctx.lineTo(drawRegion.left + tickMarkXpos, drawRegion.top + tickSize);
      ctx.stroke();

      ctx.fillText(tickMarkLabel, drawRegion.left + tickMarkXpos, drawRegion.top + tickSize + 5);
    }

    // Axis label
    ctx.font = drawSettings.axisLabelFont;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const xLabel = this.axisLabel;

    var x = drawRegion.center.x;
    var y = drawRegion.bottom - drawRegion.height / 5;
  
    ctx.fillText(xLabel, x, y);
  }
}