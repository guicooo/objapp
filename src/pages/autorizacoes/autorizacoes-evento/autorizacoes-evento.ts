import { Component, OnInit, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../../app/app.service';

/**
 * Generated class for the AutorizacoesEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-autorizacoes-evento',
  templateUrl: 'autorizacoes-evento.html',
})
export class AutorizacoesEventoPage implements OnInit {
  @Output() voltar = true;
  id: any;
  arrAuthorizations: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appService: AppService) {
      this.arrAuthorizations = JSON.parse(localStorage.getItem('autorizacoes'));
      this.id = this.navParams.get('id');
  }

  ionViewDidLoad() { }

  ngOnInit() {
    console.log('component evento ', this.id)
  }

  autorizarAluno() {
    this.appService.showToaster('Aluno autorizado!', 3000);
  }

  naoAutorizarAluno() {
    this.appService.showToaster('Aluno não autorizado!', 3000);
  }

}
