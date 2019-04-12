import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AtividadesPage } from './atividades';
import { CollapseColorComponent } from '../../components/collapse-color/collapse-color';

@NgModule({
  declarations: [
    AtividadesPage,
  ],
  imports: [
    IonicPageModule.forChild(AtividadesPage),
  ],
  entryComponents:[]
})
export class AtividadesPageModule {}
