
import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SecretariaPage } from './secretaria/secretaria';
import { FaleConoscoPage } from './fale-conosco/fale-conosco';
import { SuporteAppPage } from './suporte-app/suporte-app';
import { Nav } from 'ionic-angular';
import { AtendimentoService } from './atendimento.service';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { AppService } from '../../app/app.service';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-atendimento',
  templateUrl: 'atendimento.html',
  providers: [ AtendimentoService ]
})

export class AtendimentoPage {
  atendimento: Array<{title: string, component: any, icone: string}>;
  campus;
  latitude: number;
  longitude: number;
  //@ViewChild(Nav) nav: Nav;
  @Input() nav;
  constructor(
    private _atendimentoService: AtendimentoService, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appService: AppService,
    public launchNavigator: LaunchNavigator,
    public geolocation: Geolocation,
    private callNumber : CallNumber,
    private alertCtrl: AlertController
  ) {

    this.atendimento = [
      // { title: 'Secretaria', component: SecretariaPage, icone: 'ico-atendimento' },
      // { title: 'Fale conosco', component: FaleConoscoPage, icone: 'ico-talk' },
      { title: 'Suporte ao app', component: SuporteAppPage, icone: 'ico-mobile' },
    ];


  }

  ionViewDidLoad() {
    this._atendimentoService.getPolos()
            .subscribe((data) => {
                console.log(data)
                this.campus = data[0];
            })
  }
  
  openPageAtendimento(atendimento) {
    this.navCtrl.push(atendimento.component, null, { animate: false });    
  }
  
  callNumberObjetivo(number) {
    this.callNumber.callNumber(`08007700189`, true);

    // this.callNumber.isCallSupported().then((data) => {
    
    // })   
    //this.callNumber.isCallSupported()
    // .then((response) => {
     //   alert(response)
        // if (response == true) {
        //   this.callNumber.callNumber(`08007700189`, true);
        // }
        // else {
        //   let alert = this.alertCtrl.create({
        //     title: 'Atenção',
        //     subTitle: 'Ligações não disponíveis para esse aparelho',
        //     buttons: ['Ok']
        //   });
        //   alert.present();
         
        // }
    //});   

  }  

  goToEscola() {
     
    let endereco = `Av. Duquesa de Goiás, 262 - Real Parque, São Paulo - SP`;
    
    this.geolocation.getCurrentPosition().then(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
  
      let options: LaunchNavigatorOptions = {
        start: [this.latitude, this.longitude]
      };
      
      this.launchNavigator.navigate(endereco, options)
        .then(
        success => console.log('Launched navigator', success),
        error => {
          console.log('Error launching navigator', error);
          this.appService.showToaster('Erro ao iniciar GPS.', 3000);
          
        });
    });
    
      
      
      
  }

}
