(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.pipecat = global.pipecat || {}, global.pipecat.AngularPreflight = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var AngularPreflightComponent = (function () {
    function AngularPreflightComponent(el) {
        this.el = el;
        this.linesCount = 1;
        this.lineWidth = 160;
        this.lineSize = -1;
        this.lineDiff = 40;
        this.lineHeight = -1;
    }
    AngularPreflightComponent.prototype.ngOnInit = function () { };
    AngularPreflightComponent.prototype.ngAfterViewInit = function () {
        this.Setup();
    };
    AngularPreflightComponent.prototype.ngAfterViewChecked = function () {
    };
    AngularPreflightComponent.prototype.ngOnChanges = function (changes) {
        this.Setup();
    };
    AngularPreflightComponent.prototype.Setup = function () {
        this.linesCount = parseInt(this.linesCount);
        this.lineWidth = parseInt(this.lineWidth);
        this.lineDiff = parseInt(this.lineDiff);
        try {
            var element = this.el.nativeElement;
            var style = document.defaultView.getComputedStyle(element, undefined);
            element.setAttribute('aria-hidden', 'true');
            this.lineSize = parseInt(style.fontSize);
            this.lineHeight = parseInt(style.lineHeight) - this.lineSize;
            this.canvasHeight = ((this.lineSize + this.lineHeight) * this.linesCount) - this.lineHeight;
            var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + this.lineWidth + "\" height=\"" + this.canvasHeight + "\" viewBox=\"0 0 " + this.lineWidth + " " + this.canvasHeight + "\"><g>";
            var round = this.lineSize * .5;
            for (var i = 0; i < this.linesCount; i++) {
                var width = this.lineWidth - (Math.random() * this.lineDiff);
                width -= Math.random() * this.lineDiff;
                width = Math.max(width, this.lineSize);
                svg += "<rect x=\"0\" y=\"" + ((this.lineSize + this.lineHeight) * i) + "px\" width=\"" + width + "px\" height=\"" + this.lineSize + "px\" rx=\"" + round + "px\" ry=\"" + round + "px\" />";
            }
            svg += "</g></svg>";
            element.innerHTML = svg;
        }
        catch (err) {
            console.warn('Angular Preflight', err);
        }
    };
    AngularPreflightComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ui-preflight',
                    template: '<!-- empty -->',
                    styles: [":host{display:inline-block;clear:both}:host svg{float:left;fill:currentColor;fill-rule:evenodd}:host svg rect{animation-name:PreflightLinePulse;animation-duration:1s;animation-timing-function:ease-in;animation-iteration-count:infinite;animation-direction:alternate;fill-opacity:0.06}:host svg rect:nth-child(n+2){animation-delay:.3s}:host svg rect:nth-child(n+3){animation-delay:.6s}:host svg rect:nth-child(n+4){animation-delay:.9s}:host svg rect:nth-child(n+5){animation-delay:1.2s}:host svg rect:nth-child(n+6){animation-delay:1.5s}:host svg rect:nth-child(n+7){animation-delay:1.8s}:host svg rect:nth-child(n+8){animation-delay:2.1s}:host svg rect:nth-child(n+9){animation-delay:2.4s}:host svg rect:nth-child(n+10){animation-delay:2.7s}:host svg rect:nth-child(n+11){animation-delay:3s}:host svg rect:nth-child(n+12){animation-delay:3.3s}:host svg rect:nth-child(n+13){animation-delay:3.6s}:host svg rect:nth-child(n+14){animation-delay:3.9s}:host svg rect:nth-child(n+15){animation-delay:4.2s}:host svg rect:nth-child(n+16){animation-delay:4.5s}:host svg rect:nth-child(n+17){animation-delay:4.8s}:host svg rect:nth-child(n+18){animation-delay:5.1s}:host svg rect:nth-child(n+19){animation-delay:5.4s}:host svg rect:nth-child(n+20){animation-delay:5.7s}:host svg rect:nth-child(n+21){animation-delay:6s}@keyframes PreflightLinePulse{0%{fill-opacity:0.06}100%{fill-opacity:0.2}}"]
                },] },
    ];
    AngularPreflightComponent.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    AngularPreflightComponent.propDecorators = {
        "linesCount": [{ type: core.Input, args: ['lines',] },],
        "lineWidth": [{ type: core.Input, args: ['width',] },],
        "lineSize": [{ type: core.Input, args: ['height',] },],
        "lineDiff": [{ type: core.Input, args: ['diff',] },],
        "lineHeight": [{ type: core.Input, args: ['space',] },],
    };
    return AngularPreflightComponent;
}());

var AngularPreflightModule = (function () {
    function AngularPreflightModule() {
    }
    AngularPreflightModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        AngularPreflightComponent
                    ],
                    exports: [
                        AngularPreflightComponent
                    ],
                    schemas: [
                        core.CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];
    AngularPreflightModule.ctorParameters = function () { return []; };
    return AngularPreflightModule;
}());

var AngularPreflightInterceptor = (function () {
    function AngularPreflightInterceptor() {
    }
    AngularPreflightInterceptor.prototype.intercept = function (req, next) {
        var headers = {};
        var newReq = req.clone({
            setHeaders: headers
        });
        return next.handle(newReq);
    };
    AngularPreflightInterceptor.decorators = [
        { type: core.Injectable },
    ];
    AngularPreflightInterceptor.ctorParameters = function () { return []; };
    return AngularPreflightInterceptor;
}());

exports.AngularPreflightModule = AngularPreflightModule;
exports.AngularPreflightComponent = AngularPreflightComponent;
exports.AngularPreflightInterceptor = AngularPreflightInterceptor;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
