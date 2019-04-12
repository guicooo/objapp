import { Component } from '@angular/core';

/**
 * Generated class for the TextApoioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'text-apoio',
  templateUrl: 'text-apoio.html'
})
export class TextApoioComponent {

  text: string;

  constructor() {
    console.log('Hello TextApoioComponent Component');
    this.text = 'Hello World';
  }

}
