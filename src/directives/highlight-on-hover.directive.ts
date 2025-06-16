// src/app/highlight-on-hover.directive.ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]' // This is the attribute name to use in HTML
})
export class HighlightOnHoverDirective {
  // Input to allow customization of the highlight color
  @Input() defaultColor: string = ''; // Default for no hover
  @Input('appHighlightOnHover') highlightColor: string = 'yellow'; // Alias for the directive name

  constructor(private el: ElementRef) { } // ElementRef gives us direct access to the host element

  // HostListener: Listens for events on the host element (the one the directive is applied to)
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor || ''); // Reset to default or transparent
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}