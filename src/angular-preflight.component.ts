import { Component, OnInit, Input, ElementRef, AfterViewInit, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ui-preflight',
  template: '<!-- preflight space -->',
  styleUrls: ['./angular-preflight.component.scss']
})
export class AngularPreflightComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
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

  public canvasHeight: number;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.Setup();
  }

  ngAfterViewChecked() {
    // this.Setup();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.Setup();
  }

  private Setup() {
    this.linesCount = parseInt(this.linesCount);
    this.lineWidth = parseInt(this.lineWidth);
    this.lineDiff = parseInt(this.lineDiff);

    try {
      let element: HTMLElement = this.el.nativeElement;
      let style: CSSStyleDeclaration = document.defaultView.getComputedStyle(element, undefined);

      element.setAttribute('aria-hidden', 'true');

      this.lineSize = parseInt(style.fontSize as string);
      this.lineHeight = parseInt(style.lineHeight as string) - this.lineSize;

      this.canvasHeight = ((this.lineSize + this.lineHeight) * this.linesCount) - this.lineHeight;

      let svg: string = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.lineWidth}" height="${this.canvasHeight}" viewBox="0 0 ${this.lineWidth} ${this.canvasHeight}"><g>`;
      let round: number = this.lineSize * .5;

      for (let i = 0; i < this.linesCount; i++) {
        let width: number = this.lineWidth - (Math.random() * this.lineDiff);

        width -= Math.random() * this.lineDiff;

        width = Math.max(width, this.lineSize);

        svg += `<rect x="0" y="${((this.lineSize + this.lineHeight) * i)}px" width="${width}px" height="${this.lineSize}px" rx="${round}px" ry="${round}px" />`;
      }

      svg += `</g></svg>`;

      element.innerHTML = svg;
    } catch (err) {
      console.warn('Angular Preflight', err);
    }
  }
}
