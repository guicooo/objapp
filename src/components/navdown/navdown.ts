import { Component, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from '../../app/app.service';

import { HomePage } from '../../pages/home/home';
import { NotasPage } from '../../pages/notas/notas';
import { EstouChegandoPage } from '../../pages/estou-chegando/estou-chegando';
import { CalendarioPage } from '../../pages/calendario/calendario';
import { FinanceiroPage } from '../../pages/financeiro/financeiro';
import { ConteudoOnlinePage } from '../../pages/conteudo-online/conteudo-online';

@Component({
  selector: 'navdown',
  templateUrl: 'navdown.html'
  // template: `
  // <ion-tabs>
  //   <ion-tab [root]="home" tabIcon="ico-home"></ion-tab>
  //   <ion-tab [root]="notas" tabIcon="ico-notas"></ion-tab>
  //   <ion-tab [root]="calendario" tabIcon="ico-calendario"></ion-tab>
  //   <ion-tab [root]="chegando" tabIcon="ico-chegando"></ion-tab>
  //   <ion-tab [root]="financeiro" tabIcon="ico-financeiro"></ion-tab>

  // </ion-tabs>`
})
export class NavdownComponent {
  @Input() navCtrl;
  @Output() mudarRota = new EventEmitter();
  @ViewChild('atend') atendimento: ElementRef;
  currentPage: any = '';


  // listMenu: any[] = [
  //   {link: 'atividades', ico: 'atividades', title: 'Atividades'},
  //   {link: 'calendario', ico: 'calendario', title: 'Calendário'},
  //   {link: 'financeiro', ico: 'financeiro', title: 'Financeiro'},
  //   {link: 'notas', ico: 'notas', title: 'Notas'},
  //   {link: 'estou-chegando', ico: 'chegando', title: 'Estou Chegando'},
  //   {link: 'autorizacoes', ico: 'autorizacoes', title: 'Autorizações'}
    
  // ];

  menuIcons: boolean = false;
  home: any;
  notas: any;
  calendario: any;
  chegando: any;
  financeiro: any;

  constructor(
    private appService : AppService,
    //public _nav: NavController
  ) {  
    this.home = HomePage;
    this.notas = NotasPage;
    this.calendario = CalendarioPage;
    this.chegando = EstouChegandoPage;
    this.financeiro = FinanceiroPage;
  }
  ngOnInit() {

  }



  redirecionar(nome: string){
    // console.log(nome)
    
    
    
    if(nome == 'home') {
      this.navCtrl.setRoot(HomePage, null, {animate: false});
      this.appService.currentPage = nome;
    } else if(nome == 'notas') {
      this.navCtrl.setRoot(NotasPage, null, this.appService.navOptions);
      this.appService.currentPage = nome;
    } else if(nome == 'chegando') {
      this.navCtrl.setRoot(EstouChegandoPage, null, this.appService.navOptions);
      this.appService.currentPage = nome;
    } else if(nome == 'conteudo') {
      this.navCtrl.setRoot(ConteudoOnlinePage, null, this.appService.navOptions);
      this.appService.currentPage = nome;
    } else if(nome == 'calendario') {       
      if(this.appService.currentPage == CalendarioPage) {
          return false;
      }
      this.appService.currentPage = CalendarioPage;
      this.navCtrl.setRoot(CalendarioPage, null, this.appService.navOptions);
    } else if(nome == 'financeiro') {
      this.navCtrl.setRoot(FinanceiroPage, null, this.appService.navOptions);
      this.appService.currentPage = 'nome';
    }

    
  }
}
