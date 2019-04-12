import { Component } from '@angular/core';
import { AppService } from '../../app/app.service';


@Component({
  selector: 'detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesComponent {
  constructor(public appService: AppService) {
   
   // console.log('Hello DetalhesComponent Component');  
  }
}
