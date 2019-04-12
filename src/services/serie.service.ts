import { Service } from "../models/service.model";

import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { ISerie } from "../interfaces/ISerie";
import { AppService } from "../app/app.service";

@Injectable()
export class SerieService extends Service {
    
    constructor(private _http: Http, private appService: AppService) {
        super(appService);
    }

    obterSerie() : Promise<ISerie> {
        return this._http.get(this.url + 'Serie', this.requestOptions)
                    .toPromise()
                    .then((data: any) => {
                        this.appService.serie = data;  
                        return  data;                               
                    });      
    }
}