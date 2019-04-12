import { AtendimentoPage } from './../pages/atendimento/atendimento';
import { Component, ViewChild, Output } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as $ from 'jquery';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { UsuarioPage } from '../pages/usuario/usuario';
import { AtividadesPage } from '../pages/atividades/atividades';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import { AutorizacoesPage } from '../pages/autorizacoes/autorizacoes';
import { EstouChegandoPage } from '../pages/estou-chegando/estou-chegando';
import { NotasPage } from '../pages/notas/notas';
import { CalendarioPage } from '../pages/calendario/calendario';
import { AppService } from './app.service';
import { ConteudoOnlinePage } from '../pages/conteudo-online/conteudo-online';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  habilitarMenu = false;
  rootPage: any = LoginPage;
  @Output() navCtrl;
  currentPage: any = '';
  pages: Array<{title: string, component: any, icone: string}>;

  constructor(public platform: Platform, public events: Events, public appService: AppService, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();
    this.getActivePage();
    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Atividades', component: AtividadesPage, icone: 'ico-atividades' },
      { title: 'Calendário', component: CalendarioPage, icone: 'ico-calendario' },
      { title: 'Conteúdo Online', component: ConteudoOnlinePage, icone: 'logoCO' },
      { title: 'Secretaria Online', component: FinanceiroPage, icone: 'ico-financeiro' },
      { title: 'Nota(s) e Falta(s)', component: NotasPage, icone: 'ico-notas' },      
      // { title: 'Autorizações', component: AutorizacoesPage, icone: 'ico-autorizacoes' },
      { title: 'Atendimento', component: AtendimentoPage, icone: 'ico-atendimento' },
    ];
    
   

    setTimeout(() => {
      this.navCtrl = this.nav;
      this.nav.viewDidEnter.subscribe((view) => {
        if(view.instance.constructor.name != "LoginPage")
          this.habilitarMenu = true;
        
        $('navdown').find('ion-icon').removeClass('active');

        if(view.instance.constructor.name == "HomePage")
          $('navdown').find('[name="ico-home"]').addClass('active');
        else if(view.instance.constructor.name == "NotasPage")  
          $('navdown').find('[name="ico-notas"]').addClass('active');
        else if(view.instance.constructor.name == "CalendarioPage")  
          $('navdown').find('[name="ico-calendario"]').addClass('active');
        else if(view.instance.constructor.name == "EstouChegandoPage")  
          $('navdown').find('[name="ico-chegando"]').addClass('active');
        else if(view.instance.constructor.name == "FinanceiroPage")  
          $('navdown').find('[name="ico-financeiro"]').addClass('active');
        
      });
    }, 0);     
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(this.appService.currentPage == CalendarioPage) {
      if(page.component == CalendarioPage) {
        return false;
      } 
    }
    this.appService.currentPage = page.component;
    this.nav.setRoot(page.component);
    
  }
  getActivePage(): any {
    //console.log(this.nav.getActive().name);
  }

  mudarRota() {
    // console.log(this.nav)
    this.nav.push(UsuarioPage)
  }
  menuClosed() {
    $('.navdown').removeClass('sair');
    $('.navdown').addClass('voltar');
  }

  menuOpened() {
    $('.navdown').addClass('sair');
    $('.navdown').removeClass('voltar');
  }
  goLogout() {
    this.navCtrl.push(LoginPage)
  }
  
  goUser() {
    this.navCtrl.push(UsuarioPage);
  }


  obterQuestaoSidebar(id) {
    this.menuCtrl.toggle('right'); 
    this.events.publish('trocarQuestaoEvent', id);
  }
}
