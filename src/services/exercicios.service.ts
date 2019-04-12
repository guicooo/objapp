import { Injectable } from "@angular/core";
import { Service } from "../models/service.model";

import { Http } from "@angular/http";
import { AppService } from "../app/app.service";

@Injectable()
export class ExerciciosService extends Service {

    constructor(private _http: Http, private appService: AppService) {
        super(appService);      
    }
      
    listarExercicios(id: string) {
        return this._http.get(this.url + 'Exercicio/?questao=' + id + '&vinculado=true', this.requestOptions) 
    }
   
    obterExercicio(idExercicio: string) {
        return this._http.get(this.url + 'Exercicio/' + idExercicio, this.requestOptions) 
    }
}