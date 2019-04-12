import { Component } from '@angular/core';

/**
 * Generated class for the JogosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jogos',
  templateUrl: 'jogos.html'
})
export class JogosComponent {

  text: string;

  constructor() {
    console.log('Hello JogosComponent Component');
    this.text = 'Hello World';
  }

}
