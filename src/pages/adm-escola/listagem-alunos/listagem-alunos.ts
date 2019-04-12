import { Component, Input, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdmInspetorService } from '../adm-escola.service';
import { ContatoPage } from '../contato/contato';

/**
 * Generated class for the ListagemAlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-listagem-alunos',
  templateUrl: 'listagem-alunos.html',
})
export class ListagemAlunosPage {

  periods: any; // receives a list of categories, for populating the 'dropdown' periods.
  categories: any; // receives a list of categories

  students: any; // receives a list of students
  listStudents: any[] = []; // receives the return of filter getStudents()
  contador: any[] = []; // receives every status with of name 'Cancelado'

  @Input() idPeriod: any = 0;
  @Input() idCategories: any= 0;
  @Output() voltar = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _admService: AdmInspetorService
  ) {
  }

  ionViewDidLoad() { }

  ngOnInit() {

    this._admService.getPeriod()
      .subscribe(data => {
        this.periods = data;
        console.log('periodos', this.periods)
      })

    this._admService.getStudents()
      .subscribe(data => {
        this.students = data;
        localStorage.setItem('listaAlunos',  JSON.stringify(this.students));
        console.log('alunos', this.students)
      })

  }

  getPeriod(){
    this.periods.forEach((value, index) =>  value.id == this.idPeriod ? this.categories = value.categorias : false );
  }
  
  filterStudents(){
    this.contador.length = 0;
    this.students.forEach((value, index) =>  {
      value.id == this.idCategories ? this.listStudents = value.alunos : false;
    }); 

    this.listStudents.forEach((value, index) => {
      value.status == 'Cancelado' || value.status == 'Pendente' ? this.contador.push(value.status) : false;
    });  

  }

  goContact(id: any, idTurma: any) {
    this.navCtrl.push(ContatoPage, { id: id, idTurma: idTurma }, { animate: true, animation: 'ios-animation' });
    console.log(id)
  }

}