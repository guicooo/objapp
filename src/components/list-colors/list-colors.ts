import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AutorizacoesEventoPage } from '../../pages/autorizacoes/autorizacoes-evento/autorizacoes-evento';

/**
 * Generated class for the ListColorsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-colors',
  templateUrl: 'list-colors.html'
})
export class ListColorsComponent {

  @Input() authorizations:any;

  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit() {
    
  }

  goDetails(id: any){
    this.navCtrl.push(AutorizacoesEventoPage, { id: id }, { animate: false })
  }

}
