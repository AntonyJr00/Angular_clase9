import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrueba]',
})
export class PruebaDirective {
  constructor(private elRef: ElementRef) {}
  saludo = 'hola';
}
