import { Component, Input, ElementRef } from '@angular/core';
var AngularPreflightComponent = (function () {
    function AngularPreflightComponent(el) {
        this.el = el;
        this.linesCount = 1;
        this.lineWidth = 160;
        this.lineSize = -1;
        this.lineDiff = 40;
        this.lineHeight = -1;
    }
    AngularPreflightComponent.prototype.ngOnInit = function () {
        this.linesCount = parseInt(this.linesCount);
        this.lineWidth = parseInt(this.lineWidth);
        this.lineDiff = parseInt(this.lineDiff);
        try {
            var element = this.el.nativeElement;
            var style = window.getComputedStyle(element);
            element.setAttribute('aria-hidden', 'true');
            this.lineSize = parseInt(style.fontSize);
            this.lineHeight = parseInt(style.lineHeight) - this.lineSize;
            this.canvasHeight = ((this.lineSize + this.lineHeight) * this.linesCount) - this.lineHeight;
            this.lines = new Array();
            for (var i = 0; i < this.linesCount; i++) {
                var width = this.lineWidth - (Math.random() * this.lineDiff);
                width -= Math.random() * this.lineDiff;
                width = Math.max(width, this.lineSize);
                this.lines.push(Math.round(width));
            }
        }
        catch (err) {
            console.warn('Angular Preflight', err);
        }
    };
    AngularPreflightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-preflight',
                    template: "<svg xmlns=\"http://www.w3.org/2000/svg\" [attr.width]=\"lineWidth\" [attr.height]=\"canvasHeight\" [attr.viewBox]=\"'0 0 ' + lineWidth + ' ' + canvasHeight\"><g><rect *ngFor=\"let line of lines; index as i\" x=\"0\" [attr.y]=\"((lineSize + lineHeight) * i) + 'px'\" [attr.width]=\"line + 'px'\" [attr.height]=\"lineSize + 'px'\" [attr.rx]=\"(lineSize / 2) + 'px'\" [attr.ry]=\"(lineSize / 2) + 'px'\"/></g></svg>",
                    styles: [":host{display:inline-block;clear:both}:host svg{float:left;fill:currentColor;fill-rule:evenodd}:host svg rect{animation-name:PreflightLinePulse;animation-duration:1s;animation-timing-function:ease-in;animation-iteration-count:infinite;animation-direction:alternate;fill-opacity:0.06}:host svg rect:nth-child(n+2){animation-delay:.3s}:host svg rect:nth-child(n+3){animation-delay:.6s}:host svg rect:nth-child(n+4){animation-delay:.9s}:host svg rect:nth-child(n+5){animation-delay:1.2s}:host svg rect:nth-child(n+6){animation-delay:1.5s}:host svg rect:nth-child(n+7){animation-delay:1.8s}:host svg rect:nth-child(n+8){animation-delay:2.1s}:host svg rect:nth-child(n+9){animation-delay:2.4s}:host svg rect:nth-child(n+10){animation-delay:2.7s}:host svg rect:nth-child(n+11){animation-delay:3s}:host svg rect:nth-child(n+12){animation-delay:3.3s}:host svg rect:nth-child(n+13){animation-delay:3.6s}:host svg rect:nth-child(n+14){animation-delay:3.9s}:host svg rect:nth-child(n+15){animation-delay:4.2s}:host svg rect:nth-child(n+16){animation-delay:4.5s}:host svg rect:nth-child(n+17){animation-delay:4.8s}:host svg rect:nth-child(n+18){animation-delay:5.1s}:host svg rect:nth-child(n+19){animation-delay:5.4s}:host svg rect:nth-child(n+20){animation-delay:5.7s}:host svg rect:nth-child(n+21){animation-delay:6s}@keyframes PreflightLinePulse{0%{fill-opacity:0.06}100%{fill-opacity:0.2}}"]
                },] },
    ];
    AngularPreflightComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AngularPreflightComponent.propDecorators = {
        "linesCount": [{ type: Input, args: ['lines',] },],
        "lineWidth": [{ type: Input, args: ['width',] },],
        "lineSize": [{ type: Input, args: ['height',] },],
        "lineDiff": [{ type: Input, args: ['diff',] },],
        "lineHeight": [{ type: Input, args: ['space',] },],
    };
    return AngularPreflightComponent;
}());
export { AngularPreflightComponent };
//# sourceMappingURL=angular-preflight.component.js.map