import { Component, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from '../../app/app.service';
import { HomePage } from '../../pages/home/home';
import { NotasPage } from '../../pages/notas/notas';
import { CalendarioPage } from '../../pages/calendario/calendario';
import { EstouChegandoPage } from '../../pages/estou-chegando/estou-chegando';
import { FinanceiroPage } from '../../pages/financeiro/financeiro';
import { ConteudoOnlinePage } from '../../pages/conteudo-online/conteudo-online';
import { ProvasPage } from '../../pages/provas/provas';
import { ConteudoPage } from '../../pages/provas/conteudo/conteudo';
import { VideosPage } from '../../pages/provas/videos/videos';
import { ExerciciosPage } from '../../pages/provas/exercicios/exercicios';
import { JogosPage } from '../../pages/provas/jogos/jogos';
import { TextoApoioPage } from '../../pages/provas/texto-apoio/texto-apoio';

/**
 * Generated class for the MenuProvaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-prova',
  templateUrl: 'menu-prova.html'
})
export class MenuProvaComponent {
  @Input() navCtrl;
  @Output() mudarRota = new EventEmitter();
  @ViewChild('atend') atendimento: ElementRef;
  currentPage: any = '';


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
            
    if(nome == 'prova') {
      this.navCtrl.setRoot(ProvasPage, null, {animate: false});
      this.appService.currentPage = nome;
    } else if(nome == 'conteudo') {
      this.navCtrl.setRoot(ConteudoPage, null, this.appService.navOptions);
      this.appService.currentPage = nome;
    } else if(nome == 'videos') {
      this.navCtrl.setRoot(VideosPage, null, this.appService.navOptions);
      this.appService.currentPage = nome;
    } else if(nome == 'exercicios') {
      this.navCtrl.setRoot(ExerciciosPage, null, this.appService.navOptions);
      this.appService.currentPage = nome;    
    } else if(nome == 'jogos') {
      this.navCtrl.setRoot(JogosPage, null, this.appService.navOptions);
      this.appService.currentPage = 'nome';
    } else if(nome == 'textoApoio') {
      this.navCtrl.setRoot(TextoApoioPage, null, this.appService.navOptions);
      this.appService.currentPage = 'nome';
    } else if(nome == 'resolucao') {
      this.navCtrl.setRoot(TextoApoioPage, null, this.appService.navOptions);
      this.appService.currentPage = 'nome';
    }
    
  }

  ngOnDestroy() {
    this.appService.jogos = [];
    this.appService.exercicios = [];
    this.appService.conteudo = [];
    this.appService.videos = [];
    this.appService.textoApoio = '';
  }

}
