import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NotasPage } from './notas';
import { NotasService } from './notas.service';
import { NotasListaProvasPage } from './notas-lista-provas/notas-lista-provas';
import { NotasDetalhesPage } from './notas-detalhes/notas-detalhes';
import { CircleProgressComponent } from '../../components/circle-progress/circle-progress';

@NgModule({
  declarations: [
    NotasPage,
    NotasListaProvasPage,
    NotasDetalhesPage,
    // CircleProgressComponent
  ],
  imports: [
    IonicPageModule.forChild(NotasPage),
  ],
  entryComponents: [
    // NotasPage,
    NotasListaProvasPage,
    NotasDetalhesPage
  ],
  providers: [ NotasService ]
})
export class NotasPageModule {}
