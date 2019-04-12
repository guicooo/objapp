import { Injectable } from "@angular/core";
import { Service } from "../models/service.model";

import { Http } from "@angular/http";
import { AppService } from "../app/app.service";

@Injectable()
export class AulaService extends Service {

    constructor(private _http: Http, private appService: AppService) {
        super(appService);      
    }

    listarAula(id: string) {
        return this._http.get(this.url + 'Aula/?questao=' + id, this.requestOptions) 
    }

    obterAula(idConteudo: string) {
        return this._http.get(this.url + 'Aula/' + idConteudo, this.requestOptions) 
    }

}