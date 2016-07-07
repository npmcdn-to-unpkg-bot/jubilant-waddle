var PotraceLib;
(function (PotraceLib) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.copy = function () {
            new Point(this.x, this.y);
        };
        return Point;
    }());
    PotraceLib.Point = Point;
})(PotraceLib || (PotraceLib = {}));
//# sourceMappingURL=point.js.map