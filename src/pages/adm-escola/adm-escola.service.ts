import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AdmInspetorService {

  studentTemp: any;

  urlStudents: any = `https://private-2ca7d-objetivoapp.apiary-mock.com/alunos`;
  urlPeriod: any = `https://private-2ca7d-objetivoapp.apiary-mock.com/turmas`;

  constructor(private _http: Http) { }

  getPeriod() {
    return this._http.get(this.urlPeriod)
      .map(data => data.json())
  }

  getStudents() {
    return this._http.get(this.urlStudents)
      .map(data => data.json())
  }

}
