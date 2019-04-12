import { Component, OnInit, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { ProvasPage } from '../../provas/provas';
import { NotasService } from '../notas.service';


// @IonicPage()
@Component({
  selector: 'page-notas-detalhes',
  templateUrl: 'notas-detalhes.html',
})
export class NotasDetalhesPage implements OnInit {

  provaFiltrada: any;
  id: any;
  disciplina: any;
  nomeDisciplina: any; 
  @Output() voltar = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _notasService: NotasService) {    
    this.provaFiltrada = navParams.get('prova');
    this.id = this.provaFiltrada.id;
    this.disciplina = navParams.get('disciplina');    
  }

  ionViewDidLoad() { }

  ngOnInit() {

  }

  progress(percent) {
    
    setTimeout(() => {
      $(".js-radial-mask").css('transform', 'rotate(' + (180 / 10 ) * percent + 'deg)');
      $(".js-radial-fill").css('transform', 'rotate(' + (180 / 10 )  * percent + 'deg)');
      $(".js-radial-fill_fix").css('transform', 'rotate(' + (360 / 10 ) * percent + 'deg)');
    }, 0)
   
  }

  goProvas(){
    this.navCtrl.push(ProvasPage, { animate: false, id: this.id });
  }

}
