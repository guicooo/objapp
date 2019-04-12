import { Service } from "../models/service.model";
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { AppService } from "../app/app.service";


@Injectable()
export class LoginService extends Service {
    
    constructor(private _http: Http, private appService: AppService)  {
        super(appService);
    }

    autenticar(body) : Promise<any> {
       
        return this._http.post(this.url + 'MinhaConta/Autenticacao/Matricula', this.tratarObjeto(body), this.requestOptions)
                        .toPromise()
                        .then(data => data)
                        
    }
}