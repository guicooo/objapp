import { Component, Input, EventEmitter, Output } from '@angular/core';
import $ from 'jquery'
/**
 * Generated class for the TitlePageProvasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'title-page-prova',
  templateUrl: 'title-page-provas.html'
})
export class TitlePageProvasComponent {
  @Input() color: string;
  @Input() title: string;
  @Input() hideTrilha : boolean = true;
  @Input() valores;
  @Output() clickEvento = new EventEmitter();

  text: string;

  constructor() {

  }

  obter(item, event) {       
    $('.ativo').removeClass('ativo');
    $(event.target).addClass('ativo');
    this.clickEvento.emit(item)
  }

}
