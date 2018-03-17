import { OnInit, ElementRef, AfterViewInit, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
export declare class AngularPreflightComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
    private el;
    linesCount: any;
    lineWidth: any;
    lineSize: any;
    lineDiff: any;
    lineHeight: any;
    canvasHeight: number;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private Setup();
}
