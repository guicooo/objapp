import { Component, Input } from '@angular/core';

/**
 * Generated class for the CabecalhoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cabecalho',
  templateUrl: 'cabecalho.html'
})
export class CabecalhoComponent {

  public numero = 1;
  public dificuldade = '';
  public tipo = '';
  public instituto = 'Objetivo';

  @Input() 
  set questaoAtiva(questao) {
    this.numero = questao.numero;
    this.dificuldade = EPeso[questao.dificuldade];
    this.tipo = questao.tipo == 'Alternativa' ? 'Questão objetiva' : 'Questão ' + questao.tipo;    
  }
  
  constructor() { }

  ngOnInit() { }
 
}


export enum EPeso {
  "Facil" = "Fácil",
  "Medio" = "Médio",
  "Dificil" = "Difícil",
}