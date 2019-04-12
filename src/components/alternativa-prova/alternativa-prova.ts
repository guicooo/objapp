import { Component, Input } from '@angular/core';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the AlternativaProvaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alternativa-prova',
  templateUrl: 'alternativa-prova.html'
})
export class AlternativaProvaComponent {

  @Input() questaoAtiva;
  public indiceResposta;
  public indiceCorreta;
  constructor(private _appService: AppService) { }

  ngOnInit() {  
    let resposta = this._appService.provaAtiva.gabaritos.find(x => x.numero == this.questaoAtiva.numero && x.tipo == this.questaoAtiva.tipo).resposta.toLowerCase();
    this.indiceResposta = EIndiceResposta[resposta];   
  }
  devolverDescricao(index: number, valor: string) {
    return EIndiceResposta[index] + ' - ' + valor.replace(/<p>/, '');
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