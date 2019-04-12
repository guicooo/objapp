import { Injectable, EventEmitter  } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AppService } from '../../app/app.service';
import { NotasPage } from './notas';

@Injectable()
export class NotasService {
  public onChangeDisciplinas: EventEmitter<NotasPage> = new EventEmitter();
  // Variáveis
  media;
  filtroProva: any[] = [];
  listaProvas: any[] = [];
  id;
  notas = [];

  constructor(private _http: Http, private _appService: AppService) { }
  
   // header definido no AppService
   header = this._appService.header;
   requestOptions = this._appService.requestOptions;

  getDadosGrade() {
    this.header.delete('Content-type');
    this.header.append('userKey', this._appService.token);
    // console.log(this.requestOptions)
    return this._http.get(`http://200.174.103.116/objetivoprova/Api/Grade`, this.requestOptions)
      .map(dados =>{
       // alert(dados.json())
        return dados.json();
      } )
  }

  filtroDisciplinas(id:any) {
    return this._http.get(`http://200.174.103.116/objetivoprova/api/Prova?grade=${id}`, this.requestOptions)
      .map(dados => dados.json())
  }

  getResumoDisciplinas() {
    this.requestOptions.headers.set('userKey', this._appService.token);
    return this._http.get(`http://200.174.103.116/objetivoprova/Api/Grade`, this.requestOptions)
      .map(dados => dados.json())
  }

  emitDisciplinas(dados) {
    this.notas = dados;
    this.onChangeDisciplinas.emit(dados);
  }


  calculaMedia(dados) {
    let notaMaxima: number = 0;
    let notaFinal: number = 0;
    let media: any;
    let listaNotas: any = [];
    let listaNotasMaxima: any = [];
    
    dados.forEach((value, index) => {

      // Calcula todas as notas máximas e joga na variável 'notaMaxima'.
      listaNotasMaxima[index] = value.notaMaxima;
      notaMaxima += listaNotasMaxima[index];

      // Calcula todas as notas finais e joga na variável 'notaFinal'.
      listaNotas[index] = value.notaFinal;
      notaFinal += listaNotas[index];

    });
    
    media = (notaFinal / notaMaxima) * 100;

    // alert(media)

    return media;
  }

  calculaMediaGeral(dados) {
    console.log(dados);

    let arrProvas: any = [];
    let somaNF: number = 0;
    let somaNM: number = 0;
    let mediaGeral: any;

    dados.forEach((value, index ) => arrProvas[index] = dados[index].provas) ;

    arrProvas.forEach((value, index )  => {
      value.forEach((value, index) => {
        somaNF += value.notaFinal;
        somaNM += value.notaMaxima;
      });
    });

    mediaGeral = ( somaNF / somaNM ) * 100;

    return mediaGeral;
  }

}
