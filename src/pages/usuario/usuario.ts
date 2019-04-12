import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { UsuarioService } from './usuario.service';
import { UsuarioEditarPage } from './usuario-editar/usuario-editar';
import { UsuarioRedefinirPage } from './usuario-redefinir/usuario-redefinir';
import { LoginPage } from '../login/login';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
  providers: [ Camera ]
})
export class UsuarioPage {
  galeria = 1;
  
  options: CameraOptions = {
    quality: 100,
    targetWidth: 600,
    targetHeight: 900,
    destinationType: this._camera.DestinationType.DATA_URL,
    encodingType: this._camera.EncodingType.JPEG,
    mediaType: this._camera.MediaType.PICTURE,
    saveToPhotoAlbum: false,
    allowEdit: true,
    sourceType: this.galeria,
    correctOrientation: true
  }
  obj: any;
  nome: string;
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _usuarioService: UsuarioService,
    public actionSheetCtrl: ActionSheetController,
    private _camera: Camera,
    public appService: AppService
  ) {
  }

  

    ionViewDidLoad() {
    this._usuarioService.getUsers()
      .subscribe(data => { 
        // let infoUser = document.querySelector('.body-user');
        // this.preLoader = false;
        this.obj = data;
        let nome = this.obj.nome;
        this.nome = nome.substring(0, nome.indexOf(" ")) +
                    nome.substring(nome.lastIndexOf(" "));
       })
  }

  // Methods push
  // goOptionsUser(e) {
  //   console.log(e.currentTarget.className)
  //   e.currentTarget.className.indexOf('editar') != -1 ? this.navCtrl.push(UsuarioEditarPage) : false;
  //   e.currentTarget.className.indexOf('redefinir') != -1 ? this.navCtrl.push(UsuarioRedefinirPage) : false;
  // }

  goLogout() {
    this.navCtrl.push(LoginPage, null, { animate: false })
  }

  goEditar() {
    this.navCtrl.push(UsuarioEditarPage, null, { animate: false })
  }  

  goRedefinir() {
    this.navCtrl.push(UsuarioRedefinirPage, null, { animate: false })
  }    

  actionSheet() {
   
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha a nova foto',
      buttons: [
        {
          text: 'Abrir Câmera',
          handler: () => {
            this.options.sourceType = 1;
            this._camera.getPicture(this.options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              this.appService.base64Image = 'data:image/jpeg;base64,' + imageData;
              
             }, (err) => {
              // Handle error
             });
          }
        },{
          text: 'Minhas fotos',
          handler: () => {
            this.options.sourceType = 0;
            this._camera.getPicture(this.options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              this.appService.base64Image = 'data:image/jpeg;base64,' + imageData;
            
             }, (err) => {
              // Handle error
             });
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
