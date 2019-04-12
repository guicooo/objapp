import { Injectable, EventEmitter } from '@angular/core';
import * as crypto from 'crypto-js';
import { Http, Headers, RequestOptions } from '@angular/http';
import { TweenMax, Sine} from 'gsap';
import * as $ from 'jquery';
import { ToastController, AlertController } from 'ionic-angular';
import { NotasPage } from '../pages/notas/notas';
import { IGrade } from '../interfaces/IGrade';
import { IProva } from '../interfaces/IProva';
import { IQuestao } from '../interfaces/IQuestao';

@Injectable()
export class AppService {

  /*
    Header padrão para fazer requisições.
    Usar os métodos delete e append para deletar e adicionar campos no header 'se necessário'.
    Link da cocumentação: https://angular.io/api/http/Headers 
  */
  public token: string = localStorage.getItem('token') ? localStorage.getItem('token') : '';
  public listaGrade: IGrade[] = localStorage.getItem('grade') ? <any>JSON.parse(localStorage.getItem('grade')) : <any>'';
  public serie: string = localStorage.getItem('serie') ? localStorage.getItem('serie') : '';
  public questoesProva: any = '';
  public questoes: any;
  public provaAtiva: IProva;
  public questaoAtiva: IQuestao;
  public textoApoio: string;
  public videos: any[] = [];
  public conteudo: any[] = [];
  public exercicios: any[] = [];
  public jogos: any[] = [];
  public classeCheckConteudo = '';
  public classeCheckVideos = '';
  public classeCheckResolucao = '';
  public classeCheckApoio = '';
  public classeCheckExercicios = '';
  public classeCheckJogos = '';
  public quantidadeLiProvas = 0;
  public quantidadeLiClicadasProvas = 0;
  public porcRevisao = 75;
  public indiceResposta: any;
  public provas : boolean = false;

  public urlImagemTarefaNet = 'http://www.objetivo.br/tarefanet/Api/Asserts/Images/' // "http://200.174.103.116/tarefanet/Api/Asserts/Images/"
  
  contNotification: any;
  alreadyLoadedDisciplinas: boolean = false;
  public onChangeDisciplinas: EventEmitter<NotasPage> = new EventEmitter();

  header = new Headers ({
    'Content-Type': 'application/x-www-form-urlencoded',
    'appKey': 'YPpj++OV7AckYkJ7lLL1OJPO+rCJPXv1GggdgV8aFsPxDXNLN3OIF2k8GQfUAboY',
    'userKey': this.token
  });
  
  // RequestOptions
  requestOptions = new RequestOptions ({
    headers: this.header 
  })
  base64Image = 'assets/img/bg-user.jpg';
  publicKey: string = 'DcBvX4hEONE5tST6bL0X';
 
  nome: string;
  currentPage: any = '';
  notas = [];
  news: any = [
    {
      title: "RO, VC e RV",
      description: "Revisão bimestral/RO, verificação complementar e recuperação de...",
      image: "assets/img/banners/news-fallback.jpg"
    },
    {
      title: "Medalhas em olimpíadas científicas",
      description: "Alunos do Objetivo já conquistaram 7.014 medalhas em olimpíadas científicas",
      image: "assets/img/banners/news-fallback.jpg"
    },
    {
      title: "Medalha de prata no IYPT",
      description: "Na China, aluno do Colégio Objetivo conquista medalha de prata no IYPT, a \"Copa do Mundo da Física\"",
      image: "assets/img/banners/news-fallback.jpg"
    }
  ]
  
  public navOptions = {
    animate: false
  };
  constructor(
    public toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { 
    let encryptedToken = localStorage.getItem('utk') || 'a';
    this.decryptToken(encryptedToken);
  }

  decryptToken(token: string) {
    // Decrypt
    let bytes  = crypto.AES.decrypt(token.toString(), this.publicKey);
    this.token = bytes.toString(crypto.enc.Utf8);
  }

  showMenu(){
    $( ".menu-icons" ).fadeIn();
    var animateTime = 0;
    $('.list-menu-item.openMenu').each((i, obj )=>{
      animateTime += 0.03; 
      TweenMax.fromTo($(obj), 0.45, {
        x: "-100%",
        alpha: 0
    }, {
        x: "0%",
        alpha: 1,
        delay: animateTime,
        ease: Sine.easeInOut
      });
    });
     

      $( ".openMenu" ).addClass('change');
      $('body').addClass('scrollblock');
      
  }

  hideMenu(){
      $( ".menu-icons" ).fadeOut();
      $( ".openMenu" ).removeClass('change');
      $('body').removeClass('scrollblock');
  }

  showToaster(msg, duration) {
    let toast = this.toastCtrl.create({
        message: msg,
        duration: duration
    });
    toast.present();
  }

  showAlert(title, message, btnText) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [btnText]
    });
    alert.present();
  }

  emitDisciplinas(dados) {
    this.notas = dados;
    this.onChangeDisciplinas.emit(dados);
  }
}
