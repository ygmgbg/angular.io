// #docplaster
// #docregion full
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
// #docregion class-1
export class HighlightDirective {
  private _defaultColor = 'red';
  private el: HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement; }
  // #enddocregion class-1

  // #docregion defaultColor
  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }
  // #enddocregion defaultColor
  // #docregion class-1

  // #docregion color
  @Input('myHighlight') highlightColor: string;
  // #enddocregion color

  // #docregion mouse-enter
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }
  // #enddocregion mouse-enter
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }
}
// #enddocregion class-1
// #enddocregion full
/*
// #docregion highlight
@Input() myHighlight: string;
// #enddocregion highlight
*/
