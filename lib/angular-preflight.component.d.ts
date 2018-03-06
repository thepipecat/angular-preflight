import { OnInit, ElementRef } from '@angular/core';
export declare class AngularPreflightComponent implements OnInit {
    private el;
    linesCount: any;
    lineWidth: any;
    lineSize: any;
    lineDiff: any;
    lineHeight: any;
    lines: Array<number>;
    canvasHeight: number;
    constructor(el: ElementRef);
    ngOnInit(): void;
}
