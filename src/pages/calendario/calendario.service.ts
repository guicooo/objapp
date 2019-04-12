import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CalendarioService {
  currentEvents = [
    {
        year: 2019,
        month: 1,
        date: 27,
        title: 'Reunião dos pais',
        color: 'blue',
        description: 'às 14h00min'
    },
    {
        year: 2019,
        month: 2,
        date: 10,
        title: 'Feriado nome',
        color: 'green',
        description: 'às 17h00min'
    },
    {
        year: 2019,
        month: 3,
        date: 14,
        title: 'Prova de matemática',
        color: 'orange',
        description: 'às 14h00min'
    },
    {
        year: 2019,
        month: 5,
        date: 7,
        title: 'Reunião dos pais',
        color: 'orange',
        description: 'às 14h00min'
    },
    {
        year: 2019,
        month: 11,
        date: 25,
        title: 'Entrega de trabalho de português',
        color: 'blue',
        description: 'com capa'
    },
    {
        year: 2019,
        month: 11,
        date: 26,
        title: 'Início das férias escolares',
        color: 'red',
        description: 'Confirmar dispensa dos professores'
    }
  ];
  constructor(private _http: Http) { }

  // getTickets () {
  //   return this._http.get(`https://private-2ca7d-objetivoapp.apiary-mock.com/boletos`)
  //     .map(data => data.json())
  // }

}
