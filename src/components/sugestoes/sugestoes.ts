import { Component, Input } from '@angular/core';
import { AppService } from '../../app/app.service';
import $ from 'jquery';

/**
 * Generated class for the SugestoesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sugestoes',
  templateUrl: 'sugestoes.html'
})
export class SugestoesComponent {

  @Input() questaoAtiva;
  public sugestaoAtiva = '';
  public imgSugestaoAtiva = '';
  constructor(public appService: AppService) { }

  ngOnInit() {    
    this.sugestaoAtiva = this.questaoAtiva.sugestoes[0].texto;    
    this.imgSugestaoAtiva = this.questaoAtiva.sugestoes[0].textoImg;

    $('#exampleModal').on('show.bs.modal', function () {
      $('.number-title-sugestoes > .ativo').trigger('click');
    })
  }

  obter(item, event) {    
    this.sugestaoAtiva = item.texto;        
    this.imgSugestaoAtiva = this.appService.urlImagemTarefaNet + item.textoImg.toString().replace('~/','');   
    $('.number-title-sugestoes > .ativo').removeClass('ativo');
    $(event.target).addClass('ativo');
  }

}
