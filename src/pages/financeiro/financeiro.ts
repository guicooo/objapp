import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanceiroService } from './financeiro.service';
import { FinanceiroDetalhesPage } from './financeiro-detalhes/financeiro-detalhes';

/**
 * Generated class for the FinanceiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class FinanceiroPage {

  tickets: any;
  mesVencimento: string;
  dateCurrent: number;
  monthCurrent: number;
  loaderContent: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _financeiroService: FinanceiroService,
  ) {
  }

  ionViewDidLoad() { }

  ngOnInit() {

    this.getDateCurrent()
    this._financeiroService.getTickets()
      .subscribe(data => {
        this.loaderContent = false;
        this.tickets = data;
        localStorage.setItem('boletos', JSON.stringify(this.tickets));
        // console.log(this.tickets)
        // console.log('dia: ' + this.dateCurrent + ' ' + 'mes: ' + this.monthCurrent )
      })
  }

  getDateCurrent() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    this.dateCurrent = dd;
    this.monthCurrent = mm;
  }

  goDetails(id){
    this.navCtrl.push(FinanceiroDetalhesPage,  { id: id }, {animate: false});
  }

}
