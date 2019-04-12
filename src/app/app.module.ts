import { CallNumber } from '@ionic-native/call-number';
import { AtendimentoPage } from './../pages/atendimento/atendimento';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '../../node_modules/@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { UsuarioPageModule } from '../pages/usuario/usuario.module';
import { UsuarioService } from '../pages/usuario/usuario.service';
import { SharedService } from '../shared/shared.service';
import { CircleProgressComponent } from '../components/circle-progress/circle-progress';
import { AppService } from './app.service';
import { NavdownComponent } from '../components/navdown/navdown';
// import { UsuarioPage } from '../pages/usuario/usuario';
import { CalendarioPage } from '../pages/calendario/calendario';
import { EstouChegandoPage } from '../pages/estou-chegando/estou-chegando';
import { NotasPage } from '../pages/notas/notas';
import { HeaderComponent } from '../components/header/header';
import { NotasService } from '../pages/notas/notas.service';
import { NotasPageModule } from '../pages/notas/notas.module';
import { NotasListaProvasPage } from '../pages/notas/notas-lista-provas/notas-lista-provas';
import { NotasDetalhesPage } from '../pages/notas/notas-detalhes/notas-detalhes';
import { AtividadesPageModule } from '../pages/atividades/atividades.module';
import { CollapseColorComponent } from '../components/collapse-color/collapse-color';
import { AtividadesPage } from '../pages/atividades/atividades';
import { AtividadesService } from '../pages/atividades/atividades.service';
import { ComponentsModule } from '../components/components.module';
import { UsuarioPage } from '../pages/usuario/usuario';
import { UsuarioEditarPage } from '../pages/usuario/usuario-editar/usuario-editar';
import { UsuarioRedefinirPage } from '../pages/usuario/usuario-redefinir/usuario-redefinir';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import { FinanceiroService } from '../pages/financeiro/financeiro.service';
import { FinanceiroDetalhesPage } from '../pages/financeiro/financeiro-detalhes/financeiro-detalhes';
import { AutorizacoesService } from '../pages/autorizacoes/autorizacoes.service';
import { AutorizacoesPage } from '../pages/autorizacoes/autorizacoes';
import { ListColorsComponent } from '../components/list-colors/list-colors';
import { AutorizacoesEventoPage } from '../pages/autorizacoes/autorizacoes-evento/autorizacoes-evento';
import { NotificacoesService } from '../pages/notificacoes/notificacoes.service';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { ValidaSenhaService } from '../pages/usuario/usuario-redefinir/valida-senha.service';
import { ListagemAlunosPage } from '../pages/adm-escola/listagem-alunos/listagem-alunos';
import { AdmInspetorService } from '../pages/adm-escola/adm-escola.service';
import { SortPipe } from '../pages/adm-escola/listagem-alunos/sort.pipe';
import { ContatoPage } from '../pages/adm-escola/contato/contato';
import { CalendarioEventosPage } from '../pages/calendario/calendario-eventos/calendario-eventos';
import { FaleConoscoPage } from '../pages/atendimento/fale-conosco/fale-conosco';
import { SecretariaPage } from '../pages/atendimento/secretaria/secretaria';
import { SuporteAppPage } from '../pages/atendimento/suporte-app/suporte-app';
import { AtendimentoService } from '../pages/atendimento/atendimento.service';
import { TouchID } from '@ionic-native/touch-id';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { Device } from '@ionic-native/device';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';
import { ContentLoaderComponent } from '../components/content-loader/content-loader';
import { CalendarModule } from 'ionic3-calendar-en';
import { CalendarioService } from '../pages/calendario/calendario.service';
import { ConteudoOnlinePage } from '../pages/conteudo-online/conteudo-online';
import { ProvasPage } from '../pages/provas/provas';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,    
    CalendarioPage,
    EstouChegandoPage,
    NotasPage,
    NotasListaProvasPage,
    NotasDetalhesPage,
    AtividadesPage,
    UsuarioPage,
    UsuarioEditarPage,
    UsuarioRedefinirPage,
    FinanceiroPage,
    FinanceiroDetalhesPage,
    AutorizacoesPage,
    AutorizacoesEventoPage,
    NotificacoesPage,
    ListagemAlunosPage,
    ContatoPage,
    SortPipe,
    CalendarioEventosPage,
    AtendimentoPage,
    FaleConoscoPage,
    SecretariaPage,
    SuporteAppPage,
    ConteudoOnlinePage,
    ContentLoaderComponent,
    ProvasPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule, 
    CalendarModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CalendarioPage,
    EstouChegandoPage,  
    NotasPage,
    NotasListaProvasPage,
    NotasDetalhesPage,
    AtividadesPage,
    // CollapseColorComponent,
    HeaderComponent,
    UsuarioPage,
    UsuarioEditarPage,
    UsuarioRedefinirPage,
    FinanceiroPage,
    FinanceiroDetalhesPage,
    AutorizacoesPage,
    AutorizacoesEventoPage,
    NotificacoesPage,
    ListagemAlunosPage,
    ContatoPage,
    CalendarioEventosPage,
    AtendimentoPage,
    FaleConoscoPage,
    SecretariaPage,
    SuporteAppPage,
    ConteudoOnlinePage,
    ContentLoaderComponent,
    ProvasPage
  ],
  providers: [
    AtendimentoService,
    AdmInspetorService,
    NotificacoesService,
    AutorizacoesService,
    FinanceiroService,
    AtividadesService,
    NotasService,
    SharedService,
    UsuarioService,
    ValidaSenhaService,
    StatusBar,
    TouchID,
    AndroidFingerprintAuth,
    Device,
    LaunchNavigator,
    CalendarioService,
    Geolocation,
    SplashScreen,
    AppService,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
