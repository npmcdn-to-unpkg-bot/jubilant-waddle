/// <reference path="Point.ts" />

namespace PotraceLib {
export class Bitmap {

    size: number;
    arraybuffer: any;
    data: any;

    constructor(public w: number, public h: number) {
        this.size = w * h;
        this.arraybuffer = new ArrayBuffer(this.size);
        this.data = new Int8Array(this.arraybuffer);
    }

    at(x: number, y: number) {
        return (x >= 0 && x < this.w && y >= 0 && y < this.h) &&
            this.data[this.w * y + x] === 1;
    };

    index(i: any) {
        var point = new Point();
        point.y = Math.floor(i / this.w);
        point.x = i - point.y * this.w;
        return point;
    };

    flip(x: number, y: number) {
        if (this.at(x, y)) {
            this.data[this.w * y + x] = 0;
        } else {
            this.data[this.w * y + x] = 1;
        }
    };

    copy() {
        var bm = new Bitmap(this.w, this.h), i;
        for (i = 0; i < this.size; i++) {
            bm.data[i] = this.data[i];
        }
        return bm;
    };

}
}
