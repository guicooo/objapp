import { Component, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { LoginService } from './login.service';
import { AlertController } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { Device } from '@ionic-native/device';
import { Md5 } from 'ts-md5/dist/md5';
import { HomePage } from '../home/home';
import * as $ from 'jquery';
import { AppService } from '../../app/app.service';
import * as crypto from 'crypto-js';
import { SharedService } from '../../shared/shared.service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ LoginService ]
})
export class LoginPage {

  formLogin: FormGroup;
  mensagemErro: string;
  md5 = new Md5();
  public navOptions = {
    animate: true,
    animation: 'ios-transition'
  };

  loader: any;
  touchIdAvailable: boolean = false;
	fingerAuthAvailable: boolean = false;
	usedTouchId: boolean = false;
	usedFingerAuth: boolean = false;
	hasTouchId: boolean = false;
	hasFingerAuth: boolean = false;
	technologyAvailable: string = 'Touch ID';

  constructor(
    public navCtrl: NavController, public navParams: NavParams,  
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private alertCtrl: AlertController,
    private _appService: AppService,
    private _renderer2: Renderer2,
    public device: Device,
    public platform: Platform,
    public touchId: TouchID,
		public androidFingerprintAuth: AndroidFingerprintAuth,
    public loadingController: LoadingController,
    private _sharedService: SharedService
   ) {
    // this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'ios-animation' });
    $('navdown').hide();

    this.platform.ready().then(() => {
			// iOS
			this.touchId.isAvailable()
				.then(res => {
          // iPhone X
          
					if(this.device.model.indexOf('iPhoneX') > -1) {
						this.technologyAvailable = 'Face ID';
					}
					this.touchIdAvailable = true;
					this.hasTouchId = true;					
				},
				err => console.error('TouchID is not available', err)
			);

			// Android
			this.androidFingerprintAuth.isAvailable()
				.then((result)=> {
					if(result.isAvailable) {
						// it is available
						this.fingerAuthAvailable = true;
						this.hasFingerAuth = true;

					} else {
					// fingerprint auth isn't available
					}
				})
				.catch(error => console.error(error));


			// this.platform.registerBackButtonAction(() => this.backButtonClick, 2)
		});

    this.formLogin = this._formBuilder.group({
      login: ['01010014215', [Validators.required, Validators.minLength(2)]],
      //login: ['', [Validators.required, Validators.minLength(2)]],      
      senha: ['2511', [Validators.required, Validators.minLength(2)]],
      //senha: ['', [Validators.required, Validators.minLength(2)]],
      origem: ''
    })
  }
  
 

  ionViewDidLoad() { }
 

  ngOnInit() {

    
    // this.formLogin = this._formBuilder.group({
    //     login: [null, Validators.required],
    //     senha: [null, Validators.required],
    //     origem: 'Lyceum'
    // })
    
    // this.formLogin.controls['login'].setValue('01010009343');
    // this.formLogin.controls['senha'].setValue('01010009343');

    // let loader = document.querySelector('.load-bar');
      // this._renderer2.setStyle(document.querySelector('.loader'), 'display', 'none');

      // this.formLogin = this._formBuilder.group({
      //     login: [null],
      //     senha: [null],
      //     origem: 'Lyceum'
      // })
    
    
  }

  doLogin(){

    //this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'ios-animation' });
    
    this.loader = this.loadingController.create({
      content: "Autenticando, por favor aguarde..."
    });  
    this.loader.present();

    let loader = document.querySelector('.loader');
    // this._renderer2.setStyle(loader, 'display', 'block');

    let login = this.formLogin.value.login;
    let senha =this.formLogin.value.senha;
    let lyceum = this.formLogin.value.origem;
    let body = `login=${login}&senha=${senha}&origem=${lyceum}&`
    
    //$('navdown').fadeIn(1000);

    this._loginService.authUser(body)
      .subscribe( dados => {
        // $('navdown').show(150);
        this.loader.dismiss();
        // this._sharedService.showToaster('Logado com sucesso!', 1200);
        this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'ios-animation' });

        localStorage.getItem('materias') ? localStorage.removeItem('materias') : false;
        // console.log(dados)
        // this._renderer2.setStyle(loader, 'display', 'none');
        let encryptedToken = crypto.AES.encrypt(dados.token, this._appService.publicKey);
        // Criptografia do token de sessão.
        // 'utk' = User Token Key
        localStorage.setItem('utk', encryptedToken);
        this._appService.decryptToken(encryptedToken);
        
        this._appService.token = dados.token;
        sessionStorage.setItem('token', dados.token);

        this._loginService.userAuth = true;
      },
      (data) => {
        this.loader.dismiss();
      
        let alert = this.alertCtrl.create({
              title: 'Atenção',
              subTitle: JSON.parse(data._body).notificacoes[0].mensagem,
              buttons: ['Ok']
            });
    
            alert.present();
      })

    //   error => {

    //     this._loginService.userAuth = false;
    //     console.log(this._loginService.userAuth)

    //     if(error.status === 400){
    //       // this._loginService.mostrarNav.emit(true);
    //       let listaErros = JSON.parse(error._body).notificacoes;
    //       listaErros.forEach((value, index) => {
    
    //         this.mensagemErro = listaErros[index].mensagem
    //       })
    //     } else{
    //       console.log(error)
    //     }
        
    //   });

    // if(!this.formLogin.valid)
    //   return;

    // let login = this.formLogin.value.login;
    // let senha = this.formLogin.value.senha;
    // let lyceum = this.formLogin.value.origem;
   
    // // let body = `login=${login}&senha=${Md5.hashStr(senha)}&origem=${lyceum}&`;
    // var navOptions = {
    //   animation: 'ios-transition'
    // };
    // $('navdown').fadeIn(1000);
    
    // this.navCtrl.push(HomePage, null, navOptions);

    // this._loginService.authUser(body)
    //   .then(() => {
    //     var navOptions = {
    //       animation: 'ios-transition'
    //     };
        
    //     this.navCtrl.push(HomePage, null, navOptions);
    //   })
    //   .catch(() => {
       
    //     let alert = this.alertCtrl.create({
    //       title: 'Atenção',
    //       subTitle: 'Usuário ou Senha inválidos.',
    //       buttons: ['Ok']
    //     });

    //     alert.present();

    //   });
  }

  logarFake() {
    // if (this.formLogin.valid) {
      this.loader = this.loadingController.create({
				spinner: 'crescent',
				content: "Autenticando, por favor aguarde..."
      });  
      this.loader.present();

      setTimeout(() => {
        this.loader.dismiss();
        this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'ios-animation' });
      }, 1000);			
      
    // } else {
      // $('input.is-invalid').eq(0).focus();
    // }
    
  }

  authViaTouchId() {
    this.touchId.verifyFingerprint('Toque no sensor para acessar a sua conta.')
			.then(
				res => {
					this.logarFake();
				},
				err => console.error('Error', err)
			);
		
	}

	authViaFingerAuth() {
    this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
			.then(result => {
				if (result) {
					this.logarFake();
				}
			})
			.catch(error => {
			if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
				console.log('Fingerprint authentication cancelled');
			} else console.error(error)
		});
		
	}

}
