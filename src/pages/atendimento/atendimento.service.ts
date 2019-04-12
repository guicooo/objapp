import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AtendimentoService {

  _urlSecretary: string =  'https://private-2ca7d-objetivoapp.apiary-mock.com/secretaria'; // POST Secretary
  _urlSac: string = 'https://private-2ca7d-objetivoapp.apiary-mock.com/sac'; // POST Sac
  _urlSupport: string = 'https://private-2ca7d-objetivoapp.apiary-mock.com/suporte'; // POST Support
  _urlPolos: string = 'https://private-2ca7d-objetivoapp.apiary-mock.com/polos'; // GET Polos  

  constructor(private _http: Http) { }

  contactSecretary(body: any) {
    return this._http.post(this._urlSecretary, body)
      .map(data => data.json())
  }

  contacSac(body: any) {
    return this._http.post(this._urlSac, body)
      .map(data => data.json())
  }

  contacSupport(body: any) {
    return this._http.post(this._urlSupport, body)
      .map(data => data.json())
  }

  getPolos() {
    return this._http.get(this._urlPolos)
      .map(data => data.json())
  }
  
}
