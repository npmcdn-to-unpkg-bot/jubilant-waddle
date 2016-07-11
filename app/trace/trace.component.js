"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var TraceComponent = (function () {
    function TraceComponent(router) {
        this.router = router;
    }
    TraceComponent.prototype.imageOpen = function (event) {
        event.preventDefault();
        this.imageInput.nativeElement.click();
    };
    TraceComponent.prototype.imageProcess = function (event) {
        var self = this;
        event.preventDefault();
        Potrace.loadImageFromUrl("app/images/alien.jpg");
        Potrace.process(function () {
            self.displayImg();
            self.displaySVG(3, undefined);
        });
    };
    TraceComponent.prototype.imageSave = function (event) {
        event.preventDefault();
    };
    TraceComponent.prototype.imageChanged = function (event) {
        event.preventDefault();
        var files = event.srcElement.files;
        this.handleFiles(files);
    };
    TraceComponent.prototype.handleFiles = function (files) {
        var self = this;
        Potrace.loadImageFromFile(files[0]);
        Potrace.process(function () {
            self.displayImg();
            self.displaySVG(3, undefined);
        });
    };
    TraceComponent.prototype.displayImg = function () {
        var img = this.imgdiv.nativeElement;
        img.style.display = 'inline-block';
        img.innerHTML = "<p>Input image:</p>";
        img.appendChild(Potrace.img);
    };
    TraceComponent.prototype.displaySVG = function (size, type) {
        var svg = this.svgdiv.nativeElement;
        svg.style.display = 'inline-block';
        svg.innerHTML = "<p>Result:</p>" + Potrace.getSVG(size, type);
    };
    __decorate([
        core_1.ViewChild('imageInput'), 
        __metadata('design:type', core_1.ElementRef)
    ], TraceComponent.prototype, "imageInput", void 0);
    __decorate([
        core_1.ViewChild('imgdiv'), 
        __metadata('design:type', core_1.ElementRef)
    ], TraceComponent.prototype, "imgdiv", void 0);
    __decorate([
        core_1.ViewChild('svgdiv'), 
        __metadata('design:type', core_1.ElementRef)
    ], TraceComponent.prototype, "svgdiv", void 0);
    TraceComponent = __decorate([
        core_1.Component({
            selector: 'my-trace',
            templateUrl: 'app/trace/trace.component.html',
            styleUrls: ['app/trace/trace.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TraceComponent);
    return TraceComponent;
}());
exports.TraceComponent = TraceComponent;
//# sourceMappingURL=trace.component.js.map