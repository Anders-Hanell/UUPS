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