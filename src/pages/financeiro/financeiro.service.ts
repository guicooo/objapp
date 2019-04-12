import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FinanceiroService {

  constructor(private _http: Http) { }

  getTickets () {
    return this._http.get(`https://private-2ca7d-objetivoapp.apiary-mock.com/boletos`)
      .map(data => data.json())
  }

}
