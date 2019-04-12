import { Component, Renderer2, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import * as $ from 'jquery';
import { TweenMax, Power0} from 'gsap';

import { NotificacoesService } from './notificacoes.service';
import { AutorizacoesEventoPage } from '../autorizacoes/autorizacoes-evento/autorizacoes-evento';
import { AppModule } from '../../app/app.module';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the NotificacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html',
})
export class NotificacoesPage {

  notifications: any = [];
  cont: number;
  contTemp: number;
  elementNotification: ElementRef
  loaderContent: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _notificacoesService: NotificacoesService,
    private _appService: AppService,
    private _renderer2: Renderer2
  ) {
      this.elementNotification = this._appService.contNotification;
  }
  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }
  ionViewDidLoad() { }

  ngOnInit() {

    console.log('noti ', this._appService.contNotification)

    this._notificacoesService.getNotifications()
      .subscribe(data => {
        // this.preLoader = false;
        this.loaderContent = false;
        data.forEach((value, index) => {
          this.notifications = data;
          
        });
        console.log('notificacoes ', this.notifications)

      setTimeout(() => {
        var animateTime = 0;
        $('li').each((i, obj )=>{
          animateTime += 0.1; 
          TweenMax.fromTo($(obj), 0.3, {
            alpha: 0
        }, {
            alpha: 1,
            delay: animateTime,
            ease: Power0.easeInOut
        });
      });

      this.contTemp = $('.list-notification .active').length;
      this.cont = $('ion-item-sliding').length;
     
      }, 0);

      })

      
  } // end OnInit

  removeItem(item) {  

    this.cont = this.cont - 1 ;

    for(var i = 0; i < this.notifications.length; i++) { 
      if(this.notifications[i] == item){
        this.notifications.splice(i, 1);
      } 
    }

    if(this.cont <= 0 ) {
      
      // let rootElement = document.querySelector(`.reference${id}`);
      let outMessage = document.querySelector('.message');
      this._renderer2.setStyle(document.querySelector('.box-top-app'), 'padding-top', '0');
      this._renderer2.setStyle(document.querySelector('.box-top-app'), 'margin-bottom', '30%');
      this._renderer2.removeClass(document.querySelector('.ico-notification-alert'), 'active');
      

      setInterval(() => {
        this._renderer2.removeClass(outMessage, 'out-message')
        this._renderer2.addClass(outMessage, 'in-message')
      }, 300 );
      
    } // end if 

  } // end method

  seen(event, id: any) {

    this.navCtrl.push(AutorizacoesEventoPage, { id: id })

    if(event.currentTarget.className == 'active') {
      this.contTemp -= 1;
      this._renderer2.removeClass(event.currentTarget, 'active');
    }

    this.contTemp == 0 ? this._renderer2.removeClass(document.querySelector('.ico-notification-alert'), 'active') : false;
    
      
  } // end method seen

}
