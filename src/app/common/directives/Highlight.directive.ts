import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({selector: '[appHighlight]'})
export class HighlightDirective {
  
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
 }

 @Input() highlightColor: string;


 @HostListener('mouseenter')
 onMouseEnter() {
  this.setHighlight('yellow');
}

@HostListener('mouseleave') 
onMouseLeave() {
  this.setHighlight('green');
}

private setHighlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

}
