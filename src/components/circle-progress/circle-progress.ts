import { Component, Input } from '@angular/core';

/**
 * Generated class for the CircleProgressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'circle-progress',
  templateUrl: 'circle-progress.html'
})
export class CircleProgressComponent {

  @Input() percent: any;
  @Input() color: string;

  constructor() {
   
  }

}
