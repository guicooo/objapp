import { Component, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarioService } from '../calendario.service';

/**
 * Generated class for the CalendarioEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'calendario-eventos',
  templateUrl: 'calendario-eventos.html',
})
export class CalendarioEventosPage {
  @Input() monthIndex;
  @Input() yearIndex;
  monthsInPt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  currentMonth = '';
  listEventsSelectedMonth = [];

  // listEvents = [
  //   {diaEvento: '03', mesEvento: 'Janeiro', mesEvento: 'Janeiro', color: 'blue', titulo: 'Reunião dos País', subtitulo: 'às 14h00min'},
  //   {diaEvento: '08', mesEvento: 'Janeiro', mesEvento: 'Janeiro', color: 'orange', titulo: 'Feriado nome dele', subtitulo: 'Nesse dia não haverá aula'},
  //   {diaEvento: '20', mesEvento: 'Janeiro', mesEvento: 'Janeiro', color: 'red', titulo: 'Prova de matemática', subtitulo: 'às 14h00min'},
  //   {diaEvento: '23', mesEvento: 'Janeiro', mesEvento: 'Janeiro', color: 'green', titulo: 'Início férias escolares', subtitulo: ''},
  // ];

  constructor(
    public navCtrl: NavController, 
    public calendarioService: CalendarioService,
    public navParams: NavParams
  ) {
    // console.log(this.listEvents)
  }

  ionViewDidLoad() {
    

  }

  ngOnInit(): void {
    let dateObj = new Date();
    this.currentMonth = this.monthsInPt[this.monthIndex].toLowerCase();
    
    this.checkForEvents(dateObj.getUTCDate(), this.monthIndex, dateObj.getUTCFullYear());
  }

  checkForEvents(day, month, year) {
    this.listEventsSelectedMonth = this.calendarioService.currentEvents.filter( (el) => {
        return el.month == this.monthIndex &&
               el.year == this.yearIndex;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    const month: SimpleChange = changes.monthIndex;
    let dateObj = new Date();
    
    this.checkForEvents(dateObj.getUTCDate(), month.currentValue, this.yearIndex);
  }

}
