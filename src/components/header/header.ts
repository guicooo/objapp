import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery'
import { NavController, MenuController } from 'ionic-angular';
import { AppService } from '../../app/app.service';
import { NotificacoesPage } from '../../pages/notificacoes/notificacoes';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-obj',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() navCtrl: NavController;
  @Input() voltar: boolean;

  constructor(private _appService: AppService, private _menuCtrl: MenuController) {

    this._appService.contNotification =  document.querySelector('.ico-notification-alert');

    setTimeout(() => {
      this.navCtrl.viewDidEnter.subscribe((view) => {
        // if(view.instance.constructor.name == "LoginPage")
        //   $('header-obj').find('ion-header').hide();
        // else if(view.instance.constructor.name != "HomePage")
        //   $('header-obj').find('ion-header').show(); 
        
      });

      // console.log()
    }, 0)
    
  }

  toggleMenu() {
    this._menuCtrl.toggle();
  }

  ngOnInit() {

    
    
    setTimeout(() => {
      
      $('.ico-notification').removeClass('ico-animation');
      // console.log(this.voltar)
    }, 3000);

    //console.log('header ', this._appService.contNotification)

  }


  menuClosed() {
    $('.navdown').removeClass('sair');
    $('.navdown').addClass('voltar');
  }

  menuOpened() {
    $('.navdown').addClass('sair');
    $('.navdown').removeClass('voltar');
  }

  voltarPagina(){   
    this.navCtrl.pop(this._appService.navOptions);    
  }

  openNotificacoes() {  
    this.navCtrl.setRoot(NotificacoesPage)
  }

}

