import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as $ from 'jquery';

import { NotasService } from './notas.service';
import { NotasListaProvasPage } from './notas-lista-provas/notas-lista-provas';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {


  @ViewChild('selectTest') select: ElementRef;


  data: any[];
  id: any;
  media = 0.00;
  mediaFake;
  active;
  currentFaltas = '';
  firstDisciplina: string;
  preLoader: boolean = true;
  listaProva = [];
  currentDisciplina;
  serviceSubscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appService: AppService,
    private _notasService:NotasService,
    private _renderer2: Renderer2,
    private alertCtrl: AlertController
  ) {
    // this.media = this._notasService.calculaMedia(this.listaProva[0]);
  }

  ionViewDidLoad() { }

  ngOnInit() {
    
    if(this.appService.notas.length > 0) {
        this.id = this.appService.notas[0].id;
        this.getDataMateria();
        this.currentDisciplina = this.appService.notas[0];
        this.firstDisciplina = this.appService.notas[0].disciplina.nome;
        // this.currentFaltas = this.appService.notas[0].faltas;
        //this.media = this._notasService.calculaMedia(this.appService.notas[0].provas);
    } else {
        this.serviceSubscription = this.appService.onChangeDisciplinas.subscribe({
            next: (event) => {
                this.id = this.appService.notas[0].id;
                this.getDataMateria();
                this.currentDisciplina = this.appService.notas[0];
                this.firstDisciplina = this.appService.notas[0].disciplina.nome;
                // this.currentFaltas = this.appService.notas[0].faltas;
                //this.media = this._notasService.calculaMedia(this.appService.notas[0].provas);
            }
        });
    }  
    
  } // end OnInit

  getDataMateria() {
      
    let currentData;
    let currentObj;
    // for(let i = 0; i < this.appService.notas.length; i++) {
    //     if(this.appService.notas[i].id == this.id) {
    //         currentObj = this.appService.notas[i];
    //     }
    // }

    currentObj =  this.appService.notas.find(x => x.id == this.id);   
    this.currentDisciplina = currentObj;
    // this.currentFaltas = this.currentDisciplina.faltas;
    // currentData = currentObj.provas;

    // this.media = this._notasService.calculaMedia( currentData )

    // Váriavel global listaProvas de NotasService recebe valor de dados,
    // disciplina filtrada para compartilhamento entre components.
    this._notasService.listaProvas = currentData;
    // this.id = currentData[0].grade.id;


    this._notasService.filtroDisciplinas(this.id)
            .subscribe( dados => {
              localStorage.setItem('dadosNotas', JSON.stringify(dados))

              this.preLoader = false;
              this.media = this._notasService.calculaMedia( dados )

              // Váriavel global listaProvas de NotasService recebe valor de dados,
              // disciplina filtrada para compartilhamento entre components.
              this._notasService.listaProvas = dados;
              this.id = dados[0].grade.id;
              this.progress(this.media);
              
            },
            () => {
              this.media = 0.00;
              this.progress(this.media);
              this.appService.showAlert('', 'Nenhuma prova encontrada.', 'Ok');
            });
                

  }
  progress(percent) {
    
    setTimeout(() => {
      $(".js-radial-mask").css('transform', 'rotate(' + 1.8 * percent + 'deg)');
      $(".js-radial-fill").css('transform', 'rotate(' + 1.8 * percent + 'deg)');
      $(".js-radial-fill_fix").css('transform', 'rotate(' + 3.6 * percent + 'deg)');      
    }, 0)
   
  };

  onChangeFilter(deviceValue: Event) {      

    let buttonIonSelect = document.querySelector('.item-cover-default-ios');
    this.getDataMateria();

    if(buttonIonSelect) { 
      setInterval(() => { this._renderer2.addClass(buttonIonSelect, 'fadeOutDown') }, 100)
    }

  }

  goExams(){
    this.navCtrl.push(NotasListaProvasPage, { idMateria: this.id, disciplina: this.currentDisciplina.disciplina }, { animate: false });
  }

  onChangeFake(event){
    this.mediaFake = event
    console.log(this.mediaFake)
  }
  
}
