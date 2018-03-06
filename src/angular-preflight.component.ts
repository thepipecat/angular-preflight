import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'ui-preflight',
  templateUrl: './angular-preflight.component.html',
  styleUrls: ['./angular-preflight.component.scss']
})
export class AngularPreflightComponent implements OnInit {
  @Input('lines')
  public linesCount: any = 1;
  @Input('width')
  public lineWidth: any = 160;
  @Input('height')
  public lineSize: any = -1;
  @Input('diff')
  public lineDiff: any = 40;
  @Input('space')
  public lineHeight: any = -1;

  public lines: Array<number>;
  public canvasHeight: number;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.linesCount = parseInt(this.linesCount);
    this.lineWidth = parseInt(this.lineWidth);
    this.lineDiff = parseInt(this.lineDiff);

    let element: HTMLElement = this.el.nativeElement;
    let style: CSSStyleDeclaration = window.getComputedStyle(element);

    element.setAttribute('aria-hidden', 'true');

    this.lineSize = parseInt(style.fontSize);
    this.lineHeight = parseInt(style.lineHeight) - this.lineSize;

    this.canvasHeight = ((this.lineSize + this.lineHeight) * this.linesCount) - this.lineHeight;

    this.lines = new Array<number>();

    for (let i = 0; i < this.linesCount; i++) {
      let width: number = this.lineWidth - (Math.random() * this.lineDiff);

      width -= Math.random() * this.lineDiff;

      width = Math.max(width, this.lineSize);

      this.lines.push(Math.round(width));
    }
  }
}
