import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AtividadesService {

  constructor(private _http: Http) { }


  getActivities() {
    return this._http.get(`https://private-2ca7d-objetivoapp.apiary-mock.com/atividades`)
      .map(dados => dados.json())
  }

}
