import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharactersonly]'
})
export class CharactersonlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;

    this.el.nativeElement.value = initalValue.replace(/[^[a-z A-Z\.]*/g, '');
  }

}
