var PotraceLib;
(function (PotraceLib) {
    var Sum = (function () {
        function Sum(x, y, xy, x2, y2) {
            this.x = x;
            this.y = y;
            this.xy = xy;
            this.x2 = x2;
            this.y2 = y2;
        }
        return Sum;
    }());
    PotraceLib.Sum = Sum;
})(PotraceLib || (PotraceLib = {}));
//# sourceMappingURL=sum.js.map