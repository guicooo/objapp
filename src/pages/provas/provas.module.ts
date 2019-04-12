import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvasPage } from './provas';
import { AppModule } from '../../app/app.module';
import { DetalhesPageModule } from './detalhes/detalhes.module';
import { ExerciciosPageModule } from './exercicios/exercicios.module';
import { AlternativaProvaPageModule } from './questao/alternativa-prova/alternativa-prova.module';
import { DissertativaProvaPageModule } from './questao/dissertativa-prova/dissertativa-prova.module';
import { AppService } from '../../app/app.service';
import { MenuProvaComponent } from '../../components/menu-prova/menu-prova';


@NgModule({
  declarations: [
    ProvasPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvasPage),
    DetalhesPageModule,
    ExerciciosPageModule,
    AlternativaProvaPageModule,
    DissertativaProvaPageModule,
    AppModule    ,
    MenuProvaComponent,
  ],
  exports: [
    
  ],
  providers: [
    AppService
  ]
})
export class ProvasPageModule {}
