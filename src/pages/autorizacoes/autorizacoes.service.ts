import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AutorizacoesService {

  constructor(private _http: Http) { }

  getAuthorizations() {
    return this._http.get(`https://private-2ca7d-objetivoapp.apiary-mock.com/autorizacoes`)
      .map( data => data.json())
  }
}
