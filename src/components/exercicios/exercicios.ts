import { Component } from '@angular/core';

/**
 * Generated class for the ExerciciosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exercicios',
  templateUrl: 'exercicios.html'
})
export class ExerciciosComponent {

  text: string;

  constructor() {
    console.log('Hello ExerciciosComponent Component');
    this.text = 'Hello World';
  }

}
