var PotraceLib;
(function (PotraceLib) {
    var Curve = (function () {
        function Curve(n) {
            this.n = n;
            this.tag = new Array(n);
            this.c = new Array(n * 3);
            this.alphaCurve = 0;
            this.vertex = new Array(n);
            this.alpha = new Array(n);
            this.alpha0 = new Array(n);
            this.beta = new Array(n);
        }
        return Curve;
    }());
    PotraceLib.Curve = Curve;
})(PotraceLib || (PotraceLib = {}));
//# sourceMappingURL=curve.js.map