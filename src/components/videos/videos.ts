import { Component } from '@angular/core';

/**
 * Generated class for the VideosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'videos',
  templateUrl: 'videos.html'
})
export class VideosComponent {

  text: string;

  constructor() {
    console.log('Hello VideosComponent Component');
    this.text = 'Hello World';
  }

}
