import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtendimentoService } from '../atendimento.service';
import { SharedService } from '../../../shared/shared.service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SuporteAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-suporte-app',
  templateUrl: 'suporte-app.html',
})
export class SuporteAppPage {

  @Output() voltar = true;

  formSupport: FormGroup;
  usuario: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _atendimentoService: AtendimentoService,
    private _sharedService: SharedService,
    private _formBuilder: FormBuilder,
    private alertCtrl: AlertController
  ) {
    this.usuario = JSON.parse(localStorage.getItem('dados'));
  }

  ngOnInit() {
    this.formSupport = this._formBuilder.group({
      nome: [null],
      email: [null, Validators.email],
      telefone: [null],
      mensagem: [null]
    })
  }

  sendMessage() {
    let body = this._sharedService.tratarObjeto(this.formSupport.value);

    this._atendimentoService.contactSecretary(body)
      .subscribe(data => {
        console.log(body)
        let alert = this.alertCtrl.create({
          title: 'Mensagem',
          subTitle: data.mensagem,
          buttons: ['Ok']
        });
        alert.present();
        console.log(data.mensagem)
      })

  }

}
