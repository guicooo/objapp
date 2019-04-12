import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class SharedService {

  constructor(public toastCtrl: ToastController) { }
  
  tratarObjeto(obj) {
    let newObj = '';
    let array = Object.getOwnPropertyNames(obj);
    array.forEach((value, index ) => {
        newObj += value + '=' + obj[value] + "&";
    });
    return newObj; 
  } 

  showToaster(msg, duration) {
    let toast = this.toastCtrl.create({
        message: msg,
        duration: duration
    });
    toast.present();
}
 
}
