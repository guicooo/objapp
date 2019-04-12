import { NgModule } from '@angular/core';
// import {RoundProgressModule, RoundProgressConfig, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';

import { CircleProgressComponent } from './circle-progress/circle-progress';
import { NavdownComponent } from './navdown/navdown';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { CollapseColorComponent } from './collapse-color/collapse-color';
import { ListColorsComponent } from './list-colors/list-colors';
import { DetalhesComponent } from './detalhes/detalhes';
import { ConteudoComponent } from './conteudo/conteudo';
import { ExerciciosComponent } from './exercicios/exercicios';
import { JogosComponent } from './jogos/jogos';
import { TextApoioComponent } from './text-apoio/text-apoio';
import { TextoApoioComponent } from './texto-apoio/texto-apoio';
import { VideosComponent } from './videos/videos';
import { TitlePageProvasComponent } from './title-page-provas/title-page-provas';
import { AlternativeBarComponent } from './alternative-bar/alternative-bar';
import { AlternativaComponent } from './alternativa/alternativa';
import { AlternativaProvaComponent } from './alternativa-prova/alternativa-prova';
import { CabecalhoComponent } from './cabecalho/cabecalho';
import { DissertativaComponent } from './dissertativa/dissertativa';
import { EnunciadoComponent } from './enunciado/enunciado';
import { ResolucaoComponent } from './resolucao/resolucao';
import { DissertativaProvaComponent } from './dissertativa-prova/dissertativa-prova';
import { SugestoesComponent } from './sugestoes/sugestoes';
import { MenuProvaComponent } from './menu-prova/menu-prova';


@NgModule({
	declarations: [
        CircleProgressComponent,
        NavdownComponent,
        HeaderComponent,
        CollapseColorComponent,
        ListColorsComponent,
        DetalhesComponent,
        ConteudoComponent,
        ExerciciosComponent,
        JogosComponent,
        TextApoioComponent,
        TextoApoioComponent,
        VideosComponent,
        TitlePageProvasComponent,
        AlternativeBarComponent,    
        AlternativaComponent,
        AlternativaProvaComponent,
        CabecalhoComponent,
        DissertativaComponent,
        EnunciadoComponent,
        ResolucaoComponent,
        DissertativaProvaComponent,
    SugestoesComponent,
    MenuProvaComponent,
    ],
    imports: [
        IonicModule
    ],
	exports: [
        CircleProgressComponent,
        NavdownComponent,
        HeaderComponent,
        CollapseColorComponent,
        ListColorsComponent,
        DetalhesComponent,
        ConteudoComponent,
        ExerciciosComponent,
        JogosComponent,
        TextApoioComponent,
        TextoApoioComponent,
        VideosComponent,
        TitlePageProvasComponent,
        AlternativeBarComponent,    
        AlternativaComponent,
        AlternativaProvaComponent,
        CabecalhoComponent,
        DissertativaComponent,
        EnunciadoComponent,
        ResolucaoComponent,
        DissertativaProvaComponent,
    SugestoesComponent,
    MenuProvaComponent,
    ]
})
export class ComponentsModule {}
