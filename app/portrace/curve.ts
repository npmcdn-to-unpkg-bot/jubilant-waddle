namespace PotraceLib {
export class Curve {

    tag: any;
    c: any;
    alphaCurve: any;
    vertex: any;
    alpha: any;
    alpha0: any;
    beta: any;

    constructor(public n?: number) {
        this.tag = new Array(n);
        this.c = new Array(n * 3);
        this.alphaCurve = 0;
        this.vertex = new Array(n);
        this.alpha = new Array(n);
        this.alpha0 = new Array(n);
        this.beta = new Array(n);
    }
}
}
