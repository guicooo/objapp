import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../app/app.service';

@Injectable()
export class NotificacoesService {

  requestOptions: any;

  constructor(
    private _http: Http,
    private _appService: AppService
  ) { }

  getNotifications() {
    return this._http.get(`https://private-2ca7d-objetivoapp.apiary-mock.com/notificacoes`)
    .map(data => data.json())
  }
  

}
