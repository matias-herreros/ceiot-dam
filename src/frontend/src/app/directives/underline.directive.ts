import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() highlightColor!: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#444444', true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('inherit', false);
  }

  private highlight(background: string, mouseenter: boolean) {
    this.el.nativeElement.style.backgroundColor = background;
    this.el.nativeElement.style.borderRadius = mouseenter ? '10px' : '';
    this.el.nativeElement.style.textDecoration = mouseenter ? 'underline' : '';
    this.el.nativeElement.style.paddingLeft = mouseenter ? '10px' : '';
    this.el.nativeElement.style.paddingRight = mouseenter ? '10px' : '';
    this.el.nativeElement.style.marginLeft = mouseenter ? '3px' : '';
    this.el.nativeElement.style.marginRight = mouseenter ? '3px' : '';
  }
}
