import { Component } from '@angular/core';

/**
 * Generated class for the TextoApoioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'texto-apoio',
  templateUrl: 'texto-apoio.html'
})
export class TextoApoioComponent {

  text: string;

  constructor() {
    console.log('Hello TextoApoioComponent Component');
    this.text = 'Hello World';
  }

}
