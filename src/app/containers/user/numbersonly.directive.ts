import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersonly]'
})
export class NumbersonlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9\.]*/g, '');
  }

}
