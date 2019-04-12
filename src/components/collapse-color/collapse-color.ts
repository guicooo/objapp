import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

/**
 * Generated class for the CollapseColorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'collapse-color',
  templateUrl: 'collapse-color.html'
})

export class CollapseColorComponent implements OnInit {

  @Input()  listLi: any[];
  @Input()  color: string;
  @Input()  id: any;
  @Input()  link: any;
  @Input()  disciplina: string;
  @Input()  diaEvento: number;
  @Input()  mesEvento: string;
  @Input()  title: string;
  @Input()  casa: string;
  @Input()  mensagem: string;
  @Input()  professor: string;
  @Input()  nota: number;

  arrayCores: any = [
    { cor: 'red' },
    { cor: 'blue' },
    { cor: 'green' },
    { cor: 'orange' },    
  ]

  constructor() { }

  ngOnInit() {

  }

  changeCollor(index){
    return this.arrayCores[index >= 4 ? index % 4 : index].cor
  }


  openCollapse(event, id) { $(`.collapse#id${id}`).toggleClass('show') }
}
