import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({selector: '[appHighlight]'})
export class HighlightDirective {
  
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
 }

 @Input() highlightColor: string;


 @HostListener('mouseenter')
 onMouseEnter() {
  this.highlight('yellow');
}

@HostListener('mouseleave') 
onMouseLeave() {
  this.highlight('green');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

}
