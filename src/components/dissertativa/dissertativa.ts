import { Component, Input } from '@angular/core';
import $ from 'jquery';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the DissertativaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dissertativa',
  templateUrl: 'dissertativa.html'
})
export class DissertativaComponent {

  @Input() questaoAtiva;
  @Input() ultimo;
  public avancar = false;
  
  constructor(public appService: AppService) { }

  ngOnInit() { }
  avancarClick() {
    if(!this.ultimo)  {
      $('.ativo').next().trigger('click');   
      this.avancar = false;
    }  
      
  }

}
