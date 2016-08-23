import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component ({
  selector: 'hola-angular',
  template: '<h1> {{saludo}} </h1>'
})

class HolaAngularComponent {
  saludo: string;
  constructor() {
    this.saludo = '¡Hola Angular 2!';
  }
}

bootstrap(HolaAngularComponent); // Component es bootstrapped.
