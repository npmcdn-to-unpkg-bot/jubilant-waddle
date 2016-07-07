var PotraceLib;
(function (PotraceLib) {
    var Quad = (function () {
        function Quad() {
            this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        Quad.prototype.at = function (x, y) {
            this.data[x * 3 + y];
        };
        return Quad;
    }());
    PotraceLib.Quad = Quad;
})(PotraceLib || (PotraceLib = {}));
//# sourceMappingURL=quad.js.map