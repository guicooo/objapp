import { Component, OnInit, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsuarioService } from '../usuario.service';
import { SharedService } from '../../../shared/shared.service';
import { HomePage } from '../../home/home';
import { AppService } from '../../../app/app.service';


@Component({
  selector: 'page-usuario-editar',
  templateUrl: 'usuario-editar.html',
})
export class UsuarioEditarPage implements OnInit {
  @Output() voltar = true;

  usuario: any;
  idUsuario: string;
  nome: string;
  formEditar: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuarioService: UsuarioService,
    public _formBuilder: FormBuilder,
    public appService: AppService,
    private _sharedService: SharedService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioEditarPage');

    this._usuarioService.getUsers()
      .subscribe(data => { 
        // let infoUser = document.querySelector('.body-user');
        // this.preLoader = false;
        console.log(data)
        this.usuario = data;
        let nome = this.usuario.nome;
        this.nome = nome.substring(0, nome.indexOf(" ")) +
                    nome.substring(nome.lastIndexOf(" "));

       }) 
  }

  ngOnInit() {
    this.formEditar = this._formBuilder.group({
      nome: [null],
      email: [null, Validators.email],
      telefone: [null],
      serie: [null],
      colegio: [null]
    })

  }

  update(id: any) {

    let body = this._sharedService.tratarObjeto(this.formEditar.value);
    console.log(body)
    this._usuarioService.updateUser(id, body)
      .subscribe(dados => {
        this.appService.showAlert('Aviso', dados[0].mensagem, 'Entendi');
        console.log(body)
        this.navCtrl.setRoot(HomePage)
      })
   
  }

}
