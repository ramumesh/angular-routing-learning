import { Directive } from '@angular/core';

@Directive({
  selector: 'app-test',
  host:{
    'class':'sub-title'
  }
})
export class TestDirective {

  constructor() { }

}