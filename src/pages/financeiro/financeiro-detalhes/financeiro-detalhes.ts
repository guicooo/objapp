import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppService } from '../../../app/app.service';

/**
 * Generated class for the FinanceiroDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-financeiro-detalhes',
  templateUrl: 'financeiro-detalhes.html',
})
export class FinanceiroDetalhesPage {
  @Output() voltar = true;
  id: any;
  ticketDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public appService: AppService) {
    this.id = navParams.get('id');
    this.ticketDetail = JSON.parse(localStorage.getItem('boletos'));
    console.log(this.ticketDetail);
    
  }

  ionViewDidLoad() { }

  segundaViaBoleto() {
    this.appService.showToaster('2ª via do boleto enviada por e-mail!', 3000);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Pagar boleto',
      message: 'Deseja pagar o boleto com o cartão cadastrado?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Pagar',
          handler: () => {
            console.log('Agree clicked');
            this.appService.showToaster('Boleto pago com sucesso!', 3000);
          }
        }
      ]
    });
    confirm.present();
  }

}
