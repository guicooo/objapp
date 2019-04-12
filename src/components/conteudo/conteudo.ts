import { Component } from '@angular/core';

/**
 * Generated class for the ConteudoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'conteudo',
  templateUrl: 'conteudo.html'
})
export class ConteudoComponent {

  text: string;

  constructor() {
    console.log('Hello ConteudoComponent Component');
    this.text = 'Hello World';
  }

}
