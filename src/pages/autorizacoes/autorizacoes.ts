import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { TweenMax, Power0} from 'gsap';

import { AutorizacoesService } from './autorizacoes.service';

/**
 * Generated class for the AutorizacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-autorizacoes',
  templateUrl: 'autorizacoes.html',
})
export class AutorizacoesPage {

  arrAuthorizations: any;
  loaderContent: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _autorizacoesService: AutorizacoesService,
  ) {
  }

  ionViewDidLoad() { }

  ngOnInit() {
    $(".seletor").css('display', 'none');
    this._autorizacoesService.getAuthorizations()
      .subscribe(data => {
        this.loaderContent = false;
        this.arrAuthorizations = data;
        console.log('autorizacoes ' , this.arrAuthorizations)
        localStorage.setItem('autorizacoes', JSON.stringify(data));
        setTimeout(() => {
          var animateTime = 0;
          $('.row' + '.list-color').each((i, obj )=>{
            animateTime += 0.1; 
            TweenMax.fromTo($(obj), 0.3, {
              alpha: 0
          }, {
              alpha: 1,
              delay: animateTime,
              ease: Power0.easeInOut
          });
        });
        }, 0);  // end setTimeout       
      }) //end subscribe 
  } // end OnInit
}// end class
