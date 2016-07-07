namespace PotraceLib {
  export class Point {

  constructor(public x?: number, public y?: number) { }

  copy() {
      new Point(this.x, this.y);
  }
}
}
