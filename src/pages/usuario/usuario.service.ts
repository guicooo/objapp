import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class UsuarioService {

    private _urlGetUSer: string = `https://private-2ca7d-objetivoapp.apiary-mock.com/usuario`;
    private _urlReset: string = `https://private-2ca7d-objetivoapp.apiary-mock.com/usuario/recuperarAcesso`;
    private _urlUpdate: string = `https://private-2ca7d-objetivoapp.apiary-mock.com/usuario/`;

    constructor(private _http: Http) { }

    header = new Headers ({
        'chavePublica': '32D69BD2-9E51-4199-AD01-7C6758DC0C8C',
        'tokenAcesso': 'oOwHGpphDtMWUIu4dOB1xT0wuCi0U1'
      })
    
      // RequestOptions
      requestOptions = new RequestOptions ({
        headers: this.header
      })

    getUsers() {
        return this._http.get(this._urlGetUSer)
            .map(dados => dados.json())
    }

    updateUser(id: any, body: any) {
        return this._http.put(`${this._urlUpdate}${id}`, body, this.requestOptions)
            .map( dados => dados.json())
    }

    resetPassWord(body: any){
        return this._http.put(this._urlReset, body)
            .map(data => data.json())
    }
}