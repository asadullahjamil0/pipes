import { Directive, ElementRef } from '@angular/core';
import e from 'express';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
    el.nativeElement.innerText = "hey I am changed now!";
  }
}
