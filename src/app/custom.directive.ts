import { Directive,ElementRef } from '@angular/core';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ref :ElementRef) { 
    this.ref.nativeElement.style.color="red";
  }

}
