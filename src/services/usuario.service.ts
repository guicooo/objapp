import { Injectable } from "@angular/core";
import { Service } from "../models/service.model";

import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AppService } from "../app/app.service";

@Injectable()
export class UsuarioService extends Service {

    constructor(private _http: Http, private appService: AppService, private _router: Router) {
        super(appService);      
    }

    obterInformacoes() : Observable<any> {
        return this._http.get(`${this.url}MinhaConta`, this.requestOptionsUpdated())
    }

}