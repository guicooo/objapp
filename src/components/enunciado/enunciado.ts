import { Component, Input } from '@angular/core';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the EnunciadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'enunciado',
  templateUrl: 'enunciado.html'
})
export class EnunciadoComponent {

  public imagem;
  public enunciado;
  public enunciadoImg;

  @Input()
  set questaoAtiva(questao) {
    this.imagem = questao.imagem ? questao.imagem : '';
    this.enunciadoImg = questao.enunciadoImg ? questao.enunciadoImg : '';
    this.enunciado = questao.enunciado;   
  }
  
  constructor(public appService: AppService) { }

  ngOnInit() { }
}
