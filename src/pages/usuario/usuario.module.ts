import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UsuarioPage } from './usuario';
import { UsuarioService } from './usuario.service';
import { UsuarioEditarPage } from './usuario-editar/usuario-editar';
import { UsuarioRedefinirPage } from './usuario-redefinir/usuario-redefinir';
import { ValidaSenhaService } from './usuario-redefinir/valida-senha.service';
import { AppModule } from '../../app/app.module';



@NgModule({
  declarations: [
    UsuarioPage,
    UsuarioEditarPage,
    UsuarioRedefinirPage
    
  ],
  entryComponents: [
    UsuarioPage,
    UsuarioEditarPage,
    UsuarioRedefinirPage
  ],
  imports: [    
    AppModule,
    IonicPageModule.forChild(UsuarioPage),
  ],
  providers: [ UsuarioService, ValidaSenhaService ]
})
export class UsuarioPageModule {}
