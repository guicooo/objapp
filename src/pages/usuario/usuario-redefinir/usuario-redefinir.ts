import { Component, ViewChild, ElementRef, Renderer2, OnInit, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidaSenhaService } from './valida-senha.service';
import { UsuarioService } from '../usuario.service';
import { SharedService } from '../../../shared/shared.service';


/**
 * Generated class for the UsuarioRedefinirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-usuario-redefinir',
  templateUrl: 'usuario-redefinir.html',
  providers: [ ValidaSenhaService ]
})
export class UsuarioRedefinirPage implements OnInit {
  @Output() voltar = true;
  formRedefinir: FormGroup;

  @ViewChild('senhaAtual') senhaAtual: ElementRef;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuarioService: UsuarioService,
    private _sharedService: SharedService,
    private _renderer2: Renderer2,
    private _formBuilder: FormBuilder,
    private _validPassWord: ValidaSenhaService
  ) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioRedefinirPage');
  }

  ngOnInit() {

    this.formRedefinir = this._formBuilder.group({
      senhaAtual: [null, ],
      novaSenha: [null, Validators.required],
      confirmaSenha: [null, Validators.required]
    }, {
      validator: this._validPassWord.auth
    })
  }

  redefinir() {

    let senhaAtual = this.formRedefinir.value.senhaAtual;
    let novaSenha = this.formRedefinir.value.novaSenha;
    let confirmaSenha = this.formRedefinir.value.confirmaSenha;

    if(senhaAtual && novaSenha && confirmaSenha != null && 
       senhaAtual && novaSenha && confirmaSenha != '' ) {
          // Delete the item 'novaSenha' before sending the body.
          delete this.formRedefinir.value.senhaAtual;
          let body = this._sharedService.tratarObjeto(this.formRedefinir.value);
          
          this._usuarioService.resetPassWord(body)
            .subscribe(data => {
              console.log('res: ' ,body);
          }, error => console.log(error))
    } else { return false; }
      
  }

  onFocus(){
    let inputSenhaAtual = document.querySelector('.senhaAtual');
    let senhaAtual = this.formRedefinir.value.senhaAtual;

      senhaAtual == null || senhaAtual == '' ?
        this._renderer2.addClass(inputSenhaAtual, 'inputInvalid') :
          false;    
  }

  onKeyUp() {
    let inputSenhaAtual = document.querySelector('.senhaAtual');
    let senhaAtual = this.formRedefinir.value.senhaAtual;

    senhaAtual != null || senhaAtual != '' ?
      this._renderer2.removeClass(inputSenhaAtual, 'inputInvalid') :
        false;
    }

}

  

  
