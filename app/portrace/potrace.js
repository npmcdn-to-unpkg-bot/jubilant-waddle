/// <reference path="point.ts" />
/// <reference path="bitmap.ts" />
/// <reference path="curve.ts" />
/// <reference path="path.ts" />
/// <reference path="quad.ts" />
/// <reference path="sum.ts" />
var PotraceLib;
(function (PotraceLib) {
    var Potrace = (function () {
        function Potrace() {
            this.imgElement = document.createElement("img");
            this.imgCanvas = document.createElement("canvas");
            this.bm = null;
            this.pathlist = [];
            this.info = {
                isReady: false,
                turnpolicy: "minority",
                turdsize: 2,
                optcurve: true,
                alphamax: 1,
                opttolerance: 0.2
            };
            this.imgElement.onload = function () {
                this.loadCanvas();
                this.loadBm();
            };
        }
        Potrace.prototype.loadImageFromFile = function (file) {
            if (this.info.isReady) {
                this.clear();
            }
            this.imgElement.file = file;
            var reader = new FileReader();
            reader.onload = (function (aImg) {
                return function (e) {
                    aImg.src = e.target.result;
                };
            })(this.imgElement);
            reader.readAsDataURL(file);
        };
        Potrace.prototype.loadImageFromUrl = function (url) {
            if (this.info.isReady) {
                this.clear();
            }
            this.imgElement.src = url;
        };
        Potrace.prototype.setParameter = function (obj) {
            var key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    this.info[key] = obj[key];
                }
            }
        };
        Potrace.prototype.clear = function () {
            this.bm = null;
            this.pathlist = [];
            this.callback = null;
            this.info.isReady = false;
        };
        Potrace.prototype.loadCanvas = function () {
            this.imgCanvas.width = this.imgElement.width;
            this.imgCanvas.height = this.imgElement.height;
            var ctx = this.imgCanvas.getContext('2d');
            ctx.drawImage(this.imgElement, 0, 0);
        };
        Potrace.prototype.loadBm = function () {
            var ctx = this.imgCanvas.getContext('2d');
            this.bm = new PotraceLib.Bitmap(this.imgCanvas.width, this.imgCanvas.height);
            var imgdataobj = ctx.getImageData(0, 0, this.bm.w, this.bm.h);
            var l = imgdataobj.data.length, i, j, color;
            for (i = 0, j = 0; i < l; i += 4, j++) {
                color = 0.2126 * imgdataobj.data[i] + 0.7153 * imgdataobj.data[i + 1] +
                    0.0721 * imgdataobj.data[i + 2];
                this.bm.data[j] = (color < 128 ? 1 : 0);
            }
            this.info.isReady = true;
        };
        Potrace.prototype.process = function (c) {
            if (c) {
                this.callback = c;
            }
            if (!this.info.isReady) {
                setTimeout(process, 100);
                return;
            }
            this.bmToPathlist();
            this.processPath();
            this.callback();
            this.callback = null;
        };
        Potrace.prototype.bmToPathlist = function () { };
        Potrace.prototype.processPath = function () { };
        return Potrace;
    }());
    PotraceLib.Potrace = Potrace;
})(PotraceLib || (PotraceLib = {}));
//# sourceMappingURL=potrace.js.map