import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, MenuController } from 'ionic-angular';
import { IProva } from '../../interfaces/IProva';
import { IQuestao } from '../../interfaces/IQuestao';
import { ISidebar } from '../../interfaces/ISidebar';
import { ProvaService } from '../../services/provas.service';

import { AulaService } from '../../services/aula.service';
import { QuestoesService } from '../../services/questoes.service';
import { ExerciciosService } from '../../services/exercicios.service';
import { AppService } from '../../app/app.service';
import * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'app-provas',
  templateUrl: 'provas.html',
  providers: [  ProvaService, AulaService, QuestoesService, ExerciciosService ]
})
export class ProvasPage {

  @Output() prova: IProva;
  @Output() questaoAtiva: IQuestao;
  @Output() opcoesSidebar: ISidebar = { textoDeApoio : true, jogos: true, conteudos: true, exercicios: true, videos: true };
  
  public id;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _provasService: ProvaService, 
    public _appService: AppService,    
    private _aulaService: AulaService,
    private _questoesService: QuestoesService,
    private _exerciciosService: ExerciciosService,
    public events: Events,
    public menuCtrl: MenuController
    ) {
      
      
    this.id = this.navParams.get('id');

    this._provasService.obterProvaPorId(this.id)
              .then((data) => {
                  this.prova = data;                
                  this._appService.provaAtiva = this.prova;                 
              })
              .catch((error) =>  {})

    }
  ngOnInit() {
    this._appService.provas = true;
  }
  ngOnDestroy(){
    this._appService.provas = false;
    
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProvasPage');
  }

  obterQuestao(questao: IQuestao) {  
    console.log(questao)
    this.opcoesSidebar = { textoDeApoio : true, jogos: true, conteudos: true, exercicios: true, videos: true };
    if(questao.tipo.toLowerCase() == "alternativa") {
      this._questoesService.obterQuestaoAlternativa(questao.id)
              .then((data: any) => {                  
                  this.questaoAtiva = data; 
                  this._appService.questaoAtiva = data            
                  this.obterVinculos();
              })
              .catch(() => {})
      
    } else {
      this._questoesService.obterQuestaoDiscursiva(questao.id)
            .then((data: any) => {                
                this.questaoAtiva = data;   
                this._appService.questaoAtiva = data;           
                this.obterVinculos();
            })
            .catch(() => {})
    }  
       

  }

  obterVinculos() {
    
    let resposta = this._appService.provaAtiva.gabaritos.find(x => x.numero == this.questaoAtiva.numero && x.tipo == this.questaoAtiva.tipo).resposta.toLowerCase();    
    this._appService.indiceResposta = EIndiceResposta[resposta];

    this._appService.questaoAtiva = this.questaoAtiva; 
             
    this._appService.textoApoio = this.questaoAtiva.textoApoio;
    
    // Habilita ou não o texto de apoio no sidebar
    this.opcoesSidebar.textoDeApoio =  this._appService.textoApoio ? true : false; 
    
    this._appService.conteudo = [];
    this._appService.jogos = [];
    this._appService.exercicios = [];       
    this._appService.videos = [];

    if(this.prova.gabaritos.find(x => x.numero == this.questaoAtiva.numero && x.tipo == this.questaoAtiva.tipo).percentual == 1) 
    {
      this.opcoesSidebar.jogos = false;
      this.opcoesSidebar.videos = false;
      this.opcoesSidebar.conteudos = false;
      this.opcoesSidebar.exercicios = false;
      return; 
    }
    
    this.obterAula(this.questaoAtiva.id);
    this.obterExercicios(this.questaoAtiva.id);
    // this.opcoesSidebar.exercicios = false; // remover quando for pra ter exercicios

    
  }

  obterAula(id: string) {
    this._aulaService.listarAula(id).subscribe((data: any) => {     
        this.tratarAula(JSON.parse(data._body));       
    }, () => {

      this.opcoesSidebar.jogos = false;
      this.opcoesSidebar.videos = false;
      this.opcoesSidebar.conteudos = false;

    });
  }

  obterExercicios(id: string) {
    this._exerciciosService.listarExercicios(id).subscribe((data: any) => {    
        data = JSON.parse(data._body)
        this._appService.exercicios = data.map(x => x.id);
        !this._appService.exercicios ? this.opcoesSidebar.exercicios = false : null;
    }, () => { this.opcoesSidebar.exercicios = false;  });
  }

  tratarAula(dados: any[]) {
    // console.log(dados)
    this._appService.conteudo = [];
    this._appService.jogos = [];      
    this._appService.videos = [];
    
    dados.forEach((value) => {         
      if(value.tag.indexOf("video") != -1)
        this._appService.videos.push(value.id);     
      if(value.tag.indexOf("iteratividade") != -1)
        this._appService.jogos.push(value.id);     
      if(value.tag.indexOf("nivelamento") != -1 || value.tag == "")
        this._appService.conteudo.push(value.id);       
    });

    if(this._appService.videos.length == 0)
      this.opcoesSidebar.videos = false;
    if(this._appService.jogos.length == 0)
      this.opcoesSidebar.jogos = false;
    if(this._appService.conteudo.length == 0)
      this.opcoesSidebar.conteudos = false;
    
  }

  toggleMenu() {
    this.menuCtrl.toggle('right'); 
  }
 
}

export enum EIndiceResposta {
  "a" = 0,
  "b" = 1,
  "c" = 2,
  "d" = 3,
  "e" = 4,
  "f" = 5,
  "g" = 6,
  "h" = 7
}



