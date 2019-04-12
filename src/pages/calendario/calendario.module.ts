import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioPage } from './calendario';
import { CalendarioService } from './calendario.service';

@NgModule({
  declarations: [
    CalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioPage),
  ]
})
export class CalendarioPageModule {}
