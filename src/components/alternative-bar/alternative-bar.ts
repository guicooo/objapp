import { Component, Input, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';
import { IQuestao } from '../../interfaces/IQuestao';
import { IProva } from '../../interfaces/IProva';
import { ProvaService } from '../../services/provas.service';
import { QuestoesService } from '../../services/questoes.service';
import { AppService } from '../../app/app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NavParams, Events } from 'ionic-angular';
@Component({
  selector: 'alternative-bar',
  templateUrl: 'alternative-bar.html'
})
export class AlternativeBarComponent {

  public questoes: IQuestao[] = [];
  public numeroDaQuestao = 1;
  public id;
  @Input() prova: IProva;
  @Output() trocaQuestao =  new EventEmitter();

  constructor(
    private _provasService: ProvaService, 
    private _questoesService: QuestoesService, 
    private _appService: AppService,   
    public navParams: NavParams,
    public events: Events    
   ) { 
    
    this.events.subscribe('trocarQuestaoEvent', (data) => {
      this.obterQuestao(data)
    });

    this.id = this.navParams.get('id');

    //this._router.firstChild.paramMap.subscribe(( params: ParamMap ) : void => { this.id = params.get( "id" ); });

    this._questoesService.listarQuestoesAlternativas(this.id).then((data: any) => {      
        this.questoes = this.questoes.concat(data);   
        this._questoesService.listarQuestoesDiscursivas(this.id).then((data: any) => {     
          this.questoes = this.questoes.concat(data);              
          this.tratarQuestoes();                                   
        },
        () => {
          this.tratarQuestoes();   
        });  
    },
    () => {
      this._questoesService.listarQuestoesDiscursivas(this.id).then((data: any) => {     
        this.questoes = this.questoes.concat(data);              
        this.tratarQuestoes();                                   
      },
      () => {
        this.tratarQuestoes();
      }); 
    });  
  }

  buscarPercentual(item) {    
    // console.log(item)
    var percentual = this.prova.gabaritos.find(x => x.numero == item.numero && x.tipo == item.tipo).percentual
    return percentual
  }


  obterQuestao(id: string) { 
    // console.log(id)
    let questao = this.questoes.find(x => x.id == id)
    this.numeroDaQuestao = this.questoes.findIndex(x => x.id == id) + 1;
    
    document.querySelectorAll('nav li.active')[0]
              ? document.querySelectorAll('nav li.active')[0].className = '' 
              : '';

    document.getElementById(questao.id) 
              ? document.getElementById(questao.id).className = 'active' 
              : '';
    
    this._appService.classeCheckApoio = '';                  
    this._appService.classeCheckConteudo = '';
    this._appService.classeCheckExercicios = '';
    this._appService.classeCheckResolucao = '';
    this._appService.classeCheckVideos = '';
    this._appService.classeCheckJogos = '';

    this.trocaQuestao.emit(questao);
    //this._route.navigate(['prova/detalhes/', this.prova.id])    
  }

  tratarQuestoes() {
   
    this.questoes.sort((a, b) => a.numero > b.numero ? 1 : -1)
    this.questoes.sort((a, b) => a.tipo > b.tipo ? 1 : -1);          
    this.questoes.reverse();    
    
    if(navigator.userAgent.indexOf("Firefox") > -1) {
      // this.questoes.sort((a, b) => a.numero > b.numero ? 1 : -1);
      this.questoes.sort((a, b) => a.tipo > b.tipo ? 1 : -1);  
      this.questoes.reverse();       
    }   
    
    console.log(this.questoes)
    this._appService.questoes = this.questoes;
    this.obterQuestao(this.questoes[0].id)  
   
  }

  ngOnInit() {

    // $('.m_nav_proff, .btn-alternative').click(function(){
    //   if ($('.open').length <= 0){
    //     $( ".openMenu-provas" ).trigger('click');
    //   }      
    //   $('.m_nav_proff').toggleClass('openAlternative');

    // });  

  }

}
