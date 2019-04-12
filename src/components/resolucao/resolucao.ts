import { Component } from '@angular/core';

/**
 * Generated class for the ResolucaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'resolucao',
  templateUrl: 'resolucao.html'
})
export class ResolucaoComponent {

  text: string;

  constructor() {
    console.log('Hello ResolucaoComponent Component');
    this.text = 'Hello World';
  }

}
