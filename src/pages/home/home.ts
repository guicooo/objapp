import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UsuarioService } from '../usuario/usuario.service';
import { NotasService } from '../notas/notas.service';
import * as $ from 'jquery';
import { UsuarioPage } from '../usuario/usuario';
import { NotificacoesPage } from '../notificacoes/notificacoes';
import { AppService } from '../../app/app.service';
import { CalendarioService } from '../calendario/calendario.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ UsuarioService, NotasService ]
})
export class HomePage {
  
  mediaGeral: number;
  usuario: any;
  listaProvas: any[] = [];
  nome: string;
  preLoader: boolean = true;

  constructor(public navCtrl: NavController,  
              private _usuarioService: UsuarioService,
              private _notasService: NotasService,
              public calendarioService: CalendarioService,
              private _menuCtrl: MenuController,
              public appService: AppService
              ) {
    $('navdown').show();
    $('ion-menu').show();      
    this.progress(75);
    if(localStorage.getItem('dados'))
    {
      var data = JSON.parse(localStorage.getItem('dados'));
      this.usuario = data 
      let nome = this.usuario.nome;
      this.nome = nome.substring(0, nome.indexOf(" ")) +
                  nome.substring(nome.lastIndexOf(" "));

      this.appService.nome = this.nome                  

    }
    else
    {
      this._usuarioService.getUsers()
                .subscribe(data => {
                  localStorage.setItem('dados', JSON.stringify(data))
                  this.preLoader = false;
                  this.usuario = data 
                  let nome = this.usuario.nome;
                  this.nome = nome.substring(0, nome.indexOf(" ")) +
                              nome.substring(nome.lastIndexOf(" "));
                              
                  this.appService.nome = this.nome
                });

    }

    if(!this.appService.alreadyLoadedDisciplinas) {
      this._notasService.getResumoDisciplinas()
        .subscribe((dados: any) => {
          this.appService.notas = dados;
          this.populateHome();
          this.appService.alreadyLoadedDisciplinas = true;
        },
        (err) => {
          this.appService.alreadyLoadedDisciplinas = false;
          this.appService.showToaster('Ocorreu algum erro na requisição, tente novamente mais tarde.', 3000);
        });
    } else {
      this.populateHome();
    }
         
  }

  populateHome() {
    this.appService.emitDisciplinas(this.appService.notas);
    this.preLoader = false;
    this.mediaGeral = 75;
    this.progress(this.mediaGeral);
  }

  toggleMenu() {
    this._menuCtrl.toggle();
  }
  
  progress(percent) {
    
    setTimeout(() => {
      $(".js-radial-mask").css('transform', 'rotate(' + 1.8 * percent + 'deg)');
      $(".js-radial-fill").css('transform', 'rotate(' + 1.8 * percent + 'deg)');
      $(".js-radial-fill_fix").css('transform', 'rotate(' + 3.6 * percent + 'deg)');      
    }, 0)
  }; 


  openNotificacoes() {  
    this.navCtrl.setRoot(NotificacoesPage)
  }

}