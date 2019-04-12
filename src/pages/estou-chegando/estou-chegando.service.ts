import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EstouChegandoService {

  nome = new EventEmitter<string>();
  temp: string;

  constructor(private _http: Http) { }

  getUser() {
    return this._http.get(`https://private-2ca7d-objetivoapp.apiary-mock.com/usuario`)
      .map(data => data.json())
  }

}
