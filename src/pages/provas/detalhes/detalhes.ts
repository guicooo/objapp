import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../../app/app.service';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'app-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  constructor(public appService: AppService, public navCtrl: NavController, public navParams: NavParams) { 
    console.log(appService)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
