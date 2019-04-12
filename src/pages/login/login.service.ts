import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

    // Váriaveis para manipulação do NavBar e Footer.
    // mostrarNav = new EventEmitter<boolean>();
    // operaFooter = new EventEmitter<boolean>();

    userAuth: boolean = false;
    private _urlLogin: string =  `http://200.174.103.116/objetivoprova/Api/MinhaConta/Autenticacao/Matricula`;

    // Header definido no AppService
    header = new Headers ({
        'Content-Type': 'application/x-www-form-urlencoded',
        'appKey': 'YPpj++OV7AckYkJ7lLL1OJPO+rCJPXv1GggdgV8aFsPxDXNLN3OIF2k8GQfUAboY'
    });

    // RequestOptions
    requestOptions = new RequestOptions ({
        headers: this.header 
    })

    constructor(private _http: Http) { }


    authUser(body: any){
        return this._http.post(this._urlLogin, body, this.requestOptions )
            .map(dados => dados.json())
    }

    checkUser() {
        return this.userAuth;
    }

}
