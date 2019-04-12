import { Component, OnInit, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotasDetalhesPage } from '../notas-detalhes/notas-detalhes';
import { NotasService } from '../notas.service';

/**
 * Generated class for the NotasListaProvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-notas-lista-provas',
  templateUrl: 'notas-lista-provas.html',
})
export class NotasListaProvasPage implements OnInit {

  nomeMateria: any;
  notaMaxima: number;
  id: any;
  disciplina: any;
  listaProvas: any[] = [];
  filtroProva: any[] = [];

  @Output() voltar = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _notasService: NotasService) {
    this.id = navParams.get('idMateria');
    this.disciplina = navParams.get('disciplina').nome;    
  }

  ngOnInit() {
    this._notasService.filtroDisciplinas(this.id)
            .subscribe((data) => {
              this.listaProvas = data;
            },
            () => {

            })
    // this.listaProvas =  JSON.parse(window.localStorage.getItem('dadosNotas'))
    // JSON.parse(localStorage.getItem('materias')).forEach((value, index) => {
    //   value.id == this.id ? this.nomeMateria = value.disciplina.nome : false;
    // });

    // console.log(this.nomeMateria)
  }

  ionViewDidLoad() { }

  goDetails(id: any) { 
    this.navCtrl.push(NotasDetalhesPage, { prova: this.listaProvas.find(x => x.id == id), disciplina: this.disciplina }, {animate: true, animation: 'ios-animation'});
  }

}
