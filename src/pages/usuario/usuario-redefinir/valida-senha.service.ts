import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class ValidaSenhaService {

  constructor() { }

  auth(AC: AbstractControl) {

    let currentPassWord = AC.get('senhaAtual').value; // Pega valor do input com o formControlName senhaAtual
    let newPassWord = AC.get('novaSenha').value; // Pega valor do input com o formControlName novaSenha
    let confirmPassWord = AC.get('confirmaSenha').value; // Pega valor do input com o formControlName confirmaSenha

      if(newPassWord != confirmPassWord) {
          AC.get('confirmaSenha').setErrors( { autenticar: true } )
      } else {
          return null;
      } // fim if
  } // fim método
} // fim classe
