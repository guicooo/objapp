import { Injectable } from "@angular/core";
import { Service } from "../models/service.model";

import { Http } from "@angular/http";
import { AppService } from "../app/app.service";

@Injectable()
export class QuestoesService extends Service {

    constructor(private _http: Http, private appService: AppService) {
        super(appService);      
    }

    listarQuestoesAlternativas(id: string) {
        return this._http.get(this.url + 'Questao/Alternativa/?prova=' + id, this.requestOptions).toPromise().then(data => data.json())                 
    }

    listarQuestoesDiscursivas(id: string) {
        return this._http.get(this.url + 'Questao/Discursiva/?prova=' + id, this.requestOptions).toPromise().then(data => data.json())                 
    }

    obterQuestaoDiscursiva(id: string) {
        return this._http.get(this.url + 'Questao/Discursiva/' + id, this.requestOptions).toPromise().then(data => data.json())    
    }

    obterQuestaoAlternativa(id: string) {
        return this._http.get(this.url + 'Questao/Alternativa/' + id, this.requestOptions).toPromise().then(data => data.json())        
    }

}