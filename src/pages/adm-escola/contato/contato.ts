import { Component, OnInit, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage implements OnInit {

  students: any; // receives a list of students
  filterClass: any;
  idStudent: any;
  idTurma: any;
  @Output() voltar = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.filterClass =  JSON.parse(localStorage.getItem('listaAlunos'));
    this.idStudent = this.navParams.get('id');
    this.idTurma = this.navParams.get('idTurma')  
  }

  ionViewDidLoad() { }

  ngOnInit() {

    this.students =  JSON.parse(localStorage.getItem('listaAlunos'));
    this.idStudent = this.navParams.get('id');
    this.idTurma = this.navParams.get('idTurma')

    this.students.forEach((value, index) => value.id == this.idTurma ? this.filterClass = value.alunos : false);

  }

}
