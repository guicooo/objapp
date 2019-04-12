import { Http, Headers } from '@angular/http';
import * as $ from 'jquery';
import { Injectable } from '@angular/core';
import { AppService } from '../app/app.service';


@Injectable()
export class Service {
    // public url = 'https://www.objetivo.br/prova/api/';
    public url = 'http://200.174.103.116/objetivoprova/api/';
    public requestOptions = this._appService.requestOptions;

    constructor(private _appService: AppService) { }

    requestOptionsUpdated() {
        return { headers:  new Headers ({
            'Content-Type': 'application/x-www-form-urlencoded',
            'appKey': 'YPpj++OV7AckYkJ7lLL1OJPO+rCJPXv1GggdgV8aFsPxDXNLN3OIF2k8GQfUAboY',
            'userKey': localStorage.getItem('token') ? localStorage.getItem('token') : '',
            'Cache-Control': 'no-cache'
        })};
    }
   
    tratarObjeto(obj) {
        var newObj = '';
        let array = Object.getOwnPropertyNames(obj);
        $.each(array, (index, value) => { newObj += value + '=' + obj[value] + "&"})
        return newObj;
    }
   
}