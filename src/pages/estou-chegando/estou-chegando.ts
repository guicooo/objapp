import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { UsuarioService } from '../usuario/usuario.service';
import { EstouChegandoService } from './estou-chegando.service';
import { ListagemAlunosPage } from '../adm-escola/listagem-alunos/listagem-alunos';
import { AppService } from '../../app/app.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the EstouChegandoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-estou-chegando',
  templateUrl: 'estou-chegando.html',
  providers: [ EstouChegandoService] 
})
export class EstouChegandoPage {

  nome: string;
  obj: any;
  loaderContent: boolean = true;
  latitude: number;
  longitude: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appService: AppService,
    public launchNavigator: LaunchNavigator,
    public geolocation: Geolocation,
    private _usuarioService: UsuarioService,
    public alertCtrl: AlertController

    ) {
  }

  ionViewDidLoad() { }

  ngOnInit() {

    this._usuarioService.getUsers()
      .subscribe(data => {
        // console.log(data)
        // this.preLoader = false;
        this.loaderContent = false;
        this.obj = data;
        let nome = this.obj.nome;
        this.nome = nome.substring(0, nome.indexOf(" ")) +
                    nome.substring(nome.lastIndexOf(" "));
      })
      
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Atenção!',
      message: 'Deseja enviar um aviso notificando sua chegada ao inspetor?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Enviar',
          handler: () => {
            console.log('Agree clicked');
            this.appService.showToaster('Aviso enviado com sucesso!', 3000);
          }
        }
      ]
    });
    confirm.present();
  }


  goEscola(){
    this.navCtrl.push(ListagemAlunosPage, {}, {animate: false});
  }

  


}
