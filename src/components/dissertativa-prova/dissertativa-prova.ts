import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the DissertativaProvaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dissertativa-prova',
  templateUrl: 'dissertativa-prova.html'
})
export class DissertativaProvaComponent {

  @Input() questaoAtiva;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() { }

}
