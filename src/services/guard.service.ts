import { CanActivate, Router } from "@angular/router";

import { Injectable } from "@angular/core";
import { AppService } from "../app/app.service";

@Injectable()
export class GuardService implements CanActivate {
   
    constructor(private _appService: AppService, private _router: Router) { }

    canActivate() {     

      if(!this._appService.token)
          this._router.navigate(['login']);

      return this._appService.token ? true : false;
      
    }
  }