import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { convertUrlToSegments } from 'ionic-angular/umd/navigation/url-serializer';
import { AppService } from '../../app/app.service';
import { CalendarioService } from './calendario.service';
// import { TweenMax, Power0} from 'gsap';

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage implements OnInit {
    monthsInPt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    monthIndex = 0;
    yearIndex = 0;
    dateFullString = '';
    listEventsSelectedDay = [];    
    selectedIsToday: boolean = false;
    calendarLoaded: boolean = false;
    
    currentDay: string = '';

    

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public calendarioService: CalendarioService,
      public appService: AppService
    ) {
  }

  ionViewDidLoad() { 
  }

  ngOnInit() {
    this.calendarLoaded = true;

    setTimeout(() => {
        $('.calendar-header-col.col').eq(0).text('Dom'); 
        $('.calendar-header-col.col').eq(1).text('Seg'); 
        $('.calendar-header-col.col').eq(2).text('Ter'); 
        $('.calendar-header-col.col').eq(3).text('Qua'); 
        $('.calendar-header-col.col').eq(4).text('Qui'); 
        $('.calendar-header-col.col').eq(5).text('Sex'); 
        $('.calendar-header-col.col').eq(6).text('Sáb'); 

        this.updateMonth();    
    }, 0);

    let dateObj = new Date();
    this.dateFullString = `${('0' + (dateObj.getUTCDate())).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
    this.monthIndex = dateObj.getUTCMonth();
    this.yearIndex = dateObj.getUTCFullYear();
    this.updateCurrentDay(dateObj.getUTCDate(), dateObj.getUTCMonth(), dateObj.getUTCFullYear());
    this.checkForEvents(dateObj.getUTCDate(), dateObj.getUTCMonth(), dateObj.getUTCFullYear());
    this.selectedIsToday = true;
  }

  onDaySelect(e) {
      this.updateCurrentDay(e.date, e.month, e.year);
      this.checkForEvents(e.date, e.month, e.year); 
         
      this.currentDay == this.dateFullString ? this.selectedIsToday = true : this.selectedIsToday = false;
      
  }

  onMonthSelect(e) {
    let calendarYear = e.year,
        calendarMonthIndex = e.month;
    $('ion-calendar .col > div').text(`${calendarYear} - ${this.monthsInPt[calendarMonthIndex]}`);
    this.monthIndex = e.month;
    this.yearIndex = e.year;
  }

  updateMonth() {
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('January', 'Janeiro'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('February', 'Fevereiro'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('March', 'Março'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('April', 'Abril'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('May', 'Maio'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('June', 'Junho'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('July', 'Julho'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('August', 'Agosto'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('September', 'Setembro'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('October', 'Outubro'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('November', 'Novembro'));
    $('ion-calendar .col > div').text($('ion-calendar .col > div').text().replace('December', 'Dezembro'));
  }

  updateCurrentDay(day, month, year) {
    this.currentDay = `${('0' + (day)).slice(-2)}/${('0' + (month + 1)).slice(-2)}/${year}`;
  }

  checkForEvents(day, month, year) {
    this.listEventsSelectedDay = this.calendarioService.currentEvents.filter( (el) => {
        return el.date == day &&
               el.month == month &&
               el.year == year;
      });
  }

  ngOnDestroy(): void {
    this.appService.currentPage = 'other';
  }

}
