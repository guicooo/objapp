webpackJsonp([18],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notificacoes_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__autorizacoes_autorizacoes_evento_autorizacoes_evento__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NotificacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var NotificacoesPage = /** @class */ (function () {
    function NotificacoesPage(navCtrl, navParams, _notificacoesService, _appService, _renderer2) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._notificacoesService = _notificacoesService;
        this._appService = _appService;
        this._renderer2 = _renderer2;
        this.notifications = [];
        this.loaderContent = true;
        this.elementNotification = this._appService.contNotification;
    }
    NotificacoesPage.prototype.share = function (slidingItem) {
        slidingItem.close();
    };
    NotificacoesPage.prototype.ionViewDidLoad = function () { };
    NotificacoesPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('noti ', this._appService.contNotification);
        this._notificacoesService.getNotifications()
            .subscribe(function (data) {
            // this.preLoader = false;
            _this.loaderContent = false;
            data.forEach(function (value, index) {
                _this.notifications = data;
            });
            console.log('notificacoes ', _this.notifications);
            setTimeout(function () {
                var animateTime = 0;
                __WEBPACK_IMPORTED_MODULE_2_jquery__('li').each(function (i, obj) {
                    animateTime += 0.1;
                    __WEBPACK_IMPORTED_MODULE_3_gsap__["c" /* TweenMax */].fromTo(__WEBPACK_IMPORTED_MODULE_2_jquery__(obj), 0.3, {
                        alpha: 0
                    }, {
                        alpha: 1,
                        delay: animateTime,
                        ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["a" /* Power0 */].easeInOut
                    });
                });
                _this.contTemp = __WEBPACK_IMPORTED_MODULE_2_jquery__('.list-notification .active').length;
                _this.cont = __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-item-sliding').length;
            }, 0);
        });
    }; // end OnInit
    NotificacoesPage.prototype.removeItem = function (item) {
        var _this = this;
        this.cont = this.cont - 1;
        for (var i = 0; i < this.notifications.length; i++) {
            if (this.notifications[i] == item) {
                this.notifications.splice(i, 1);
            }
        }
        if (this.cont <= 0) {
            // let rootElement = document.querySelector(`.reference${id}`);
            var outMessage_1 = document.querySelector('.message');
            this._renderer2.setStyle(document.querySelector('.box-top-app'), 'padding-top', '0');
            this._renderer2.setStyle(document.querySelector('.box-top-app'), 'margin-bottom', '30%');
            this._renderer2.removeClass(document.querySelector('.ico-notification-alert'), 'active');
            setInterval(function () {
                _this._renderer2.removeClass(outMessage_1, 'out-message');
                _this._renderer2.addClass(outMessage_1, 'in-message');
            }, 300);
        } // end if 
    }; // end method
    NotificacoesPage.prototype.seen = function (event, id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__autorizacoes_autorizacoes_evento_autorizacoes_evento__["a" /* AutorizacoesEventoPage */], { id: id });
        if (event.currentTarget.className == 'active') {
            this.contTemp -= 1;
            this._renderer2.removeClass(event.currentTarget, 'active');
        }
        this.contTemp == 0 ? this._renderer2.removeClass(document.querySelector('.ico-notification-alert'), 'active') : false;
    }; // end method seen
    NotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificacoes',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/notificacoes/notificacoes.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n  <div class="box-top-app">\n\n    <!-- <ul class="list-notification" >\n      <li\n      *ngFor="let obj of notifications; let i = index"\n      [id]="i" [class]="\'reference\'+i"\n      (click)="fadeOut($event, i)"\n      >\n        <div class="active" (click)="seen($event)">\n          <div class="row">\n              <i class="ico-notification"></i>\n              <h4 class="max-lines-1" style="width: 80%;">{{ obj?.notificacao.titulo }}</h4>\n              <i class="ico-eraser"></i>\n          </div>\n          <div class="row">\n              <p class="max-lines-2">{{ obj?.notificacao.descricao }}</p>\n          </div>\n        </div>\n      </li>\n\n    </ul>\n\n    \n    <div class="text-center message out-message">\n      <p>Nenhuma notificação disponível</p>\n    </div> -->\n\n\n\n\n\n<ion-list class="list-notification">\n    <content-loader *ngIf="loaderContent"></content-loader>\n\n    <ion-item-sliding *ngFor="let obj of notifications; let i = index"[id]="i" [class]="\'reference\'+i">\n      <ion-item>\n          <div class="active" (click)="seen($event, obj.notificacao.id)">\n              <div class="row">\n                  <i class="ico-notification"></i>\n                  <h4 class="max-lines-1" style="width: 80%;">{{ obj?.notificacao.titulo }}</h4>\n                  <div class="caretNot"><div class="caret-1"></div><div class="caret-2"></div></div>\n              </div>\n              <div class="row">\n                  <p class="max-lines-2">{{ obj?.notificacao.descricao }}</p>\n              </div>\n            </div>\n      </ion-item>\n      <ion-item-options side="right">\n        \n        <!-- <button ion-button color="secondary" (click)="share(item)">\n            <ion-icon name="menu"></ion-icon>\n          Mais\n        </button> -->\n\n        <button ion-button color="danger" (click)="removeItem(obj)">\n            <ion-icon name="trash"></ion-icon>\n            Remover\n        </button>\n\n\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</div>\n\n  <div class="text-center message out-message">\n    <p>Nenhuma notificação disponível</p>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/notificacoes/notificacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__notificacoes_service__["a" /* NotificacoesService */],
            __WEBPACK_IMPORTED_MODULE_6__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], NotificacoesPage);
    return NotificacoesPage;
}());

//# sourceMappingURL=notificacoes.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorizacoesEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AutorizacoesEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AutorizacoesEventoPage = /** @class */ (function () {
    function AutorizacoesEventoPage(navCtrl, navParams, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.voltar = true;
        this.arrAuthorizations = JSON.parse(localStorage.getItem('autorizacoes'));
        this.id = this.navParams.get('id');
    }
    AutorizacoesEventoPage.prototype.ionViewDidLoad = function () { };
    AutorizacoesEventoPage.prototype.ngOnInit = function () {
        console.log('component evento ', this.id);
    };
    AutorizacoesEventoPage.prototype.autorizarAluno = function () {
        this.appService.showToaster('Aluno autorizado!', 3000);
    };
    AutorizacoesEventoPage.prototype.naoAutorizarAluno = function () {
        this.appService.showToaster('Aluno não autorizado!', 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AutorizacoesEventoPage.prototype, "voltar", void 0);
    AutorizacoesEventoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-autorizacoes-evento',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/autorizacoes/autorizacoes-evento/autorizacoes-evento.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce >\n<div class="box-top-app">\n      \n    <div *ngFor="let obj of arrAuthorizations" [id]="id">\n        <div *ngIf="obj.id == id">\n\n            <div class="row bg-eventos"\n                [ngClass]="{\n                    \'passeio\': obj?.notificacao.tipo == \'passeio\',\n                    \'reuniao\': obj?.notificacao.tipo == \'reuniao\',\n                    \'palestra\': obj?.notificacao.tipo == \'palestra\'\n                }">\n                <div class="mask"></div>\n                <h3>{{ obj?.notificacao.titulo }}</h3>\n            </div>\n\n            <section class="eventos col-12">\n                <h5>{{ obj?.notificacao.diaEvento }} de {{ obj?.notificacao.mesEvento }}</h5>\n                <p><b>Saída: </b>{{ obj?.duracao.inicio }}</p>\n                <p><b>Retorno: </b>{{ obj?.duracao.fim }}</p>\n\n                <hr>\n                \n                <p>{{ obj?.notificacao.descricao }}</p>\n            </section>\n            <div class="col-12" style="margin-left: auto; margin-top: 20px;">\n                <button class="bot-red-line bot" style="width: 47%; margin-right: 10px;" (click)="naoAutorizarAluno()">Não autorizo</button>\n\n                <button  class="bot-green bot" style="width: 47%" (click)="autorizarAluno()">Autorizo</button>\n            </div>\n    \n        </div> <!-- end *ngIf -->\n    </div> <!-- end *ngFor -->\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/autorizacoes/autorizacoes-evento/autorizacoes-evento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */]])
    ], AutorizacoesEventoPage);
    return AutorizacoesEventoPage;
}());

//# sourceMappingURL=autorizacoes-evento.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstouChegandoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_usuario_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estou_chegando_service__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adm_escola_listagem_alunos_listagem_alunos__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the EstouChegandoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var EstouChegandoPage = /** @class */ (function () {
    function EstouChegandoPage(navCtrl, navParams, appService, launchNavigator, geolocation, _usuarioService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this._usuarioService = _usuarioService;
        this.alertCtrl = alertCtrl;
        this.loaderContent = true;
    }
    EstouChegandoPage.prototype.ionViewDidLoad = function () { };
    EstouChegandoPage.prototype.ngOnInit = function () {
        var _this = this;
        this._usuarioService.getUsers()
            .subscribe(function (data) {
            // console.log(data)
            // this.preLoader = false;
            _this.loaderContent = false;
            _this.obj = data;
            var nome = _this.obj.nome;
            _this.nome = nome.substring(0, nome.indexOf(" ")) +
                nome.substring(nome.lastIndexOf(" "));
        });
    };
    EstouChegandoPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Atenção!',
            message: 'Deseja enviar um aviso notificando sua chegada ao inspetor?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.appService.showToaster('Aviso enviado com sucesso!', 3000);
                    }
                }
            ]
        });
        confirm.present();
    };
    EstouChegandoPage.prototype.goEscola = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__adm_escola_listagem_alunos_listagem_alunos__["a" /* ListagemAlunosPage */], {}, { animate: false });
    };
    EstouChegandoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estou-chegando',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/estou-chegando/estou-chegando.html"*/'<header-obj [navCtrl]="navCtrl"></header-obj>\n<ion-content padding no-bounce >\n  <div class="row align-items-center justify-content-md-center box-top-app">\n    <div class="col">\n\n      <div class="chegando">\n\n        <article class="container-loader" *ngIf="loaderContent">\n          <div class="background">\n            <div class="right">\n              <div class="bar"></div>\n              <div class="mask thick"></div>\n              <div class="bar"></div>\n              <div class="mask thin"></div>\n              <div class="bar medium"></div>\n              <div class="mask thick"></div>\n              <div class="bar small"></div>\n              <div class="bar"></div>              \n            </div>\n          </div>\n        </article>\n          <div class="name margin-40">\n            <h2>{{ nome }}</h2>\n            <p>{{ obj?.descricao }}</p>\n            <p>{{ obj?.unidade.colegio }}</p>\n          </div>\n\n          <h3 class="text-center  margin-40">Aguardando retirada</h3>\n\n        <!-- </div> -->\n\n        <div class="text-center  margin-40">\n          <button  class="text-uppercase bot-green  bot" style="width: 80%;" (click)="showConfirm()"> estou chegando</button>\n\n          <button  class="text-uppercase bot-red bot" style="width: 80%;" (click)="goEscola()"> vou me atrasar</button>\n\n          \n\n        </div>\n    \n      </div> <!-- End class chegando -->\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/estou-chegando/estou-chegando.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__estou_chegando_service__["a" /* EstouChegandoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EstouChegandoPage);
    return EstouChegandoPage;
}());

//# sourceMappingURL=estou-chegando.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConteudoOnlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ConteudoOnlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConteudoOnlinePage = /** @class */ (function () {
    function ConteudoOnlinePage(appService, sanitizer, navCtrl, http, modalCtrl, navParams) {
        this.appService = appService;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.loaderContent = false;
        this.loaderContent = true;
        this.currentPage = "http://conteudoonline.objetivo.br/";
        this.url = this.currentPage;
        this.getTrustedUrl(this.url);
    }
    ConteudoOnlinePage.prototype.doFilter = function () {
    };
    ConteudoOnlinePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframeSystem').on('load', function (e) {
            _this.loaderContent = false;
        });
    };
    // bloqueia o acesso à view
    // ionViewCanEnter() {
    // 	return this.authService.userIsLogged();
    // }
    ConteudoOnlinePage.prototype.getTrustedUrl = function (url) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ConteudoOnlinePage.prototype.resizeIframe = function (obj) {
        obj.style.height = 0;
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    };
    ConteudoOnlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conteudo-online',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/conteudo-online/conteudo-online.html"*/'<header-obj [navCtrl]="navCtrl"></header-obj>\n\n<ion-content data-tap-disabled="true" scroll="true" overflow-scroll="true" class="iframe-issue">\n		<article class="container" *ngIf="loaderContent">\n			<div class="background">\n				<div class="right">\n					<div class="bar"></div>\n					<div class="mask thick"></div>\n					<div class="bar"></div>\n					<div class="mask thin"></div>\n					<div class="bar medium"></div>\n					<div class="mask thick"></div>\n					<div class="bar small"></div>\n					<div class="bar"></div>\n					<div class="mask thick"></div>\n					<div class="bar"></div>\n					<div class="mask thin"></div>\n					<div class="bar medium"></div>\n					<div class="mask thick"></div>\n					<div class="bar small"></div>\n					<div class="bar"></div>\n					<div class="mask thick"></div>\n					<div class="bar"></div>\n					<div class="mask thin"></div>\n					<div class="bar medium"></div>\n					<div class="mask thick"></div>\n					<div class="bar small"></div>\n					<div class="bar"></div>\n					<div class="mask thin"></div>\n					<div class="bar medium"></div>\n					<div class="mask thick"></div>\n					<div class="bar small"></div>\n					<div class="bar"></div>\n					<div class="mask thin"></div>\n					<div class="bar medium"></div>\n					<div class="mask thick"></div>\n					<div class="bar small"></div>\n					<div class="bar"></div>\n					<div class="mask thin"></div>\n					<div class="bar medium"></div>\n					<div class="mask thick"></div>\n					<div class="bar small"></div>\n				</div>\n			</div>\n		</article>\n		<div class="system__wrapper">    \n				<iframe [src]="this.safeUrl" id="iframeSystem" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n		</div>\n</ion-content>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/conteudo-online/conteudo-online.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ConteudoOnlinePage);
    return ConteudoOnlinePage;
}());

//# sourceMappingURL=conteudo-online.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtendimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suporte_app_suporte_app__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atendimento_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AtendimentoPage = /** @class */ (function () {
    function AtendimentoPage(_atendimentoService, navCtrl, navParams, appService, launchNavigator, geolocation, callNumber, alertCtrl) {
        this._atendimentoService = _atendimentoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.atendimento = [
            // { title: 'Secretaria', component: SecretariaPage, icone: 'ico-atendimento' },
            // { title: 'Fale conosco', component: FaleConoscoPage, icone: 'ico-talk' },
            { title: 'Suporte ao app', component: __WEBPACK_IMPORTED_MODULE_2__suporte_app_suporte_app__["a" /* SuporteAppPage */], icone: 'ico-mobile' },
        ];
    }
    AtendimentoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._atendimentoService.getPolos()
            .subscribe(function (data) {
            console.log(data);
            _this.campus = data[0];
        });
    };
    AtendimentoPage.prototype.openPageAtendimento = function (atendimento) {
        this.navCtrl.push(atendimento.component, null, { animate: false });
    };
    AtendimentoPage.prototype.callNumberObjetivo = function (number) {
        this.callNumber.callNumber("08007700189", true);
        // this.callNumber.isCallSupported().then((data) => {
        // })   
        //this.callNumber.isCallSupported()
        // .then((response) => {
        //   alert(response)
        // if (response == true) {
        //   this.callNumber.callNumber(`08007700189`, true);
        // }
        // else {
        //   let alert = this.alertCtrl.create({
        //     title: 'Atenção',
        //     subTitle: 'Ligações não disponíveis para esse aparelho',
        //     buttons: ['Ok']
        //   });
        //   alert.present();
        // }
        //});   
    };
    AtendimentoPage.prototype.goToEscola = function () {
        var _this = this;
        var endereco = "Av. Duquesa de Goi\u00E1s, 262 - Real Parque, S\u00E3o Paulo - SP";
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            var options = {
                start: [_this.latitude, _this.longitude]
            };
            _this.launchNavigator.navigate(endereco, options)
                .then(function (success) { return console.log('Launched navigator', success); }, function (error) {
                console.log('Error launching navigator', error);
                _this.appService.showToaster('Erro ao iniciar GPS.', 3000);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AtendimentoPage.prototype, "nav", void 0);
    AtendimentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-atendimento',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atendimento/atendimento.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n  <div  class="box-top-app">\n    \n      <ul class="menu-atendimento">\n          <li class="atendimento-item" *ngFor="let p of atendimento" (click)="openPageAtendimento(p)">\n            <i class="{{p.icone}} ico-list"></i> \n            <span class="item-text">{{p.title}}</span>\n            <ion-icon name="arrow-forward" class="right-arrow"></ion-icon>\n          </li>\n           <li class="info-atendimento " >\n              <h3>{{ campus?.unidade.polo }}</h3>\n              <p class="max-lines-1">{{ campus?.endereco.logradouro }}</p>\n              <p class="max-lines-1">{{ campus?.endereco.descricao }}</p>\n              <p class="max-lines-1">{{ campus?.contato.telefone }}</p>\n              <div class="text-center">\n                  <button class="text-uppercase btn-goto-school bot" style="width: 70%;" (click)="goToEscola()"> ir à escola</button>\n                  <button (click)="callNumberObjetivo()" style="width: 70%;" class="btn-call bot"><i class="ico-phone"></i></button>\n                  <div class="line-ou">\n                          <hr>ou\n                          <hr>\n                  </div>\n                  <h2>{{ campus?.contato.opcional }}</h2>\n              </div>\n          </li> \n      </ul>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atendimento/atendimento.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__atendimento_service__["a" /* AtendimentoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__atendimento_service__["a" /* AtendimentoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AtendimentoPage);
    return AtendimentoPage;
}());

//# sourceMappingURL=atendimento.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasListaProvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas_detalhes_notas_detalhes__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notas_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NotasListaProvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var NotasListaProvasPage = /** @class */ (function () {
    function NotasListaProvasPage(navCtrl, navParams, _notasService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._notasService = _notasService;
        this.listaProvas = [];
        this.filtroProva = [];
        this.voltar = true;
        this.id = navParams.get('idMateria');
        this.disciplina = navParams.get('disciplina').nome;
    }
    NotasListaProvasPage.prototype.ngOnInit = function () {
        var _this = this;
        this._notasService.filtroDisciplinas(this.id)
            .subscribe(function (data) {
            _this.listaProvas = data;
        }, function () {
        });
        // this.listaProvas =  JSON.parse(window.localStorage.getItem('dadosNotas'))
        // JSON.parse(localStorage.getItem('materias')).forEach((value, index) => {
        //   value.id == this.id ? this.nomeMateria = value.disciplina.nome : false;
        // });
        // console.log(this.nomeMateria)
    };
    NotasListaProvasPage.prototype.ionViewDidLoad = function () { };
    NotasListaProvasPage.prototype.goDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notas_detalhes_notas_detalhes__["a" /* NotasDetalhesPage */], { prova: this.listaProvas.find(function (x) { return x.id == id; }), disciplina: this.disciplina }, { animate: true, animation: 'ios-animation' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NotasListaProvasPage.prototype, "voltar", void 0);
    NotasListaProvasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas-lista-provas',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/notas/notas-lista-provas/notas-lista-provas.html"*/'             \n<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n    <div class="box-top-app">\n        <div class="col text-center" >\n          <!-- <h2 style="margin-top: 10px;">Provas – {{ nomeMateria }}</h2> -->\n          <h2 style="margin-top: 10px;">Provas - {{ disciplina }}</h2>\n        </div>\n\n        <ul class="list-provas">\n      \n            <li class="row" *ngFor="let obj of listaProvas, let cont = index"\n            [ngStyle]="{\n              \'cursor\': \'pointer\'\n            }"\n            (click)="goDetails(obj.id)"\n            >\n            <div  class="col">\n                    \n                <h4 class="max-lines-1">{{ obj?.rotulo }}</h4>\n            \n                <p *ngIf="obj.notaFinal / obj.notaMaxima > 0.6" \n                  >Nota: <span class="colorNota" \n                  [attr.color]="\'green\'">{{ obj?.notaFinal }}</span>\n                </p>\n                \n                <p *ngIf="obj.notaFinal / obj.notaMaxima >= 0.4 && obj.notaFinal / obj.notaMaxima <= 0.6"\n                  >Nota: <span class="colorNota" \n                  [attr.color]="\'orange\'">{{ obj?.notaFinal }}</span>\n                </p>\n                \n                <p *ngIf="obj.notaFinal / obj.notaMaxima < 0.4"\n                >Nota: <span class="colorNota" \n                  [attr.color]="\'red\'">{{ obj?.notaFinal }}</span>\n                </p>\n                \n                <div class="caretIcon"><div class="caret-1"></div><div class="caret-2"></div></div>\n            </div>\n         \n            </li>\n        </ul>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/notas/notas-lista-provas/notas-lista-provas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__notas_service__["a" /* NotasService */]])
    ], NotasListaProvasPage);
    return NotasListaProvasPage;
}());

//# sourceMappingURL=notas-lista-provas.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provas_provas__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notas_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// @IonicPage()
var NotasDetalhesPage = /** @class */ (function () {
    function NotasDetalhesPage(navCtrl, navParams, _notasService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._notasService = _notasService;
        this.voltar = true;
        this.provaFiltrada = navParams.get('prova');
        this.id = this.provaFiltrada.id;
        this.disciplina = navParams.get('disciplina');
    }
    NotasDetalhesPage.prototype.ionViewDidLoad = function () { };
    NotasDetalhesPage.prototype.ngOnInit = function () {
    };
    NotasDetalhesPage.prototype.progress = function (percent) {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(".js-radial-mask").css('transform', 'rotate(' + (180 / 10) * percent + 'deg)');
            __WEBPACK_IMPORTED_MODULE_2_jquery__(".js-radial-fill").css('transform', 'rotate(' + (180 / 10) * percent + 'deg)');
            __WEBPACK_IMPORTED_MODULE_2_jquery__(".js-radial-fill_fix").css('transform', 'rotate(' + (360 / 10) * percent + 'deg)');
        }, 0);
    };
    NotasDetalhesPage.prototype.goProvas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__provas_provas__["a" /* ProvasPage */], { animate: false, id: this.id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NotasDetalhesPage.prototype, "voltar", void 0);
    NotasDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas-detalhes',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/notas/notas-detalhes/notas-detalhes.html"*/'             \n<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n    <div class="row align-items-center justify-content-md-center box-top-app">\n        <div class="col">\n            <div class="detalhes-provas">\n                <div class="text-center">\n                    <!-- <h2>{{ provaFiltrada?.rotulo }}</h2> -->\n                    <h2>{{ provaFiltrada?.rotulo }}</h2>                    \n                    <!-- <p>Nota</p> -->\n                    <!-- {{ provaFiltrada?.notaFinal }} -->\n\n                <div class="father-circle" style="margin-top: 3vh;" *ngIf="provaFiltrada?.notaFinal / provaFiltrada?.notaMaxima > 0.6">\n                    <div class="father-circle" style="margin-top: 3vh;">\n                        <span style="color: #99CC48" class="number-circle">{{ provaFiltrada?.notaFinal | number:\'1.2-2\' }}</span>\n                        <!-- <span style="color: #99CC48" class="number-circle">9.75</span> -->\n                        <round-progress\n                            [current]="provaFiltrada?.notaFinal | number:\'1.2-2\'"\n                            [max]="provaFiltrada?.notaMaxima"                        \n                            [color]="\'#99CC48\'"\n                            [background]="\'rgba(153, 204, 72, 0.2)\'"\n                            [radius]="125"\n                            [stroke]="15"\n                            [rounded]="true"\n                            [clockwise]="true"\n                            [responsive]="true"\n                            [duration]="2000"\n                            [animation]="\'easeOutQuart\'"\n                            [animationDelay]="300"\n                            >\n                        </round-progress>\n                    </div> \n                </div> \n                    \n                    <!-- <circle-progress *ngIf="provaFiltrada?.notaFinal / provaFiltrada?.notaMaxima > 0.6" \n                        [percent]="provaFiltrada?.notaFinal | number:\'1.2-2\' " \n                        [color]="\'green\'">\n                    </circle-progress> -->\n\n\n                <div class="father-circle" style="margin-top: 3vh;" *ngIf="provaFiltrada?.notaFinal / provaFiltrada?.notaMaxima >= 0.4 && provaFiltrada?.notaFinal / provaFiltrada?.notaMaxima <= 0.6">\n                    <span style="color: #FFCB00" class="number-circle">{{ provaFiltrada?.notaFinal | number:\'1.2-2\' }}</span>\n                    <round-progress\n                        [current]="provaFiltrada?.notaFinal | number:\'1.2-2\'"\n                        [max]="provaFiltrada?.notaMaxima"\n                        [color]="\'#FFCB00\'"\n                        [background]="\'rgba(255, 203, 0, 0.2)\'"\n                        [radius]="125"\n                        [stroke]="15"\n                        [rounded]="true"\n                        [clockwise]="true"\n                        [responsive]="true"\n                        [duration]="2000"\n                        [animation]="\'easeOutQuart\'"\n                        [animationDelay]="300"\n                        >\n                    </round-progress>\n                </div>                    \n                    \n                    \n                <!-- <circle-progress *ngIf="provaFiltrada?.notaFinal / provaFiltrada?.notaMaxima >= 0.4 && provaFiltrada?.notaFinal / provaFiltrada?.notaMaxima <= 0.6"\n                    [percent]="provaFiltrada?.notaFinal | number:\'1.2-2\' " \n                    [color]="\'orange\'">\n                </circle-progress> -->\n\n\n                <div class="father-circle" style="margin-top: 3vh;" *ngIf="provaFiltrada?.notaFinal / provaFiltrada?.notaMaxima < 0.4">\n                    <span style="color: #FF5252" class="number-circle">{{ provaFiltrada?.notaFinal | number:\'1.2-2\' }}</span>\n                    <round-progress\n                        [current]="provaFiltrada?.notaFinal | number:\'1.2-2\'"\n                        [max]="provaFiltrada?.notaMaxima"\n                        [color]="\'#FF5252\'"\n                        [background]="\'rgba(255, 82, 82, 0.2)\'"\n                        [radius]="125"\n                        [stroke]="15"\n                        [rounded]="true"\n                        [clockwise]="true"\n                        [responsive]="true"\n                        [duration]="2000"\n                        [animation]="\'easeOutQuart\'"\n                        [animationDelay]="300"\n                        >\n                    </round-progress>\n                </div>\n                \n                    <!-- <circle-progress *ngIf="provaFiltrada?.notaFinal / provaFiltrada?.notaMaxima < 0.4"\n                        [percent]="provaFiltrada?.notaFinal | number:\'1.2-2\' " \n                        [color]="\'red\'">\n                    </circle-progress> -->\n                \n                    <p> Nota máxima: <span>{{ provaFiltrada?.notaMaxima }}</span></p>\n                    <!-- <p> Nota máxima: <span>10</span></p> -->\n                </div>\n            </div>\n            <div class="notas-provas">\n                <div class="col-4 acertos pull-left">\n                    <span>{{ provaFiltrada?.acertos }}</span>\n                    <p>acertos</p>\n                </div>\n                <div class="col-4 erros pull-left">\n                    <span>{{ provaFiltrada?.erros }}</span>\n                    <p>erros</p>\n                </div>\n                <div class="col-4 parciais pull-left">\n                    <span>{{ provaFiltrada?.parciais }}</span>\n                    <p>parciais</p>\n                </div>\n            </div>\n            <div class="text-center">   \n                <button ion-button (click)="goProvas()" style="width: 70%;" class="text-uppercase bot-primary bot">detalhes</button>\n            </div>            \n        </div>\n    </div>  \n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/notas/notas-detalhes/notas-detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__notas_service__["a" /* NotasService */]])
    ], NotasDetalhesPage);
    return NotasDetalhesPage;
}());

//# sourceMappingURL=notas-detalhes.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_editar_usuario_editar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_redefinir_usuario_redefinir__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(navCtrl, navParams, _usuarioService, actionSheetCtrl, _camera, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this.actionSheetCtrl = actionSheetCtrl;
        this._camera = _camera;
        this.appService = appService;
        this.galeria = 1;
        this.options = {
            quality: 100,
            targetWidth: 600,
            targetHeight: 900,
            destinationType: this._camera.DestinationType.DATA_URL,
            encodingType: this._camera.EncodingType.JPEG,
            mediaType: this._camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            allowEdit: true,
            sourceType: this.galeria,
            correctOrientation: true
        };
    }
    UsuarioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._usuarioService.getUsers()
            .subscribe(function (data) {
            // let infoUser = document.querySelector('.body-user');
            // this.preLoader = false;
            _this.obj = data;
            var nome = _this.obj.nome;
            _this.nome = nome.substring(0, nome.indexOf(" ")) +
                nome.substring(nome.lastIndexOf(" "));
        });
    };
    // Methods push
    // goOptionsUser(e) {
    //   console.log(e.currentTarget.className)
    //   e.currentTarget.className.indexOf('editar') != -1 ? this.navCtrl.push(UsuarioEditarPage) : false;
    //   e.currentTarget.className.indexOf('redefinir') != -1 ? this.navCtrl.push(UsuarioRedefinirPage) : false;
    // }
    UsuarioPage.prototype.goLogout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], null, { animate: false });
    };
    UsuarioPage.prototype.goEditar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__usuario_editar_usuario_editar__["a" /* UsuarioEditarPage */], null, { animate: false });
    };
    UsuarioPage.prototype.goRedefinir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__usuario_redefinir_usuario_redefinir__["a" /* UsuarioRedefinirPage */], null, { animate: false });
    };
    UsuarioPage.prototype.actionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Escolha a nova foto',
            buttons: [
                {
                    text: 'Abrir Câmera',
                    handler: function () {
                        _this.options.sourceType = 1;
                        _this._camera.getPicture(_this.options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            _this.appService.base64Image = 'data:image/jpeg;base64,' + imageData;
                        }, function (err) {
                            // Handle error
                        });
                    }
                }, {
                    text: 'Minhas fotos',
                    handler: function () {
                        _this.options.sourceType = 0;
                        _this._camera.getPicture(_this.options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            _this.appService.base64Image = 'data:image/jpeg;base64,' + imageData;
                        }, function (err) {
                            // Handle error
                        });
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuario',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/usuario/usuario.html"*/'\n<header-obj [navCtrl]="navCtrl"></header-obj>\n\n<ion-content no-bounce>\n\n<div class="header-user">\n        <div class="circle">\n            <img src="{{appService.base64Image}}" alt="bg-user">\n            <!-- <input type="file"> -->\n        </div>\n        <span>Alterar foto do perfil</span>\n\n</div>\n<div class="row align-items-center justify-content-md-center">\n  <div class="col">\n    <div class="body-user">\n        <button style="position: absolute;background-color: transparent;top: 0%;height: 32%;left: 14%;" (click)="actionSheet()"></button>\n        <h2 class="max-lines-1">{{ nome }}</h2>\n        <p class="max-lines-1">{{ obj?.descricao }}</p>\n        <p class="max-lines-1">{{ obj?.unidade.colegio }}</p>\n        <p class="max-lines-1">{{ obj?.contato.email }}</p>\n        <p class="max-lines-1">{{ obj?.contato.telefone }}</p>\n\n\n        <div class="text-center">\n            <button (click)="goEditar()" class="bot-secound bot"> \n                <i class="ico-user-dark"></i>\n                EDITAR CONTA\n            \n            </button>\n            <button (click)="goRedefinir()" class="bot-red bot"> \n                <i class="ico-key-dark"></i>\n                TROCAR SENHA\n            </button>\n\n\n  \n        </div>\n    </div>\n\n</div>\n</div>\n\n<!-- <ul class="item-primary show-list" style="padding: 0px;list-style: none;position: absolute;bottom: 9%;width: 100%;">\n       <li  class="list-menu-item openMenu" *ngFor="let item of listMenuUser"> \n          <a class="row {{ item.link }}"  (click)="goOptionsUser($event)">\n              <i class="ico-{{ item.ico }}"></i>\n              <h4 class="{{ item.link }}">{{ item.title }}</h4>\n          </a>\n          <div class="caretIcon"><div class="caret-1"></div><div class="caret-2"></div></div>\n      </li >\n  \n    </ul> -->\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/usuario/usuario.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__app_app_service__["a" /* AppService */]])
    ], UsuarioPage);
    return UsuarioPage;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioEditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsuarioEditarPage = /** @class */ (function () {
    function UsuarioEditarPage(navCtrl, navParams, _usuarioService, _formBuilder, appService, _sharedService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this._formBuilder = _formBuilder;
        this.appService = appService;
        this._sharedService = _sharedService;
        this.voltar = true;
    }
    UsuarioEditarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad UsuarioEditarPage');
        this._usuarioService.getUsers()
            .subscribe(function (data) {
            // let infoUser = document.querySelector('.body-user');
            // this.preLoader = false;
            console.log(data);
            _this.usuario = data;
            var nome = _this.usuario.nome;
            _this.nome = nome.substring(0, nome.indexOf(" ")) +
                nome.substring(nome.lastIndexOf(" "));
        });
    };
    UsuarioEditarPage.prototype.ngOnInit = function () {
        this.formEditar = this._formBuilder.group({
            nome: [null],
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email],
            telefone: [null],
            serie: [null],
            colegio: [null]
        });
    };
    UsuarioEditarPage.prototype.update = function (id) {
        var _this = this;
        var body = this._sharedService.tratarObjeto(this.formEditar.value);
        console.log(body);
        this._usuarioService.updateUser(id, body)
            .subscribe(function (dados) {
            _this.appService.showAlert('Aviso', dados[0].mensagem, 'Entendi');
            console.log(body);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UsuarioEditarPage.prototype, "voltar", void 0);
    UsuarioEditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuario-editar',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/usuario/usuario-editar/usuario-editar.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n\n<ion-content no-bounce>\n    <div class="row align-items-center justify-content-md-center box-center-app" style="padding-right: 0px;">\n        <div class="col">\n\n            <div  *ngIf="usuario" class="input-primary obj-page">\n                    <form action=""\n                    [formGroup]="formEditar"\n                    (ngSubmit)="update( usuario.id )"\n                    >\n                        <div class="col-12 input-box margin-20">\n                            <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.nome" formControlName="nome" placeholder="Nome Sobrenome" disabled>\n                            <span class="focus-border"></span>\n                        </div>\n                        <div class="col-12 input-box margin-20">\n                            <input type="mail" class="form-control input-obj color input-login" [(ngModel)]="usuario.contato.email" formControlName="email" placeholder="email@objetivo.br">\n                            <span class="focus-border"></span>\n                        </div>\n                        <div class="col-12 input-box margin-20">\n                            <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.contato.telefone" formControlName="telefone" placeholder="(011) 1234 - 1234">\n                            <span class="focus-border"></span>\n                        </div>\n                        <div class="col-12 input-box margin-20">\n                            <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.descricao" formControlName="serie" placeholder="8 ano do Ensino Fundamental II" disabled>\n                            <span class="focus-border"></span>\n                        </div>\n                        <div class="col-12 input-box margin-20">\n                            <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.unidade.colegio" formControlName="colegio" placeholder="Colégio Objetivo – Morumbi" disabled>\n                            <span class="focus-border"></span>\n                        </div>\n                \n                        <div class="col-12 text-center">\n                            <button style="width:70%" class="bot text-uppercase bot-primary margin-40">Salvar</button>\n                        </div>\n                    </form>\n                    \n                </div>\n        </div>\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/usuario/usuario-editar/usuario-editar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */]])
    ], UsuarioEditarPage);
    return UsuarioEditarPage;
}());

//# sourceMappingURL=usuario-editar.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioRedefinirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__valida_senha_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UsuarioRedefinirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioRedefinirPage = /** @class */ (function () {
    function UsuarioRedefinirPage(navCtrl, navParams, _usuarioService, _sharedService, _renderer2, _formBuilder, _validPassWord) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this._sharedService = _sharedService;
        this._renderer2 = _renderer2;
        this._formBuilder = _formBuilder;
        this._validPassWord = _validPassWord;
        this.voltar = true;
    }
    UsuarioRedefinirPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioRedefinirPage');
    };
    UsuarioRedefinirPage.prototype.ngOnInit = function () {
        this.formRedefinir = this._formBuilder.group({
            senhaAtual: [null,],
            novaSenha: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            confirmaSenha: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        }, {
            validator: this._validPassWord.auth
        });
    };
    UsuarioRedefinirPage.prototype.redefinir = function () {
        var senhaAtual = this.formRedefinir.value.senhaAtual;
        var novaSenha = this.formRedefinir.value.novaSenha;
        var confirmaSenha = this.formRedefinir.value.confirmaSenha;
        if (senhaAtual && novaSenha && confirmaSenha != null &&
            senhaAtual && novaSenha && confirmaSenha != '') {
            // Delete the item 'novaSenha' before sending the body.
            delete this.formRedefinir.value.senhaAtual;
            var body_1 = this._sharedService.tratarObjeto(this.formRedefinir.value);
            this._usuarioService.resetPassWord(body_1)
                .subscribe(function (data) {
                console.log('res: ', body_1);
            }, function (error) { return console.log(error); });
        }
        else {
            return false;
        }
    };
    UsuarioRedefinirPage.prototype.onFocus = function () {
        var inputSenhaAtual = document.querySelector('.senhaAtual');
        var senhaAtual = this.formRedefinir.value.senhaAtual;
        senhaAtual == null || senhaAtual == '' ?
            this._renderer2.addClass(inputSenhaAtual, 'inputInvalid') :
            false;
    };
    UsuarioRedefinirPage.prototype.onKeyUp = function () {
        var inputSenhaAtual = document.querySelector('.senhaAtual');
        var senhaAtual = this.formRedefinir.value.senhaAtual;
        senhaAtual != null || senhaAtual != '' ?
            this._renderer2.removeClass(inputSenhaAtual, 'inputInvalid') :
            false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UsuarioRedefinirPage.prototype, "voltar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('senhaAtual'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UsuarioRedefinirPage.prototype, "senhaAtual", void 0);
    UsuarioRedefinirPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuario-redefinir',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/usuario/usuario-redefinir/usuario-redefinir.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n\n<ion-content padding>\n    <div class="row align-items-center justify-content-md-center box-center-app">\n            <div class="col">    \n                <div class="input-primary obj-page" style="margin-top: 20px;">\n                    <form\n                    [formGroup]="formRedefinir"\n                    (ngSubmit)="redefinir()"\n                    >\n                        <div class="col-12 input-box  margin-20">\n                            <input \n                            type="password"\n                            class="form-control input-obj color input-login senhaAtual"\n                            formControlName="senhaAtual"\n                            placeholder="Senha atual"\n                            [(ngModel)]="valueSenhaAtual"\n                            (keyup)="onKeyUp()"\n                            >\n                            <span class="focus-border"></span>\n                        </div>\n                        <div class="col-12 input-box">\n                            <input \n                            type="password"\n                            class="form-control input-obj color input-login"\n                            formControlName="novaSenha"\n                            placeholder="Nova senha"\n                            [(ngModel)]="valueNovaSenha"\n                            (focus)="onFocus()"\n                            >\n                            <span class="focus-border"></span>\n                        </div> \n                        <div class="col-12 input-box  margin-20">        \n                            <input \n                            type="password"\n                            class="form-control input-obj color input-login"\n                            \n                            formControlName="confirmaSenha"\n                            placeholder="Repetir nova senha"\n                            [(ngModel)]="valueConfirmaSenha"\n                            [class.inputInvalid]="valueNovaSenha != valueConfirmaSenha || valueConfirmaSenha != valueNovaSenha"\n                            (focus)="onFocus()"\n                            >\n                            <span class="focus-border"></span>\n                        </div>\n                        <!-- input-red -->\n\n                        <div class="col-12 text-center">\n                                <button style="width:70%" class="bot text-uppercase bot-primary margin-40">Salvar</button>\n                        </div>            \n                        \n                    </form>\n\n                    <!-- <span class="alert alert-danger" *ngIf="formRedefinir.controls.confirmaSenha.errors?.autenticar">Senha inválida</span> -->\n                    <!-- [class.inputInvalid]="formRedefinir.controls.confirmaSenha.errors?.autenticar" -->\n                </div>\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/usuario/usuario-redefinir/usuario-redefinir.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__valida_senha_service__["a" /* ValidaSenhaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__valida_senha_service__["a" /* ValidaSenhaService */]])
    ], UsuarioRedefinirPage);
    return UsuarioRedefinirPage;
}());

//# sourceMappingURL=usuario-redefinir.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidaSenhaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidaSenhaService = /** @class */ (function () {
    function ValidaSenhaService() {
    }
    ValidaSenhaService.prototype.auth = function (AC) {
        var currentPassWord = AC.get('senhaAtual').value; // Pega valor do input com o formControlName senhaAtual
        var newPassWord = AC.get('novaSenha').value; // Pega valor do input com o formControlName novaSenha
        var confirmPassWord = AC.get('confirmaSenha').value; // Pega valor do input com o formControlName confirmaSenha
        if (newPassWord != confirmPassWord) {
            AC.get('confirmaSenha').setErrors({ autenticar: true });
        }
        else {
            return null;
        } // fim if
    }; // fim método
    ValidaSenhaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidaSenhaService);
    return ValidaSenhaService;
}()); // fim classe

//# sourceMappingURL=valida-senha.service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adm-escola/adm-escola.module": [
		545,
		7
	],
	"../pages/atendimento/atendimento.module": [
		546,
		17
	],
	"../pages/atividades/atividades.module": [
		547,
		16
	],
	"../pages/login/login.module": [
		549,
		15
	],
	"../pages/notas/notas.module": [
		548,
		14
	],
	"../pages/provas/conteudo/conteudo.module": [
		550,
		13
	],
	"../pages/provas/detalhes/detalhes.module": [
		541,
		6
	],
	"../pages/provas/exercicios/exercicios.module": [
		542,
		12
	],
	"../pages/provas/exercicios/sugestoes/sugestoes.module": [
		551,
		5
	],
	"../pages/provas/jogos/jogos.module": [
		552,
		11
	],
	"../pages/provas/provas.module": [
		556,
		0
	],
	"../pages/provas/questao/alternativa-prova/alternativa-prova.module": [
		543,
		4
	],
	"../pages/provas/questao/dissertativa-prova/dissertativa-prova.module": [
		544,
		3
	],
	"../pages/provas/questao/dissertativa/dissertativa.module": [
		553,
		2
	],
	"../pages/provas/resolucao/resolucao.module": [
		554,
		1
	],
	"../pages/provas/texto-apoio/texto-apoio.module": [
		555,
		10
	],
	"../pages/provas/videos/videos.module": [
		557,
		9
	],
	"../pages/usuario/usuario.module": [
		558,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtividadesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AtividadesService = /** @class */ (function () {
    function AtividadesService(_http) {
        this._http = _http;
    }
    AtividadesService.prototype.getActivities = function () {
        return this._http.get("https://private-2ca7d-objetivoapp.apiary-mock.com/atividades")
            .map(function (dados) { return dados.json(); });
    };
    AtividadesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AtividadesService);
    return AtividadesService;
}());

//# sourceMappingURL=atividades.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_service_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProvaService = /** @class */ (function (_super) {
    __extends(ProvaService, _super);
    function ProvaService(_http, appService) {
        var _this = _super.call(this, appService) || this;
        _this._http = _http;
        _this.appService = appService;
        _this.questoes = [];
        return _this;
    }
    ProvaService.prototype.listarProva = function () {
        return this._http.get(this.url + 'Prova', this.requestOptions)
            .toPromise()
            .then(function (data) { return data.json(); });
    };
    ProvaService.prototype.obterProvasPorGrade = function (id) {
        return this._http.get(this.url + 'Prova?grade=' + id, this.requestOptions)
            .toPromise()
            .then(function (data) { return data.json(); });
    };
    ProvaService.prototype.obterProvasMultidisciplinares = function (id) {
        return this._http.get(this.url + 'Prova?multidisciplinar=true', this.requestOptions)
            .toPromise()
            .then(function (data) { return data.json(); });
    };
    ProvaService.prototype.obterProvaPorId = function (id) {
        return this._http.get(this.url + 'Prova/' + id, this.requestOptions)
            .toPromise()
            .then(function (data) { return data.json(); });
    };
    ProvaService.prototype.obterMediaDisciplina = function (data) {
        var _this = this;
        var aux = [];
        var mediaPorDisciplina = [];
        this.appService.listaGrade.forEach(function (vl, idx) {
            var dados = data.filter(function (a) {
                if (a.grade)
                    return vl.id == a.grade.id;
            }).length > 0
                ? data.filter(function (a) {
                    if (a.grade)
                        return vl.id == a.grade.id;
                })
                : '';
            if (dados)
                aux.push(dados);
        });
        aux.forEach(function (vl, idx) {
            mediaPorDisciplina.push({
                nome: _this.appService.listaGrade.find(function (a) { return a.id == vl[0].grade.id; }).disciplina.nome,
                id: vl[0].grade.id,
                media: (vl.map(function (x) { return x.notaFinal; }).reduce(function (a, b) { return a + b; }) / vl.map(function (x) { return x.notaMaxima; }).reduce(function (a, b) { return a + b; }) * 100),
                quantidadeDeProvas: vl.length,
                totalNota: vl.map(function (x) { return x.notaFinal; }).reduce(function (a, b) { return a + b; }),
                totalNotaMaxima: vl.map(function (x) { return x.notaMaxima; }).reduce(function (a, b) { return a + b; })
            });
        });
        return mediaPorDisciplina;
    };
    ProvaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */]])
    ], ProvaService);
    return ProvaService;
}(__WEBPACK_IMPORTED_MODULE_0__models_service_model__["a" /* Service */]));

//# sourceMappingURL=provas.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestoesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_service_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestoesService = /** @class */ (function (_super) {
    __extends(QuestoesService, _super);
    function QuestoesService(_http, appService) {
        var _this = _super.call(this, appService) || this;
        _this._http = _http;
        _this.appService = appService;
        return _this;
    }
    QuestoesService.prototype.listarQuestoesAlternativas = function (id) {
        return this._http.get(this.url + 'Questao/Alternativa/?prova=' + id, this.requestOptions).toPromise().then(function (data) { return data.json(); });
    };
    QuestoesService.prototype.listarQuestoesDiscursivas = function (id) {
        return this._http.get(this.url + 'Questao/Discursiva/?prova=' + id, this.requestOptions).toPromise().then(function (data) { return data.json(); });
    };
    QuestoesService.prototype.obterQuestaoDiscursiva = function (id) {
        return this._http.get(this.url + 'Questao/Discursiva/' + id, this.requestOptions).toPromise().then(function (data) { return data.json(); });
    };
    QuestoesService.prototype.obterQuestaoAlternativa = function (id) {
        return this._http.get(this.url + 'Questao/Alternativa/' + id, this.requestOptions).toPromise().then(function (data) { return data.json(); });
    };
    QuestoesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */]])
    ], QuestoesService);
    return QuestoesService;
}(__WEBPACK_IMPORTED_MODULE_1__models_service_model__["a" /* Service */]));

//# sourceMappingURL=questoes.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificacoesService = /** @class */ (function () {
    function NotificacoesService(_http, _appService) {
        this._http = _http;
        this._appService = _appService;
    }
    NotificacoesService.prototype.getNotifications = function () {
        return this._http.get("https://private-2ca7d-objetivoapp.apiary-mock.com/notificacoes")
            .map(function (data) { return data.json(); });
    };
    NotificacoesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */]])
    ], NotificacoesService);
    return NotificacoesService;
}());

//# sourceMappingURL=notificacoes.service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListagemAlunosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_escola_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contato_contato__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListagemAlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ListagemAlunosPage = /** @class */ (function () {
    function ListagemAlunosPage(navCtrl, navParams, _admService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._admService = _admService;
        this.listStudents = []; // receives the return of filter getStudents()
        this.contador = []; // receives every status with of name 'Cancelado'
        this.idPeriod = 0;
        this.idCategories = 0;
        this.voltar = true;
    }
    ListagemAlunosPage.prototype.ionViewDidLoad = function () { };
    ListagemAlunosPage.prototype.ngOnInit = function () {
        var _this = this;
        this._admService.getPeriod()
            .subscribe(function (data) {
            _this.periods = data;
            console.log('periodos', _this.periods);
        });
        this._admService.getStudents()
            .subscribe(function (data) {
            _this.students = data;
            localStorage.setItem('listaAlunos', JSON.stringify(_this.students));
            console.log('alunos', _this.students);
        });
    };
    ListagemAlunosPage.prototype.getPeriod = function () {
        var _this = this;
        this.periods.forEach(function (value, index) { return value.id == _this.idPeriod ? _this.categories = value.categorias : false; });
    };
    ListagemAlunosPage.prototype.filterStudents = function () {
        var _this = this;
        this.contador.length = 0;
        this.students.forEach(function (value, index) {
            value.id == _this.idCategories ? _this.listStudents = value.alunos : false;
        });
        this.listStudents.forEach(function (value, index) {
            value.status == 'Cancelado' || value.status == 'Pendente' ? _this.contador.push(value.status) : false;
        });
    };
    ListagemAlunosPage.prototype.goContact = function (id, idTurma) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contato_contato__["a" /* ContatoPage */], { id: id, idTurma: idTurma }, { animate: true, animation: 'ios-animation' });
        console.log(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListagemAlunosPage.prototype, "idPeriod", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListagemAlunosPage.prototype, "idCategories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ListagemAlunosPage.prototype, "voltar", void 0);
    ListagemAlunosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-listagem-alunos',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/adm-escola/listagem-alunos/listagem-alunos.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n    \n<ion-content padding no-bounce>\n    <div class="box-top-app"  *ngIf="periods" >\n        <div class="header-chegando" [style.display]="listStudents.length > 0 && periods.length > 0 ? \'none\' : \'block\' ">\n            <i class="ico-chegando"></i>\n            <p>Selecione o período e a turma desejada</p>\n        </div>\n\n        <div class="list-alunos">\n            <div class="row title">\n                <div class="col-12">\n\n\n\n                    <!-- <select class="select-obj" [(ngModel)]="idPeriod" (ngModelChange)="getPeriod($event)">\n                        <option value="0">Selecione o período</option>\n                        <option *ngFor="let obj of periods" [ngValue]="obj.id">{{ obj?.periodo }}</option>\n                    </select> -->\n                    <ion-item>\n                        <ion-select style="font-size: 3.3vh; border-bottom: 0; width: 100%;" interface="action-sheet" [(ngModel)]="idPeriod" (ngModelChange)="getPeriod($event)">\n                            <ion-option value="0">Selecione o período</ion-option>\n                            <ion-option *ngFor="let obj of periods" [value]="obj.id">{{ obj?.periodo }}</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n\n                </div>\n            </div>\n\n            <ion-item>\n                <ion-select style="font-size: 3.3vh; border-bottom: 0; width: 100%;" interface="action-sheet" [(ngModel)]="idCategories" (ngModelChange)="filterStudents($event)">\n                    <ion-option value="0">Selecione uma turma</ion-option>\n                    <ion-option *ngFor="let obj of categories" [value]="obj.id"> {{ obj.descricao }} </ion-option>\n                </ion-select>\n            </ion-item>\n\n\n            <!-- <select class="select-obj select-serie" [(ngModel)]="idCategories" (ngModelChange)="filterStudents($event)">\n                <option value="0">Selecione uma turma</option>\n                <option *ngFor="let obj of categories" [ngValue]="obj.id"> {{ obj.descricao }} </option>\n            </select> -->\n\n            <div class="row">\n                <div class="col  text-right">\n                    <p class="number-cont" *ngIf="contador.length > 0">{{ contador.length }}</p>\n                </div>\n            </div>\n\n            <ul>\n\n                <!-- [routerLink]="obj.status == \'Pendente\' || obj.status == \'Cancelado\' ?  \'contato/\'+ idCategories +\'/\'+ obj.id : \'/escola\' " -->\n                <li class="row" *ngFor="let obj of listStudents | sort: \'referencia\'" (click)="goContact(obj.id, idCategories)">\n                    <div class="col-2 no-padding">\n                        <span class="circle" [class.red]="obj.status == \'Cancelado\' " [class.orange]="obj.status == \'Pendente\' " [class.green]="obj.status == \'Entregue\' "></span>\n                    </div>\n\n                    <div class="col-8 title-li">\n                        <h4 class="max-lines-1">{{ obj?.nome }}</h4>\n                        <p>{{ obj?.descricao }}</p>\n                        <p class="max-lines-1">{{ obj?.responsavel }}</p>\n                    </div>\n\n                    <div class="col-2 text-center car" [class.disabled]="obj.status == \'Entregue\'"><i class="ico-chegando"></i></div>\n\n                </li>\n\n            </ul>\n\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/adm-escola/listagem-alunos/listagem-alunos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__adm_escola_service__["a" /* AdmInspetorService */]])
    ], ListagemAlunosPage);
    return ListagemAlunosPage;
}());

//# sourceMappingURL=listagem-alunos.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmInspetorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdmInspetorService = /** @class */ (function () {
    function AdmInspetorService(_http) {
        this._http = _http;
        this.urlStudents = "https://private-2ca7d-objetivoapp.apiary-mock.com/alunos";
        this.urlPeriod = "https://private-2ca7d-objetivoapp.apiary-mock.com/turmas";
    }
    AdmInspetorService.prototype.getPeriod = function () {
        return this._http.get(this.urlPeriod)
            .map(function (data) { return data.json(); });
    };
    AdmInspetorService.prototype.getStudents = function () {
        return this._http.get(this.urlStudents)
            .map(function (data) { return data.json(); });
    };
    AdmInspetorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AdmInspetorService);
    return AdmInspetorService;
}());

//# sourceMappingURL=adm-escola.service.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ContatoPage = /** @class */ (function () {
    function ContatoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.voltar = true;
        this.filterClass = JSON.parse(localStorage.getItem('listaAlunos'));
        this.idStudent = this.navParams.get('id');
        this.idTurma = this.navParams.get('idTurma');
    }
    ContatoPage.prototype.ionViewDidLoad = function () { };
    ContatoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.students = JSON.parse(localStorage.getItem('listaAlunos'));
        this.idStudent = this.navParams.get('id');
        this.idTurma = this.navParams.get('idTurma');
        this.students.forEach(function (value, index) { return value.id == _this.idTurma ? _this.filterClass = value.alunos : false; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ContatoPage.prototype, "voltar", void 0);
    ContatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contato',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/adm-escola/contato/contato.html"*/'             \n<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n  <div class="row align-items-center justify-content-md-center box-center-app">\n    <div class="col">\n      <div class="call text-center" *ngFor="let obj of filterClass">\n          <div *ngIf="obj.id == idStudent">\n            <h2>{{ obj?.nome }}</h2>\n            <p>{{ obj?.descricao }}</p>\n            <p>Responsável: {{ obj?.responsavel }}</p>\n            <p><b>Contato: (11) 12345-1234</b></p>\n          </div>\n      </div>\n\n      <div class="text-center">\n          <button style="width: 70%;" class="bot-green bot margin-10"><i class="ico-phone"></i></button>\n          \n          <button style="width: 70%;" class="text-uppercase bot-red bot margin-10"> notificar</button>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/adm-escola/contato/contato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ContatoPage);
    return ContatoPage;
}());

//# sourceMappingURL=contato.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FinanceiroService = /** @class */ (function () {
    function FinanceiroService(_http) {
        this._http = _http;
    }
    FinanceiroService.prototype.getTickets = function () {
        return this._http.get("https://private-2ca7d-objetivoapp.apiary-mock.com/boletos")
            .map(function (data) { return data.json(); });
    };
    FinanceiroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FinanceiroService);
    return FinanceiroService;
}());

//# sourceMappingURL=financeiro.service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FinanceiroDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var FinanceiroDetalhesPage = /** @class */ (function () {
    function FinanceiroDetalhesPage(navCtrl, navParams, alertCtrl, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appService = appService;
        this.voltar = true;
        this.id = navParams.get('id');
        this.ticketDetail = JSON.parse(localStorage.getItem('boletos'));
        console.log(this.ticketDetail);
    }
    FinanceiroDetalhesPage.prototype.ionViewDidLoad = function () { };
    FinanceiroDetalhesPage.prototype.segundaViaBoleto = function () {
        this.appService.showToaster('2ª via do boleto enviada por e-mail!', 3000);
    };
    FinanceiroDetalhesPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Pagar boleto',
            message: 'Deseja pagar o boleto com o cartão cadastrado?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Pagar',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.appService.showToaster('Boleto pago com sucesso!', 3000);
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FinanceiroDetalhesPage.prototype, "voltar", void 0);
    FinanceiroDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-financeiro-detalhes',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/financeiro/financeiro-detalhes/financeiro-detalhes.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce >\n  <div class="row align-items-center justify-content-md-center box-center-app">\n    <div class="col">\n\n        <div *ngFor="let obj of ticketDetail">\n            <div *ngIf="obj.id == id">\n              <div class="detalhes-financeiro margin-40">\n                <h2 class="text-center margin-20"> Boleto mensal</h2>\n                <p>Vencimento: {{ obj?.detalhes.data | date: \'dd/MM/yyyy\' }}</p>\n                <p>Faturamento: {{ obj?.detalhes.lancamento | date: \'dd/MM/yyyy\' }}</p>\n                <p>Valor: {{ obj?.mensalidade.valor | currency:\'BRL\': \'1.2-2\' }}</p>\n                <p>Parcela: {{ obj?.detalhes.mesReferencia }}</p>\n                <p>Situação: <b>{{ obj?.status == \'EmAtraso\' ? \'Não pago\' : \'\' ||\n                                   obj?.status == \'Aprovado\' ? \'Pago\' : \'\' ||\n                                   obj?.status == \'Pendente\' ? obj?.status : \'\'| uppercase }}\n                                </b></p>\n              </div>\n          \n              <div class="text-center margin-40" *ngIf="obj?.status != \'Aprovado\'">\n                <button style="width: 80%; margin-top: 20px;" class="text-uppercase bot-primary bot" (click)="segundaViaBoleto()"> 2º via do boleto</button>\n                <button style="width: 80%;" class="text-uppercase bot-green bot" (click)="showConfirm()"> pagar</button>\n              </div>\n            </div>\n          </div>\n    </div>\n    \n  </div> \n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/financeiro/financeiro-detalhes/financeiro-detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */]])
    ], FinanceiroDetalhesPage);
    return FinanceiroDetalhesPage;
}());

//# sourceMappingURL=financeiro-detalhes.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuporteAppPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atendimento_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SuporteAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SuporteAppPage = /** @class */ (function () {
    function SuporteAppPage(navCtrl, navParams, _atendimentoService, _sharedService, _formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._atendimentoService = _atendimentoService;
        this._sharedService = _sharedService;
        this._formBuilder = _formBuilder;
        this.alertCtrl = alertCtrl;
        this.voltar = true;
        this.usuario = JSON.parse(localStorage.getItem('dados'));
    }
    SuporteAppPage.prototype.ngOnInit = function () {
        this.formSupport = this._formBuilder.group({
            nome: [null],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email],
            telefone: [null],
            mensagem: [null]
        });
    };
    SuporteAppPage.prototype.sendMessage = function () {
        var _this = this;
        var body = this._sharedService.tratarObjeto(this.formSupport.value);
        this._atendimentoService.contactSecretary(body)
            .subscribe(function (data) {
            console.log(body);
            var alert = _this.alertCtrl.create({
                title: 'Mensagem',
                subTitle: data.mensagem,
                buttons: ['Ok']
            });
            alert.present();
            console.log(data.mensagem);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SuporteAppPage.prototype, "voltar", void 0);
    SuporteAppPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suporte-app',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atendimento/suporte-app/suporte-app.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n    <div class="row align-items-center justify-content-md-center box-top-app">\n  \n      <div class="col" *ngIf="usuario">\n        <h2 style="margin-left: 15px;">Suporte ao app</h2>    \n        <form action=""\n        [formGroup]="formSupport"\n        (ngSubmit)="sendMessage()"\n        >\n          <div class="col-12 margin-10">\n              <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.nome" formControlName="nome" placeholder="Nome Sobrenome">\n              <span class="focus-border"></span>\n          </div>\n          <div class="col-12 margin-10">\n              <input type="mail" class="form-control input-obj color input-login" [(ngModel)]="usuario.contato.email" formControlName="email" placeholder="email@objetivo.br">\n              <span class="focus-border"></span>\n          </div>\n          <div class="col-12 margin-10">\n              <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.contato.telefone" formControlName="telefone" placeholder="(011) 1234-5678">\n              <span class="focus-border"></span>\n          </div>\n      \n          <div class="col-12">\n              <ion-label>Mensagem</ion-label>\n              <ion-textarea class="form-control " id="message" formControlName="mensagem" rows="5"></ion-textarea>\n          </div>            \n          \n      \n            <div class="text-center">\n                <button style="width:70%" class="text-uppercase bot-primary margin-10 bot"> enviar</button>\n            </div>\n        </form>\n    \n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atendimento/suporte-app/suporte-app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__atendimento_service__["a" /* AtendimentoService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SuporteAppPage);
    return SuporteAppPage;
}());

//# sourceMappingURL=suporte-app.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_notificacoes_notificacoes__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_appService, _menuCtrl) {
        var _this = this;
        this._appService = _appService;
        this._menuCtrl = _menuCtrl;
        this._appService.contNotification = document.querySelector('.ico-notification-alert');
        setTimeout(function () {
            _this.navCtrl.viewDidEnter.subscribe(function (view) {
                // if(view.instance.constructor.name == "LoginPage")
                //   $('header-obj').find('ion-header').hide();
                // else if(view.instance.constructor.name != "HomePage")
                //   $('header-obj').find('ion-header').show(); 
            });
            // console.log()
        }, 0);
    }
    HeaderComponent.prototype.toggleMenu = function () {
        this._menuCtrl.toggle();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.ico-notification').removeClass('ico-animation');
            // console.log(this.voltar)
        }, 3000);
        //console.log('header ', this._appService.contNotification)
    };
    HeaderComponent.prototype.menuClosed = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.navdown').removeClass('sair');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.navdown').addClass('voltar');
    };
    HeaderComponent.prototype.menuOpened = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.navdown').addClass('sair');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.navdown').removeClass('voltar');
    };
    HeaderComponent.prototype.voltarPagina = function () {
        this.navCtrl.pop(this._appService.navOptions);
    };
    HeaderComponent.prototype.openNotificacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */])
    ], HeaderComponent.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "voltar", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-obj',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/header/header.html"*/'<ion-header no-bounce  class="header-app" no-border>\n  <ion-navbar hideBackButton>\n    <!-- <ion-icon class="ico-burguer" name="ico-burguer" *ngIf="!voltar" (click)="toggleMenu()"></ion-icon> -->\n    <i class="ico-burguer" *ngIf="!voltar" (click)="toggleMenu()"></i>\n\n    <i class="arrow-back" *ngIf="voltar" (click)="voltarPagina()"></i>\n    <img class="logo-obj"  src="assets/img/logo-objetivo.svg" alt="logo objetivo">\n    \n    <div class="ico-notification-alert active" (click)="openNotificacoes()">   \n      <div class="notification"></div>\n      <div class="animation">\n          <!-- <ion-icon name="ico-notification" class="ico-animation"></ion-icon> -->\n          <i class="ico-notification ico-animation"></i>\n      </div>\n    </div>\n    \n  </ion-navbar>\n</ion-header>\n\n         \n '/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorizacoesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutorizacoesService = /** @class */ (function () {
    function AutorizacoesService(_http) {
        this._http = _http;
    }
    AutorizacoesService.prototype.getAuthorizations = function () {
        return this._http.get("https://private-2ca7d-objetivoapp.apiary-mock.com/autorizacoes")
            .map(function (data) { return data.json(); });
    };
    AutorizacoesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AutorizacoesService);
    return AutorizacoesService;
}());

//# sourceMappingURL=autorizacoes.service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    SharedService.prototype.tratarObjeto = function (obj) {
        var newObj = '';
        var array = Object.getOwnPropertyNames(obj);
        array.forEach(function (value, index) {
            newObj += value + '=' + obj[value] + "&";
        });
        return newObj;
    };
    SharedService.prototype.showToaster = function (msg, duration) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: duration
        });
        toast.present();
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_call_number__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_atendimento_atendimento__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_usuario_usuario_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_shared_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_estou_chegando_estou_chegando__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notas_notas__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_header_header__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_notas_notas_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_notas_notas_lista_provas_notas_lista_provas__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_notas_notas_detalhes_notas_detalhes__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_atividades_atividades__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_atividades_atividades_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_components_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_usuario_usuario__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_usuario_usuario_editar_usuario_editar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_usuario_usuario_redefinir_usuario_redefinir__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_financeiro_financeiro__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_financeiro_financeiro_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_financeiro_financeiro_detalhes_financeiro_detalhes__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_autorizacoes_autorizacoes_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_autorizacoes_autorizacoes__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_autorizacoes_autorizacoes_evento_autorizacoes_evento__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_notificacoes_notificacoes_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_notificacoes_notificacoes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_usuario_usuario_redefinir_valida_senha_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_adm_escola_listagem_alunos_listagem_alunos__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_adm_escola_adm_escola_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_adm_escola_listagem_alunos_sort_pipe__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_adm_escola_contato_contato__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_calendario_calendario_eventos_calendario_eventos__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_atendimento_fale_conosco_fale_conosco__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_atendimento_secretaria_secretaria__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_atendimento_suporte_app_suporte_app__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_atendimento_atendimento_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_touch_id__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_android_fingerprint_auth__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_device__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_launch_navigator__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_geolocation__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_content_loader_content_loader__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ionic3_calendar_en__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_calendario_calendario_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_conteudo_online_conteudo_online__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_provas_provas__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { UsuarioPage } from '../pages/usuario/usuario';









































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_estou_chegando_estou_chegando__["a" /* EstouChegandoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notas_notas_lista_provas_notas_lista_provas__["a" /* NotasListaProvasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_notas_notas_detalhes_notas_detalhes__["a" /* NotasDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_atividades_atividades__["a" /* AtividadesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_usuario_usuario_editar_usuario_editar__["a" /* UsuarioEditarPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_usuario_usuario_redefinir_usuario_redefinir__["a" /* UsuarioRedefinirPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_financeiro_financeiro__["a" /* FinanceiroPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_financeiro_financeiro_detalhes_financeiro_detalhes__["a" /* FinanceiroDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_autorizacoes_autorizacoes__["a" /* AutorizacoesPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_autorizacoes_autorizacoes_evento_autorizacoes_evento__["a" /* AutorizacoesEventoPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_adm_escola_listagem_alunos_listagem_alunos__["a" /* ListagemAlunosPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_adm_escola_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_adm_escola_listagem_alunos_sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_43__pages_calendario_calendario_eventos_calendario_eventos__["a" /* CalendarioEventosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_atendimento_atendimento__["a" /* AtendimentoPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_atendimento_fale_conosco_fale_conosco__["a" /* FaleConoscoPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_atendimento_secretaria_secretaria__["a" /* SecretariaPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_atendimento_suporte_app_suporte_app__["a" /* SuporteAppPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_conteudo_online_conteudo_online__["a" /* ConteudoOnlinePage */],
                __WEBPACK_IMPORTED_MODULE_53__components_content_loader_content_loader__["a" /* ContentLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_provas_provas__["a" /* ProvasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_54_ionic3_calendar_en__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adm-escola/adm-escola.module#AdmEscolaPageModule', name: 'AdmEscolaPage', segment: 'adm-escola', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/atendimento/atendimento.module#AtendimentoPageModule', name: 'AtendimentoPage', segment: 'atendimento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/atividades/atividades.module#AtividadesPageModule', name: 'AtividadesPage', segment: 'atividades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas/notas.module#NotasPageModule', name: 'NotasPage', segment: 'notas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/conteudo/conteudo.module#ConteudoPageModule', name: 'ConteudoPage', segment: 'conteudo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/detalhes/detalhes.module#DetalhesPageModule', name: 'DetalhesPage', segment: 'detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/exercicios/exercicios.module#ExerciciosPageModule', name: 'ExerciciosPage', segment: 'exercicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/exercicios/sugestoes/sugestoes.module#SugestoesPageModule', name: 'SugestoesPage', segment: 'sugestoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/jogos/jogos.module#JogosPageModule', name: 'JogosPage', segment: 'jogos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/questao/alternativa-prova/alternativa-prova.module#AlternativaProvaPageModule', name: 'AlternativaProvaPage', segment: 'alternativa-prova', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/questao/dissertativa-prova/dissertativa-prova.module#DissertativaProvaPageModule', name: 'DissertativaProvaPage', segment: 'dissertativa-prova', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/questao/dissertativa/dissertativa.module#DissertativaPageModule', name: 'DissertativaPage', segment: 'dissertativa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/resolucao/resolucao.module#ResolucaoPageModule', name: 'ResolucaoPage', segment: 'resolucao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/texto-apoio/texto-apoio.module#TextoApoioPageModule', name: 'TextoApoioPage', segment: 'texto-apoio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/provas.module#ProvasPageModule', name: 'ProvasPage', segment: 'provas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/usuario.module#UsuarioPageModule', name: 'UsuarioPage', segment: 'usuario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_estou_chegando_estou_chegando__["a" /* EstouChegandoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notas_notas_lista_provas_notas_lista_provas__["a" /* NotasListaProvasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_notas_notas_detalhes_notas_detalhes__["a" /* NotasDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_atividades_atividades__["a" /* AtividadesPage */],
                // CollapseColorComponent,
                __WEBPACK_IMPORTED_MODULE_20__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_usuario_usuario_editar_usuario_editar__["a" /* UsuarioEditarPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_usuario_usuario_redefinir_usuario_redefinir__["a" /* UsuarioRedefinirPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_financeiro_financeiro__["a" /* FinanceiroPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_financeiro_financeiro_detalhes_financeiro_detalhes__["a" /* FinanceiroDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_autorizacoes_autorizacoes__["a" /* AutorizacoesPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_autorizacoes_autorizacoes_evento_autorizacoes_evento__["a" /* AutorizacoesEventoPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_adm_escola_listagem_alunos_listagem_alunos__["a" /* ListagemAlunosPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_adm_escola_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_calendario_calendario_eventos_calendario_eventos__["a" /* CalendarioEventosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_atendimento_atendimento__["a" /* AtendimentoPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_atendimento_fale_conosco_fale_conosco__["a" /* FaleConoscoPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_atendimento_secretaria_secretaria__["a" /* SecretariaPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_atendimento_suporte_app_suporte_app__["a" /* SuporteAppPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_conteudo_online_conteudo_online__["a" /* ConteudoOnlinePage */],
                __WEBPACK_IMPORTED_MODULE_53__components_content_loader_content_loader__["a" /* ContentLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_provas_provas__["a" /* ProvasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_47__pages_atendimento_atendimento_service__["a" /* AtendimentoService */],
                __WEBPACK_IMPORTED_MODULE_40__pages_adm_escola_adm_escola_service__["a" /* AdmInspetorService */],
                __WEBPACK_IMPORTED_MODULE_36__pages_notificacoes_notificacoes_service__["a" /* NotificacoesService */],
                __WEBPACK_IMPORTED_MODULE_33__pages_autorizacoes_autorizacoes_service__["a" /* AutorizacoesService */],
                __WEBPACK_IMPORTED_MODULE_31__pages_financeiro_financeiro_service__["a" /* FinanceiroService */],
                __WEBPACK_IMPORTED_MODULE_25__pages_atividades_atividades_service__["a" /* AtividadesService */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notas_notas_service__["a" /* NotasService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_14__pages_usuario_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_38__pages_usuario_usuario_redefinir_valida_senha_service__["a" /* ValidaSenhaService */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_touch_id__["a" /* TouchID */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_55__pages_calendario_calendario_service__["a" /* CalendarioService */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExerciciosPage = /** @class */ (function () {
    function ExerciciosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExerciciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExerciciosPage');
    };
    ExerciciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-exercicios',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/exercicios/exercicios.html"*/'<app-title-page-prova \n[color]="\'yellow\'" \n[title]="titulo" \n[valores]="appService.exercicios" \n[hideTrilha]="mostrar"\n(clickEvento)="obterExercicios($event)"></app-title-page-prova>\n\n<div *ngIf="exercicio">\n    <app-cabecalho  [questaoAtiva]="exercicio"></app-cabecalho> \n    <br>\n    \n    <app-enunciado  [questaoAtiva]="exercicio"></app-enunciado>\n    <app-alternativa [ultimo]="ultimo" [idCorreta]="idCorreta" [questaoAtiva]="exercicio" *ngIf="exercicio.alternativas.length > 0"></app-alternativa>\n    <app-dissertativa [ultimo]="ultimo" [questaoAtiva]="exercicio" *ngIf="exercicio.alternativas.length == 0"></app-dissertativa>\n</div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/exercicios/exercicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ExerciciosPage);
    return ExerciciosPage;
}());

//# sourceMappingURL=exercicios.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtividadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__atividades_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AtividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AtividadesPage = /** @class */ (function () {
    function AtividadesPage(navCtrl, navParams, _activitiesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._activitiesService = _activitiesService;
        this.loaderContent = true;
        this.arrayCores = [
            { cor: 'red' },
            { cor: 'blue' },
            { cor: 'green' },
            { cor: 'orange' },
        ];
    }
    AtividadesPage.prototype.ionViewDidLoad = function () { };
    AtividadesPage.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".seletor").css('display', 'none');
        this._activitiesService.getActivities()
            .subscribe(function (data) {
            // this.preLoader = false;
            _this.loaderContent = false;
            _this.atividades = data;
            // setTimeout(() => {
            //   var animateTime = 0;
            //   $('.row' + '.list-color').each((i, obj )=>{
            //     animateTime += 0.1; 
            //     TweenMax.fromTo($(obj), 0.3, {
            //       alpha: 0
            //   }, {
            //       alpha: 1,
            //       delay: animateTime,
            //       ease: Power0.easeInOut
            //   });
            // });
            // }, 0);
        });
    }; // end onInit
    AtividadesPage.prototype.changeCollor = function (index) {
        return this.arrayCores[index >= 4 ? index % 4 : index].cor;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AtividadesPage.prototype, "atividades", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AtividadesPage.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AtividadesPage.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AtividadesPage.prototype, "link", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AtividadesPage.prototype, "disciplina", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AtividadesPage.prototype, "diaEvento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AtividadesPage.prototype, "mesEvento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AtividadesPage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AtividadesPage.prototype, "casa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AtividadesPage.prototype, "mensagem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AtividadesPage.prototype, "professor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AtividadesPage.prototype, "nota", void 0);
    AtividadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-atividades',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atividades/atividades.html"*/'             \n<header-obj [navCtrl]="navCtrl"></header-obj>\n<ion-content padding no-bounce >\n  <div class="box-top-app">\n    <div class="title-ico">\n        <i class="ico-atividades"></i>\n        <h2>Atividades</h2>\n      </div>     \n\n      <content-loader *ngIf="loaderContent"></content-loader>\n\n      <div class="card-atividades {{ color }}"\n      *ngFor="let obj of atividades; let i = index"\n      [ngClass]="changeCollor(i)">\n\n        <div class="row">\n          <div class="col-6" style="padding-right: 0;">\n            <img [src]="obj.avatar" onerror="this.src = \'assets/imgs/atividades-default.jpg\';">\n          </div>\n          <div class="col-6" style="padding-left: 10px;">\n            <h2>{{ obj?.titulo }}</h2>\n            <p><i>{{ obj?.local.casa }}</i></p>\n            <p>Valor: <b>{{ obj?.detalhes.notaMaxima }}</b></p>\n            <p>{{ obj?.disciplina }}</p>\n            <p>{{ obj?.detalhes.tutor }}</p>\n          </div>          \n        </div>\n        <div class="row">\n          <div class="col-3 text-center" style="padding-right: 0; padding-left: 19px;">\n            <h4>{{ obj?.diaEvento }}</h4>\n            <h5>{{ obj?.mesEvento }}</h5>\n          </div>\n          <div class="col-9">\n            <p>{{ obj?.descricao }}</p>\n          </div>          \n        </div>    \n        <!-- <div class="row">\n          <div class="col text-right">\n            <i class="ico-atendimento"></i>\n            <i class="ico-atendimento"></i>\n            <i class="ico-atendimento"></i>\n          </div>\n        </div>               -->\n      </div>\n\n\n\n    <!-- <collapse-color [listLi]="data"></collapse-color> -->\n  </div> \n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atividades/atividades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__atividades_service__["a" /* AtividadesService */]])
    ], AtividadesPage);
    return AtividadesPage;
}());

//# sourceMappingURL=atividades.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConteudoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConteudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConteudoPage = /** @class */ (function () {
    function ConteudoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConteudoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConteudoPage');
    };
    ConteudoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-conteudo',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/conteudo/conteudo.html"*/'<app-title-page-prova \n    *ngIf="titulo" \n    [color]="\'blue\'" \n    [title]="titulo" \n    [valores]="appService.conteudo" \n    [hideTrilha]="mostrar"\n    (clickEvento)="obterConteudo($event)"></app-title-page-prova>\n\n<div [innerHTML]="conteudo" style="width: 95%;"></div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/conteudo/conteudo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ConteudoPage);
    return ConteudoPage;
}());

//# sourceMappingURL=conteudo.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JogosPage = /** @class */ (function () {
    function JogosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JogosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JogosPage');
    };
    JogosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jogos',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/jogos/jogos.html"*/'<app-title-page-prova \n  *ngIf="appService.provaAtiva"\n  [color]="\'violet\'" \n  [title]="titulo" \n  [hideTrilha]="false">\n</app-title-page-prova>\n<div [innerHTML]="jogo"></div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/jogos/jogos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], JogosPage);
    return JogosPage;
}());

//# sourceMappingURL=jogos.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextoApoioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TextoApoioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TextoApoioPage = /** @class */ (function () {
    function TextoApoioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TextoApoioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TextoApoioPage');
    };
    TextoApoioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-texto-apoio',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/texto-apoio/texto-apoio.html"*/'<app-title-page-prova [color]="\'pink\'" [title]="\'Texto de apoio\'" [hideTrilha]="false"></app-title-page-prova>\n<div class="m_question_alternative">\n    <div class="panel panel-default">\n       <div class="panel-heading"></div>\n       <article class="pattern pattern-colors">\n          <div readonly="" [innerHTML]="appService.questaoAtiva.textoApoio"></div>\n       </article>\n    </div>\n </div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/texto-apoio/texto-apoio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TextoApoioPage);
    return TextoApoioPage;
}());

//# sourceMappingURL=texto-apoio.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuProvaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_notas_notas__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendario_calendario__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_estou_chegando_estou_chegando__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_financeiro_financeiro__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_provas_provas__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_provas_conteudo_conteudo__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_provas_videos_videos__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_provas_exercicios_exercicios__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_provas_jogos_jogos__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_provas_texto_apoio_texto_apoio__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the MenuProvaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuProvaComponent = /** @class */ (function () {
    function MenuProvaComponent(appService) {
        this.appService = appService;
        this.mudarRota = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentPage = '';
        this.menuIcons = false;
        this.home = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.notas = __WEBPACK_IMPORTED_MODULE_3__pages_notas_notas__["a" /* NotasPage */];
        this.calendario = __WEBPACK_IMPORTED_MODULE_4__pages_calendario_calendario__["a" /* CalendarioPage */];
        this.chegando = __WEBPACK_IMPORTED_MODULE_5__pages_estou_chegando_estou_chegando__["a" /* EstouChegandoPage */];
        this.financeiro = __WEBPACK_IMPORTED_MODULE_6__pages_financeiro_financeiro__["a" /* FinanceiroPage */];
    }
    MenuProvaComponent.prototype.ngOnInit = function () {
    };
    MenuProvaComponent.prototype.redirecionar = function (nome) {
        // console.log(nome)
        if (nome == 'prova') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_provas_provas__["a" /* ProvasPage */], null, { animate: false });
            this.appService.currentPage = nome;
        }
        else if (nome == 'conteudo') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_provas_conteudo_conteudo__["a" /* ConteudoPage */], null, this.appService.navOptions);
            this.appService.currentPage = nome;
        }
        else if (nome == 'videos') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_provas_videos_videos__["a" /* VideosPage */], null, this.appService.navOptions);
            this.appService.currentPage = nome;
        }
        else if (nome == 'exercicios') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_provas_exercicios_exercicios__["a" /* ExerciciosPage */], null, this.appService.navOptions);
            this.appService.currentPage = nome;
        }
        else if (nome == 'jogos') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_provas_jogos_jogos__["a" /* JogosPage */], null, this.appService.navOptions);
            this.appService.currentPage = 'nome';
        }
        else if (nome == 'textoApoio') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_provas_texto_apoio_texto_apoio__["a" /* TextoApoioPage */], null, this.appService.navOptions);
            this.appService.currentPage = 'nome';
        }
        else if (nome == 'resolucao') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_provas_texto_apoio_texto_apoio__["a" /* TextoApoioPage */], null, this.appService.navOptions);
            this.appService.currentPage = 'nome';
        }
    };
    MenuProvaComponent.prototype.ngOnDestroy = function () {
        this.appService.jogos = [];
        this.appService.exercicios = [];
        this.appService.conteudo = [];
        this.appService.videos = [];
        this.appService.textoApoio = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MenuProvaComponent.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MenuProvaComponent.prototype, "mudarRota", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('atend'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MenuProvaComponent.prototype, "atendimento", void 0);
    MenuProvaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menu-prova',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/menu-prova/menu-prova.html"*/'\n\n<nav class="navdown fixed-bottom">\n  <div class="row icons">\n    <a class="col" (click)="redirecionar(\'prova\')">\n      <img src="./assets/icon/provas-01.svg">\n    </a>\n    <a class="col" *ngIf="appService.conteudo.length > 0" (click)="redirecionar(\'conteudo\')">\n      <img src="./assets/icon/conteudo-01.svg">\n    </a>\n    <a class="col" *ngIf="appService.videos.length > 0" (click)="redirecionar(\'videos\')">\n      <img src="./assets/icon/exercicios-01.svg">\n    </a>\n    <a class="col" *ngIf="appService.exercicios.length > 0" (click)="redirecionar(\'exercicios\')">\n      <img src="./assets/icon/videos-01.svg">\n    </a>    \n    <a class="col" *ngIf="appService.jogos.length > 0" (click)="redirecionar(\'jogos\')">\n      <img src="./assets/icon/games-01.svg">\n    </a>\n    <a class="col" *ngIf="appService.textoApoio && appService.textoApoio.length > 0" (click)="redirecionar(\'textoApoio\')">\n      <img src="./assets/icon/texto-01.svg">\n    </a>    \n    <a class="col" *ngIf="appService.questaoAtiva && ( appService.questaoAtiva.resposta || appService.questaoAtiva.alternativas )" (click)="redirecionar(\'resolucao\')">\n      <img src="./assets/icon/resolucao-01.svg">\n    </a>\n  </div>            \n</nav>\n     \n      \n            \n            \n          \n          '/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/menu-prova/menu-prova.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* AppService */]])
    ], MenuProvaComponent);
    return MenuProvaComponent;
}());

//# sourceMappingURL=menu-prova.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideosPage = /** @class */ (function () {
    function VideosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideosPage');
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videos',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/videos/videos.html"*/'<app-title-page-prova \n[color]="\'green\'" \n[title]="titulo" \n[valores]="appService.videos" \n[hideTrilha]="mostrar"\n(clickEvento)="obterVideo($event)"></app-title-page-prova>\n\n<iframe *ngIf="url" [src]="url" width="96%" height="500"></iframe>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/videos/videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioService = /** @class */ (function () {
    function UsuarioService(_http) {
        this._http = _http;
        this._urlGetUSer = "https://private-2ca7d-objetivoapp.apiary-mock.com/usuario";
        this._urlReset = "https://private-2ca7d-objetivoapp.apiary-mock.com/usuario/recuperarAcesso";
        this._urlUpdate = "https://private-2ca7d-objetivoapp.apiary-mock.com/usuario/";
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'chavePublica': '32D69BD2-9E51-4199-AD01-7C6758DC0C8C',
            'tokenAcesso': 'oOwHGpphDtMWUIu4dOB1xT0wuCi0U1'
        });
        // RequestOptions
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.header
        });
    }
    UsuarioService.prototype.getUsers = function () {
        return this._http.get(this._urlGetUSer)
            .map(function (dados) { return dados.json(); });
    };
    UsuarioService.prototype.updateUser = function (id, body) {
        return this._http.put("" + this._urlUpdate + id, body, this.requestOptions)
            .map(function (dados) { return dados.json(); });
    };
    UsuarioService.prototype.resetPassWord = function (body) {
        return this._http.put(this._urlReset, body)
            .map(function (data) { return data.json(); });
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotasService = /** @class */ (function () {
    function NotasService(_http, _appService) {
        this._http = _http;
        this._appService = _appService;
        this.onChangeDisciplinas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.filtroProva = [];
        this.listaProvas = [];
        this.notas = [];
        // header definido no AppService
        this.header = this._appService.header;
        this.requestOptions = this._appService.requestOptions;
    }
    NotasService.prototype.getDadosGrade = function () {
        this.header.delete('Content-type');
        this.header.append('userKey', this._appService.token);
        // console.log(this.requestOptions)
        return this._http.get("http://200.174.103.116/objetivoprova/Api/Grade", this.requestOptions)
            .map(function (dados) {
            // alert(dados.json())
            return dados.json();
        });
    };
    NotasService.prototype.filtroDisciplinas = function (id) {
        return this._http.get("http://200.174.103.116/objetivoprova/api/Prova?grade=" + id, this.requestOptions)
            .map(function (dados) { return dados.json(); });
    };
    NotasService.prototype.getResumoDisciplinas = function () {
        this.requestOptions.headers.set('userKey', this._appService.token);
        return this._http.get("http://200.174.103.116/objetivoprova/Api/Grade", this.requestOptions)
            .map(function (dados) { return dados.json(); });
    };
    NotasService.prototype.emitDisciplinas = function (dados) {
        this.notas = dados;
        this.onChangeDisciplinas.emit(dados);
    };
    NotasService.prototype.calculaMedia = function (dados) {
        var notaMaxima = 0;
        var notaFinal = 0;
        var media;
        var listaNotas = [];
        var listaNotasMaxima = [];
        dados.forEach(function (value, index) {
            // Calcula todas as notas máximas e joga na variável 'notaMaxima'.
            listaNotasMaxima[index] = value.notaMaxima;
            notaMaxima += listaNotasMaxima[index];
            // Calcula todas as notas finais e joga na variável 'notaFinal'.
            listaNotas[index] = value.notaFinal;
            notaFinal += listaNotas[index];
        });
        media = (notaFinal / notaMaxima) * 100;
        // alert(media)
        return media;
    };
    NotasService.prototype.calculaMediaGeral = function (dados) {
        console.log(dados);
        var arrProvas = [];
        var somaNF = 0;
        var somaNM = 0;
        var mediaGeral;
        dados.forEach(function (value, index) { return arrProvas[index] = dados[index].provas; });
        arrProvas.forEach(function (value, index) {
            value.forEach(function (value, index) {
                somaNF += value.notaFinal;
                somaNM += value.notaMaxima;
            });
        });
        mediaGeral = (somaNF / somaNM) * 100;
        return mediaGeral;
    };
    NotasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */]])
    ], NotasService);
    return NotasService;
}());

//# sourceMappingURL=notas.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_service_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AulaService = /** @class */ (function (_super) {
    __extends(AulaService, _super);
    function AulaService(_http, appService) {
        var _this = _super.call(this, appService) || this;
        _this._http = _http;
        _this.appService = appService;
        return _this;
    }
    AulaService.prototype.listarAula = function (id) {
        return this._http.get(this.url + 'Aula/?questao=' + id, this.requestOptions);
    };
    AulaService.prototype.obterAula = function (idConteudo) {
        return this._http.get(this.url + 'Aula/' + idConteudo, this.requestOptions);
    };
    AulaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */]])
    ], AulaService);
    return AulaService;
}(__WEBPACK_IMPORTED_MODULE_1__models_service_model__["a" /* Service */]));

//# sourceMappingURL=aula.service.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciciosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_service_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExerciciosService = /** @class */ (function (_super) {
    __extends(ExerciciosService, _super);
    function ExerciciosService(_http, appService) {
        var _this = _super.call(this, appService) || this;
        _this._http = _http;
        _this.appService = appService;
        return _this;
    }
    ExerciciosService.prototype.listarExercicios = function (id) {
        return this._http.get(this.url + 'Exercicio/?questao=' + id + '&vinculado=true', this.requestOptions);
    };
    ExerciciosService.prototype.obterExercicio = function (idExercicio) {
        return this._http.get(this.url + 'Exercicio/' + idExercicio, this.requestOptions);
    };
    ExerciciosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */]])
    ], ExerciciosService);
    return ExerciciosService;
}(__WEBPACK_IMPORTED_MODULE_1__models_service_model__["a" /* Service */]));

//# sourceMappingURL=exercicios.service.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        // Váriaveis para manipulação do NavBar e Footer.
        // mostrarNav = new EventEmitter<boolean>();
        // operaFooter = new EventEmitter<boolean>();
        this.userAuth = false;
        this._urlLogin = "http://200.174.103.116/objetivoprova/Api/MinhaConta/Autenticacao/Matricula";
        // Header definido no AppService
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'appKey': 'YPpj++OV7AckYkJ7lLL1OJPO+rCJPXv1GggdgV8aFsPxDXNLN3OIF2k8GQfUAboY'
        });
        // RequestOptions
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.header
        });
    }
    LoginService.prototype.authUser = function (body) {
        return this._http.post(this._urlLogin, body, this.requestOptions)
            .map(function (dados) { return dados.json(); });
    };
    LoginService.prototype.checkUser = function () {
        return this.userAuth;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstouChegandoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstouChegandoService = /** @class */ (function () {
    function EstouChegandoService(_http) {
        this._http = _http;
        this.nome = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EstouChegandoService.prototype.getUser = function () {
        return this._http.get("https://private-2ca7d-objetivoapp.apiary-mock.com/usuario")
            .map(function (data) { return data.json(); });
    };
    EstouChegandoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EstouChegandoService);
    return EstouChegandoService;
}());

//# sourceMappingURL=estou-chegando.service.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_atendimento_atendimento__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_financeiro_financeiro__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notas_notas__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_calendario_calendario__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_conteudo_online_conteudo_online__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, events, appService, statusBar, splashScreen, menuCtrl) {
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.appService = appService;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.habilitarMenu = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.currentPage = '';
        this.initializeApp();
        this.getActivePage();
        // used for an example of ngFor and navigation
        this.pages = [
            // { title: 'Atividades', component: AtividadesPage, icone: 'ico-atividades' },
            { title: 'Calendário', component: __WEBPACK_IMPORTED_MODULE_10__pages_calendario_calendario__["a" /* CalendarioPage */], icone: 'ico-calendario' },
            { title: 'Conteúdo Online', component: __WEBPACK_IMPORTED_MODULE_12__pages_conteudo_online_conteudo_online__["a" /* ConteudoOnlinePage */], icone: 'logoCO' },
            { title: 'Secretaria Online', component: __WEBPACK_IMPORTED_MODULE_8__pages_financeiro_financeiro__["a" /* FinanceiroPage */], icone: 'ico-financeiro' },
            { title: 'Nota(s) e Falta(s)', component: __WEBPACK_IMPORTED_MODULE_9__pages_notas_notas__["a" /* NotasPage */], icone: 'ico-notas' },
            // { title: 'Autorizações', component: AutorizacoesPage, icone: 'ico-autorizacoes' },
            { title: 'Atendimento', component: __WEBPACK_IMPORTED_MODULE_0__pages_atendimento_atendimento__["a" /* AtendimentoPage */], icone: 'ico-atendimento' },
        ];
        setTimeout(function () {
            _this.navCtrl = _this.nav;
            _this.nav.viewDidEnter.subscribe(function (view) {
                if (view.instance.constructor.name != "LoginPage")
                    _this.habilitarMenu = true;
                __WEBPACK_IMPORTED_MODULE_5_jquery__('navdown').find('ion-icon').removeClass('active');
                if (view.instance.constructor.name == "HomePage")
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('navdown').find('[name="ico-home"]').addClass('active');
                else if (view.instance.constructor.name == "NotasPage")
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('navdown').find('[name="ico-notas"]').addClass('active');
                else if (view.instance.constructor.name == "CalendarioPage")
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('navdown').find('[name="ico-calendario"]').addClass('active');
                else if (view.instance.constructor.name == "EstouChegandoPage")
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('navdown').find('[name="ico-chegando"]').addClass('active');
                else if (view.instance.constructor.name == "FinanceiroPage")
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('navdown').find('[name="ico-financeiro"]').addClass('active');
            });
        }, 0);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (this.appService.currentPage == __WEBPACK_IMPORTED_MODULE_10__pages_calendario_calendario__["a" /* CalendarioPage */]) {
            if (page.component == __WEBPACK_IMPORTED_MODULE_10__pages_calendario_calendario__["a" /* CalendarioPage */]) {
                return false;
            }
        }
        this.appService.currentPage = page.component;
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.getActivePage = function () {
        //console.log(this.nav.getActive().name);
    };
    MyApp.prototype.mudarRota = function () {
        // console.log(this.nav)
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__["a" /* UsuarioPage */]);
    };
    MyApp.prototype.menuClosed = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.navdown').removeClass('sair');
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.navdown').addClass('voltar');
    };
    MyApp.prototype.menuOpened = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.navdown').addClass('sair');
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.navdown').removeClass('voltar');
    };
    MyApp.prototype.goLogout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__["a" /* UsuarioPage */]);
    };
    MyApp.prototype.obterQuestaoSidebar = function (id) {
        this.menuCtrl.toggle('right');
        this.events.publish('trocarQuestaoEvent', id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/app/app.html"*/'<ion-menu [content]="content" type="push" (ionOpen)="menuOpened()" [swipeEnabled]="habilitarMenu" (ionClose)="menuClosed()" slide="left">\n  <ion-header class="">\n    <ion-toolbar style="padding: 0;">\n        <div  class="row header-menu">\n          <div class="col-12">\n            <a (click)="goUser()" menuToggle><ion-icon name="ico-config" class="ico-config"></ion-icon></a>\n            <a (click)="goLogout()" menuToggle class="circle-off"><i class="ico-off"></i></a>\n          </div>\n          <div class="col-12">\n            <div class="circle">\n                <img src="{{appService.base64Image}}" alt="bg-user">\n            </div>\n          </div>          \n          <div class="col-12 text-center">\n            <h3>{{appService.nome}}</h3>\n          </div>  \n        </div>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content no-bounce class="main-menu">\n      <ul class="menu-list">\n        <li menuClose  *ngFor="let p of pages" (click)="openPage(p)">\n          <i class="{{p.icone}}" *ngIf="p.icone != \'logoCO\'"></i>\n          <ion-icon *ngIf="p.icone == \'logoCO\'" class="icon-ionic" name="ico-{{p.icone}}" ></ion-icon>\n          {{p.title}}\n          <div class="caretMenu"><div class="caret-1"></div><div class="caret-2"></div></div>\n        </li>\n      </ul>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu class="menu-provas" [content]="content" side="right" menuId="menu2" *ngIf="appService.provas && appService.questoes" (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n  <ion-content>\n    <div class="row">\n      <img src="./assets/img/logo-provas.svg" style="width: 150px;margin: auto;">\n    </div>\n    <div class="col menutitle">\n      <h1>{{ appService.provaAtiva.rotulo }}</h1>\n    </div>\n    <div class="col menutitle">\n        <h2>Nota: {{ appService.provaAtiva.notaFinal }} / {{ appService.provaAtiva.notaMaxima }}</h2>\n      </div>\n    <ion-list>\n      <ion-item (click)="obterQuestaoSidebar(item.id)" *ngFor="let item of appService.questoes">\n        <ion-label>\n          <span class="circle-prova red"></span>\n          <b> {{ item.numero }}.ª</b>  {{ item.tipo == \'Alternativa\' ? \'objetiva\' : item.tipo.toLowerCase() }}\n        </ion-label>\n      </ion-item>   \n    </ion-list>   \n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<navdown *ngIf="!appService.provas && !appService.questoes && habilitarMenu" [navCtrl]="navCtrl"></navdown>\n\n<menu-prova *ngIf="appService.provas && appService.questoes && habilitarMenu" [navCtrl]="navCtrl"></menu-prova>\n\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/list/list.html"*/'<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_progress_circle_progress__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navdown_navdown__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collapse_color_collapse_color__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_colors_list_colors__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detalhes_detalhes__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conteudo_conteudo__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exercicios_exercicios__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jogos_jogos__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__text_apoio_text_apoio__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__texto_apoio_texto_apoio__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__videos_videos__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__title_page_provas_title_page_provas__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__alternative_bar_alternative_bar__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__alternativa_alternativa__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__alternativa_prova_alternativa_prova__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cabecalho_cabecalho__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dissertativa_dissertativa__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__enunciado_enunciado__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__resolucao_resolucao__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dissertativa_prova_dissertativa_prova__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sugestoes_sugestoes__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__menu_prova_menu_prova__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {RoundProgressModule, RoundProgressConfig, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__circle_progress_circle_progress__["a" /* CircleProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_2__navdown_navdown__["a" /* NavdownComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__collapse_color_collapse_color__["a" /* CollapseColorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__list_colors_list_colors__["a" /* ListColorsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__detalhes_detalhes__["a" /* DetalhesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__conteudo_conteudo__["a" /* ConteudoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__exercicios_exercicios__["a" /* ExerciciosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__jogos_jogos__["a" /* JogosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__text_apoio_text_apoio__["a" /* TextApoioComponent */],
                __WEBPACK_IMPORTED_MODULE_12__texto_apoio_texto_apoio__["a" /* TextoApoioComponent */],
                __WEBPACK_IMPORTED_MODULE_13__videos_videos__["a" /* VideosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__title_page_provas_title_page_provas__["a" /* TitlePageProvasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__alternative_bar_alternative_bar__["a" /* AlternativeBarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__alternativa_alternativa__["a" /* AlternativaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__alternativa_prova_alternativa_prova__["a" /* AlternativaProvaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__cabecalho_cabecalho__["a" /* CabecalhoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dissertativa_dissertativa__["a" /* DissertativaComponent */],
                __WEBPACK_IMPORTED_MODULE_20__enunciado_enunciado__["a" /* EnunciadoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__resolucao_resolucao__["a" /* ResolucaoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dissertativa_prova_dissertativa_prova__["a" /* DissertativaProvaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__sugestoes_sugestoes__["a" /* SugestoesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__menu_prova_menu_prova__["a" /* MenuProvaComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__circle_progress_circle_progress__["a" /* CircleProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_2__navdown_navdown__["a" /* NavdownComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__collapse_color_collapse_color__["a" /* CollapseColorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__list_colors_list_colors__["a" /* ListColorsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__detalhes_detalhes__["a" /* DetalhesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__conteudo_conteudo__["a" /* ConteudoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__exercicios_exercicios__["a" /* ExerciciosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__jogos_jogos__["a" /* JogosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__text_apoio_text_apoio__["a" /* TextApoioComponent */],
                __WEBPACK_IMPORTED_MODULE_12__texto_apoio_texto_apoio__["a" /* TextoApoioComponent */],
                __WEBPACK_IMPORTED_MODULE_13__videos_videos__["a" /* VideosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__title_page_provas_title_page_provas__["a" /* TitlePageProvasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__alternative_bar_alternative_bar__["a" /* AlternativeBarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__alternativa_alternativa__["a" /* AlternativaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__alternativa_prova_alternativa_prova__["a" /* AlternativaProvaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__cabecalho_cabecalho__["a" /* CabecalhoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dissertativa_dissertativa__["a" /* DissertativaComponent */],
                __WEBPACK_IMPORTED_MODULE_20__enunciado_enunciado__["a" /* EnunciadoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__resolucao_resolucao__["a" /* ResolucaoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dissertativa_prova_dissertativa_prova__["a" /* DissertativaProvaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__sugestoes_sugestoes__["a" /* SugestoesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__menu_prova_menu_prova__["a" /* MenuProvaComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CircleProgressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CircleProgressComponent = /** @class */ (function () {
    function CircleProgressComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CircleProgressComponent.prototype, "percent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "color", void 0);
    CircleProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'circle-progress',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/circle-progress/circle-progress.html"*/'<div class="row circle-father">\n    <div class="circle-progress" [attr.color]="color">\n        <div class="circle-progress__circle">\n          <div class="circle-progress__mask js-radial-mask">\n            <div class="circle-progress__fill js-radial-fill"></div>\n          </div>\n          <div class="circle-progress__mask">\n            <div class="circle-progress__fill js-radial-fill"></div>\n            <div class="circle-progress__fill js-radial-fix"></div>\n          </div>\n        </div>\n        <div class="circle-progress__inset">\n          <div class="circle-progress__percent js-radial-percent">\n              {{ percent }}\n          </div>\n        </div>\n      </div>\n  </div>\n  \n    <!-- pre-loader -->\n    <!-- <div class="lds-roller">\n        <div></div>\n            <div></div>\n                <div></div>\n                    <div></div>\n                        <div></div>\n                            <div></div>\n                                <div></div>\n    </div> -->\n    <!-- pre-loader -->\n  '/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/circle-progress/circle-progress.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CircleProgressComponent);
    return CircleProgressComponent;
}());

//# sourceMappingURL=circle-progress.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_notas_notas__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_estou_chegando_estou_chegando__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_calendario_calendario__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_financeiro_financeiro__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_conteudo_online_conteudo_online__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavdownComponent = /** @class */ (function () {
    function NavdownComponent(appService) {
        this.appService = appService;
        this.mudarRota = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentPage = '';
        // listMenu: any[] = [
        //   {link: 'atividades', ico: 'atividades', title: 'Atividades'},
        //   {link: 'calendario', ico: 'calendario', title: 'Calendário'},
        //   {link: 'financeiro', ico: 'financeiro', title: 'Financeiro'},
        //   {link: 'notas', ico: 'notas', title: 'Notas'},
        //   {link: 'estou-chegando', ico: 'chegando', title: 'Estou Chegando'},
        //   {link: 'autorizacoes', ico: 'autorizacoes', title: 'Autorizações'}
        // ];
        this.menuIcons = false;
        this.home = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.notas = __WEBPACK_IMPORTED_MODULE_3__pages_notas_notas__["a" /* NotasPage */];
        this.calendario = __WEBPACK_IMPORTED_MODULE_5__pages_calendario_calendario__["a" /* CalendarioPage */];
        this.chegando = __WEBPACK_IMPORTED_MODULE_4__pages_estou_chegando_estou_chegando__["a" /* EstouChegandoPage */];
        this.financeiro = __WEBPACK_IMPORTED_MODULE_6__pages_financeiro_financeiro__["a" /* FinanceiroPage */];
    }
    NavdownComponent.prototype.ngOnInit = function () {
    };
    NavdownComponent.prototype.redirecionar = function (nome) {
        // console.log(nome)
        if (nome == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */], null, { animate: false });
            this.appService.currentPage = nome;
        }
        else if (nome == 'notas') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_notas_notas__["a" /* NotasPage */], null, this.appService.navOptions);
            this.appService.currentPage = nome;
        }
        else if (nome == 'chegando') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_estou_chegando_estou_chegando__["a" /* EstouChegandoPage */], null, this.appService.navOptions);
            this.appService.currentPage = nome;
        }
        else if (nome == 'conteudo') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_conteudo_online_conteudo_online__["a" /* ConteudoOnlinePage */], null, this.appService.navOptions);
            this.appService.currentPage = nome;
        }
        else if (nome == 'calendario') {
            if (this.appService.currentPage == __WEBPACK_IMPORTED_MODULE_5__pages_calendario_calendario__["a" /* CalendarioPage */]) {
                return false;
            }
            this.appService.currentPage = __WEBPACK_IMPORTED_MODULE_5__pages_calendario_calendario__["a" /* CalendarioPage */];
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_calendario_calendario__["a" /* CalendarioPage */], null, this.appService.navOptions);
        }
        else if (nome == 'financeiro') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_financeiro_financeiro__["a" /* FinanceiroPage */], null, this.appService.navOptions);
            this.appService.currentPage = 'nome';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NavdownComponent.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavdownComponent.prototype, "mudarRota", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('atend'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], NavdownComponent.prototype, "atendimento", void 0);
    NavdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navdown',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/navdown/navdown.html"*/'\n\n<nav class="navdown fixed-bottom">\n    <div class="row icons">\n  \n      <a class="col">\n        <ion-icon name="ico-home" (click)="redirecionar(\'home\')" class="active"></ion-icon>\n      </a>\n  \n      <a class="col">\n          <ion-icon name="ico-notas" (click)="redirecionar(\'notas\')"></ion-icon>\n      </a>\n  \n      <a class="col">\n          <ion-icon name="ico-calendario" (click)="redirecionar(\'calendario\')"></ion-icon>\n      </a>\n  \n      <a class="col">\n          <ion-icon name="ico-logoCO" (click)="redirecionar(\'conteudo\')"></ion-icon>\n      </a>\n  \n      <a class="col" > \n          <ion-icon name="ico-financeiro" (click)="redirecionar(\'financeiro\')"></ion-icon>\n      </a>\n     \n    </div>\n        \n  </nav>\n \n  \n        \n        \n      \n      '/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/navdown/navdown.html"*/
            // template: `
            // <ion-tabs>
            //   <ion-tab [root]="home" tabIcon="ico-home"></ion-tab>
            //   <ion-tab [root]="notas" tabIcon="ico-notas"></ion-tab>
            //   <ion-tab [root]="calendario" tabIcon="ico-calendario"></ion-tab>
            //   <ion-tab [root]="chegando" tabIcon="ico-chegando"></ion-tab>
            //   <ion-tab [root]="financeiro" tabIcon="ico-financeiro"></ion-tab>
            // </ion-tabs>`
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* AppService */]])
    ], NavdownComponent);
    return NavdownComponent;
}());

//# sourceMappingURL=navdown.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseColorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CollapseColorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CollapseColorComponent = /** @class */ (function () {
    function CollapseColorComponent() {
        this.arrayCores = [
            { cor: 'red' },
            { cor: 'blue' },
            { cor: 'green' },
            { cor: 'orange' },
        ];
    }
    CollapseColorComponent.prototype.ngOnInit = function () {
    };
    CollapseColorComponent.prototype.changeCollor = function (index) {
        return this.arrayCores[index >= 4 ? index % 4 : index].cor;
    };
    CollapseColorComponent.prototype.openCollapse = function (event, id) { __WEBPACK_IMPORTED_MODULE_1_jquery__(".collapse#id" + id).toggleClass('show'); };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CollapseColorComponent.prototype, "listLi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapseColorComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CollapseColorComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CollapseColorComponent.prototype, "link", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapseColorComponent.prototype, "disciplina", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CollapseColorComponent.prototype, "diaEvento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapseColorComponent.prototype, "mesEvento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapseColorComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapseColorComponent.prototype, "casa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapseColorComponent.prototype, "mensagem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapseColorComponent.prototype, "professor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CollapseColorComponent.prototype, "nota", void 0);
    CollapseColorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'collapse-color',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/collapse-color/collapse-color.html"*/'<a class="row list-color {{ color }}"\n  *ngFor="let obj of listLi; let i = index"\n  [ngClass]="changeCollor(i)"\n \n  [attr.data-target]="\'#id\' + obj.id "\n  data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">  \n    <div class="col-12 header-collapse">\n        {{ obj?.disciplina }}\n    </div>\n    <div class="col-3 date">\n      <h4>{{ obj?.diaEvento }}</h4>\n      <h5>{{ obj?.mesEvento }}</h5>\n    </div>\n    <hr>\n    <div class="col-7 titles">\n      <h4 class="max-lines-1">{{ obj?.titulo }}</h4>\n      <h5 class="">{{ obj?.local.casa }}</h5>\n    </div> \n\n    <div class="collapse" [id]="\'id\' + obj?.id">\n      <div class="body-collapse">\n          <p>{{ obj?.descricao }}</p>\n          <p class="max-lines-1 no-margin"><b>Professor: </b>{{ obj?.detalhes.tutor }}</p>\n          <p><b>Valor: </b>{{ obj?.detalhes.notaMaxima }}</p>\n      </div>\n    </div>   \n\n</a>\n\n\n   '/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/collapse-color/collapse-color.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CollapseColorComponent);
    return CollapseColorComponent;
}());

//# sourceMappingURL=collapse-color.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListColorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_autorizacoes_autorizacoes_evento_autorizacoes_evento__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListColorsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ListColorsComponent = /** @class */ (function () {
    function ListColorsComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ListColorsComponent.prototype.ngOnInit = function () {
    };
    ListColorsComponent.prototype.goDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_autorizacoes_autorizacoes_evento_autorizacoes_evento__["a" /* AutorizacoesEventoPage */], { id: id }, { animate: false });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListColorsComponent.prototype, "authorizations", void 0);
    ListColorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list-colors',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/list-colors/list-colors.html"*/'<!-- Generated template for the ListColorsComponent component -->\n<ul style="list-style-type: none;padding: 0;">\n  <li\n  *ngFor="let obj of authorizations"\n  class="row list-color"\n  (click)="goDetails(obj.id)"\n  [class.green]="obj.notificacao.status == \'Autorizado\'"\n  [class.orange]="obj.notificacao.status == \'Pendente\'"\n  [class.red]="obj.notificacao.status == \'Negado\'"\n  >\n    <div class="col-3 date">\n      <h4>{{ obj?.notificacao.diaEvento }}</h4>\n      <h5>{{ obj?.notificacao.mesEvento }}</h5>\n    </div>\n    <hr>\n    <div class="col-7 titles">\n      <h4 class="max-lines-1">{{ obj?.notificacao.titulo }}</h4>\n      <h5>{{ obj?.notificacao.status }}</h5>\n    </div>      \n  </li>\n</ul>\n\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/list-colors/list-colors.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ListColorsComponent);
    return ListColorsComponent;
}());

//# sourceMappingURL=list-colors.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetalhesComponent = /** @class */ (function () {
    function DetalhesComponent(appService) {
        this.appService = appService;
        // console.log('Hello DetalhesComponent Component');  
    }
    DetalhesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'detalhes',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/detalhes/detalhes.html"*/'<title-page-prova  *ngIf="appService.provaAtiva" [color]="\'red\'" [title]="appService.provaAtiva.rotulo" [hideTrilha]="false"></title-page-prova>\n<cabecalho *ngIf="appService.questaoAtiva" [questaoAtiva]="appService.questaoAtiva"></cabecalho>\n<enunciado *ngIf="appService.questaoAtiva" [questaoAtiva]="appService.questaoAtiva"></enunciado>\n<div *ngIf="appService.provaAtiva && appService.questaoAtiva && appService.questaoAtiva.alternativas && appService.questaoAtiva.alternativas.length > 0" class="m_question_alternative">\n    <ul class="container-alternative">\n        <li *ngFor="let item of appService.questaoAtiva.alternativas; let indice = index"\n            [class]="indice == appService.indiceResposta ? appService.questaoAtiva.alternativas[indice].ehCorreta ? \'correct\' : \'incorrect\' : \'\'">           \n            <input disabled type="radio" name="selector">\n            <label [innerHTML]="item.descricao"></label>            \n            <div class="check">\n                <div class="inside"></div>\n            </div>\n        </li>       \n    </ul>\n</div>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/detalhes/detalhes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* AppService */]])
    ], DetalhesComponent);
    return DetalhesComponent;
}());

//# sourceMappingURL=detalhes.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConteudoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ConteudoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ConteudoComponent = /** @class */ (function () {
    function ConteudoComponent() {
        console.log('Hello ConteudoComponent Component');
        this.text = 'Hello World';
    }
    ConteudoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'conteudo',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/conteudo/conteudo.html"*/'<title-page-prova \n    *ngIf="titulo" \n    [color]="\'blue\'" \n    [title]="titulo" \n    [valores]="appService.conteudo" \n    [hideTrilha]="mostrar"\n    (clickEvento)="obterConteudo($event)"></title-page-prova>\n\n<div [innerHTML]="conteudo" style="width: 95%;"></div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/conteudo/conteudo.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ConteudoComponent);
    return ConteudoComponent;
}());

//# sourceMappingURL=conteudo.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciciosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ExerciciosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExerciciosComponent = /** @class */ (function () {
    function ExerciciosComponent() {
        console.log('Hello ExerciciosComponent Component');
        this.text = 'Hello World';
    }
    ExerciciosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exercicios',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/exercicios/exercicios.html"*/'<title-page-prova \n[color]="\'yellow\'" \n[title]="titulo" \n[valores]="appService.exercicios" \n[hideTrilha]="mostrar"\n(clickEvento)="obterExercicios($event)"></title-page-prova>\n\n<div *ngIf="exercicio">\n    <cabecalho  [questaoAtiva]="exercicio"></cabecalho> \n    <br>\n    \n    <enunciado  [questaoAtiva]="exercicio"></enunciado>\n    <alternativa [ultimo]="ultimo" [idCorreta]="idCorreta" [questaoAtiva]="exercicio" *ngIf="exercicio.alternativas.length > 0"></alternativa>\n    <dissertativa [ultimo]="ultimo" [questaoAtiva]="exercicio" *ngIf="exercicio.alternativas.length == 0"></dissertativa>\n</div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/exercicios/exercicios.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExerciciosComponent);
    return ExerciciosComponent;
}());

//# sourceMappingURL=exercicios.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the JogosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var JogosComponent = /** @class */ (function () {
    function JogosComponent() {
        console.log('Hello JogosComponent Component');
        this.text = 'Hello World';
    }
    JogosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jogos',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/jogos/jogos.html"*/'<title-page-prova \n    *ngIf="appService.provaAtiva"\n    [color]="\'violet\'" \n    [title]="titulo" \n    [hideTrilha]="false">\n    </title-page-prova>\n<div [innerHTML]="jogo"></div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/jogos/jogos.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], JogosComponent);
    return JogosComponent;
}());

//# sourceMappingURL=jogos.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextApoioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TextApoioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TextApoioComponent = /** @class */ (function () {
    function TextApoioComponent() {
        console.log('Hello TextApoioComponent Component');
        this.text = 'Hello World';
    }
    TextApoioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'text-apoio',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/text-apoio/text-apoio.html"*/'<!-- Generated template for the TextApoioComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/text-apoio/text-apoio.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TextApoioComponent);
    return TextApoioComponent;
}());

//# sourceMappingURL=text-apoio.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextoApoioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TextoApoioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TextoApoioComponent = /** @class */ (function () {
    function TextoApoioComponent() {
        console.log('Hello TextoApoioComponent Component');
        this.text = 'Hello World';
    }
    TextoApoioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'texto-apoio',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/texto-apoio/texto-apoio.html"*/'<title-page-prova [color]="\'pink\'" [title]="\'Texto de apoio\'" [hideTrilha]="false"></title-page-prova>\n<div class="m_question_alternative">\n    <div class="panel panel-default">\n       <div class="panel-heading"></div>\n       <article class="pattern pattern-colors">\n          <div readonly="" [innerHTML]="appService.questaoAtiva.textoApoio"></div>\n       </article>\n    </div>\n </div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/texto-apoio/texto-apoio.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TextoApoioComponent);
    return TextoApoioComponent;
}());

//# sourceMappingURL=texto-apoio.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the VideosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
        console.log('Hello VideosComponent Component');
        this.text = 'Hello World';
    }
    VideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'videos',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/videos/videos.html"*/'<title-page-prova \n  [color]="\'green\'" \n  [title]="titulo" \n  [valores]="appService.videos" \n  [hideTrilha]="mostrar"\n  (clickEvento)="obterVideo($event)"></title-page-prova>\n\n<iframe *ngIf="url" [src]="url" width="96%" height="500"></iframe>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/videos/videos.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlePageProvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TitlePageProvasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TitlePageProvasComponent = /** @class */ (function () {
    function TitlePageProvasComponent() {
        this.hideTrilha = true;
        this.clickEvento = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TitlePageProvasComponent.prototype.obter = function (item, event) {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.ativo').removeClass('ativo');
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.target).addClass('ativo');
        this.clickEvento.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TitlePageProvasComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TitlePageProvasComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TitlePageProvasComponent.prototype, "hideTrilha", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TitlePageProvasComponent.prototype, "valores", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TitlePageProvasComponent.prototype, "clickEvento", void 0);
    TitlePageProvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'title-page-prova',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/title-page-provas/title-page-provas.html"*/'<div class="default">\n    <div class="col title-prova">\n        <h2 [innerHTML]="title"></h2>\n        \n    </div>\n  \n  <div class="row" *ngIf="hideTrilha">\n    <ul class="number-title">\n      <li *ngFor="let item of valores; let i = index" [class]="i == 0 ? \'ativo\' : \'\'" (click)="obter(item, $event)">{{ i + 1 }}</li>\n    </ul>\n  </div>\n</div>\n\n  \n  '/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/title-page-provas/title-page-provas.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TitlePageProvasComponent);
    return TitlePageProvasComponent;
}());

//# sourceMappingURL=title-page-provas.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativeBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_provas_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_questoes_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlternativeBarComponent = /** @class */ (function () {
    function AlternativeBarComponent(_provasService, _questoesService, _appService, navParams, events) {
        var _this = this;
        this._provasService = _provasService;
        this._questoesService = _questoesService;
        this._appService = _appService;
        this.navParams = navParams;
        this.events = events;
        this.questoes = [];
        this.numeroDaQuestao = 1;
        this.trocaQuestao = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.events.subscribe('trocarQuestaoEvent', function (data) {
            _this.obterQuestao(data);
        });
        this.id = this.navParams.get('id');
        //this._router.firstChild.paramMap.subscribe(( params: ParamMap ) : void => { this.id = params.get( "id" ); });
        this._questoesService.listarQuestoesAlternativas(this.id).then(function (data) {
            _this.questoes = _this.questoes.concat(data);
            _this._questoesService.listarQuestoesDiscursivas(_this.id).then(function (data) {
                _this.questoes = _this.questoes.concat(data);
                _this.tratarQuestoes();
            }, function () {
                _this.tratarQuestoes();
            });
        }, function () {
            _this._questoesService.listarQuestoesDiscursivas(_this.id).then(function (data) {
                _this.questoes = _this.questoes.concat(data);
                _this.tratarQuestoes();
            }, function () {
                _this.tratarQuestoes();
            });
        });
    }
    AlternativeBarComponent.prototype.buscarPercentual = function (item) {
        // console.log(item)
        var percentual = this.prova.gabaritos.find(function (x) { return x.numero == item.numero && x.tipo == item.tipo; }).percentual;
        return percentual;
    };
    AlternativeBarComponent.prototype.obterQuestao = function (id) {
        // console.log(id)
        var questao = this.questoes.find(function (x) { return x.id == id; });
        this.numeroDaQuestao = this.questoes.findIndex(function (x) { return x.id == id; }) + 1;
        document.querySelectorAll('nav li.active')[0]
            ? document.querySelectorAll('nav li.active')[0].className = ''
            : '';
        document.getElementById(questao.id)
            ? document.getElementById(questao.id).className = 'active'
            : '';
        this._appService.classeCheckApoio = '';
        this._appService.classeCheckConteudo = '';
        this._appService.classeCheckExercicios = '';
        this._appService.classeCheckResolucao = '';
        this._appService.classeCheckVideos = '';
        this._appService.classeCheckJogos = '';
        this.trocaQuestao.emit(questao);
        //this._route.navigate(['prova/detalhes/', this.prova.id])    
    };
    AlternativeBarComponent.prototype.tratarQuestoes = function () {
        this.questoes.sort(function (a, b) { return a.numero > b.numero ? 1 : -1; });
        this.questoes.sort(function (a, b) { return a.tipo > b.tipo ? 1 : -1; });
        this.questoes.reverse();
        if (navigator.userAgent.indexOf("Firefox") > -1) {
            // this.questoes.sort((a, b) => a.numero > b.numero ? 1 : -1);
            this.questoes.sort(function (a, b) { return a.tipo > b.tipo ? 1 : -1; });
            this.questoes.reverse();
        }
        console.log(this.questoes);
        this._appService.questoes = this.questoes;
        this.obterQuestao(this.questoes[0].id);
    };
    AlternativeBarComponent.prototype.ngOnInit = function () {
        // $('.m_nav_proff, .btn-alternative').click(function(){
        //   if ($('.open').length <= 0){
        //     $( ".openMenu-provas" ).trigger('click');
        //   }      
        //   $('.m_nav_proff').toggleClass('openAlternative');
        // });  
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlternativeBarComponent.prototype, "prova", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AlternativeBarComponent.prototype, "trocaQuestao", void 0);
    AlternativeBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alternative-bar',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/alternative-bar/alternative-bar.html"*/'\n\n<nav class="m_nav_proff">\n  <div class="a_nav_proff--head">\n      <h1><b>Questão</b></h1>\n      <!-- <svg class="a_svg_head" height="100" width="250">\n          <line class="line_first" x1="0" y1="50" x2="200" y2="50"></line>\n          <line class="line_second" x1="0" y1="50" x2="200" y2="50"></line>\n      </svg> -->\n      <h2 tpl-ref="quantidade">{{ numeroDaQuestao }}/{{ questoes ? questoes.length : 10}}</h2>\n\n  </div>\n\n  <ul *ngIf="questoes" class="nav nav-sidebar right-float">\n      <li  *ngFor="let item of questoes; let i = index" id="{{ item.id }}" [class]="i == 0 ? \'active\' : \'\' ">\n          <svg class="a_svg_question" height="80" width="40">\n              <line *ngIf="i+1 == questoes.length" x1="10" y1="0" x2="10" y2="40"></line>\n              <line *ngIf="i+1 != questoes.length" x1="10" y1="0" x2="10" y2="80"></line>\n              <svg *ngIf="buscarPercentual(item) == 0" x="0px" y="27" width="100" height="100">\n                  <g>\n                      <path class="st0" d="M12.5,0C5.6,0,0,5.6,0,12.5C0,19.4,5.6,25,12.5,25C19.4,25,25,19.4,25,12.5C25,5.6,19.4,0,12.5,0z"></path>\n                      <path class="st2" d="M12,11.9V1.7C6.5,1.9,2,6.3,1.7,11.9H12z"></path>\n                      <path class="st2" d="M1.7,12.8C1.8,18.5,6.3,23.1,12,23.3V12.8H1.7z"></path>\n                      <path class="st2" d="M13,12.8v10.5c5.7-0.2,10.2-4.8,10.4-10.5H13z"></path>\n                      <path class="st2" d="M23.3,11.9C23,6.3,18.5,1.9,13,1.7v10.2H23.3z"></path>\n                  </g>\n              </svg>\n              <svg *ngIf="buscarPercentual(item) == 1" x="0px" y="27" width="100" height="100">\n                  <g>\n                      <path class="st0" d="M12.5,0C5.6,0,0,5.6,0,12.5C0,19.4,5.6,25,12.5,25C19.4,25,25,19.4,25,12.5C25,5.6,19.4,0,12.5,0z"></path>\n                      <path class="st1" d="M12,11.9V1.7C6.5,1.9,2,6.3,1.7,11.9H12z"></path>\n                      <path class="st1" d="M1.7,12.8C1.8,18.5,6.3,23.1,12,23.3V12.8H1.7z"></path>\n                      <path class="st1" d="M13,12.8v10.5c5.7-0.2,10.2-4.8,10.4-10.5H13z"></path>\n                      <path class="st1" d="M23.3,11.9C23,6.3,18.5,1.9,13,1.7v10.2H23.3z"></path>\n                  </g>\n              </svg>\n              <svg *ngIf="buscarPercentual(item) == 0.5" x="0px" y="27" width="100" height="100">\n                  <g>\n                      <path class="st0" d="M12.5,0C5.6,0,0,5.6,0,12.5C0,19.4,5.6,25,12.5,25C19.4,25,25,19.4,25,12.5C25,5.6,19.4,0,12.5,0z"></path>\n                      <path class="st2" d="M12,11.9V1.7C6.5,1.9,2,6.3,1.7,11.9H12z"></path>\n                      <path class="st2" d="M1.7,12.8C1.8,18.5,6.3,23.1,12,23.3V12.8H1.7z"></path>\n                      <path class="st1" d="M13,12.8v10.5c5.7-0.2,10.2-4.8,10.4-10.5H13z"></path>\n                      <path class="st1" d="M23.3,11.9C23,6.3,18.5,1.9,13,1.7v10.2H23.3z"></path>\n                  </g>\n              </svg>\n              <svg *ngIf="buscarPercentual(item) == 0.25" x="0px" y="27" width="100" height="100">\n                  <g>\n                      <path class="st0" d="M12.5,0C5.6,0,0,5.6,0,12.5C0,19.4,5.6,25,12.5,25C19.4,25,25,19.4,25,12.5C25,5.6,19.4,0,12.5,0z"></path>\n                      <path class="st2" d="M12,11.9V1.7C6.5,1.9,2,6.3,1.7,11.9H12z"></path>\n                      <path class="st2" d="M1.7,12.8C1.8,18.5,6.3,23.1,12,23.3V12.8H1.7z"></path>\n                      <path class="st2" d="M13,12.8v10.5c5.7-0.2,10.2-4.8,10.4-10.5H13z"></path>\n                      <path class="st1" d="M23.3,11.9C23,6.3,18.5,1.9,13,1.7v10.2H23.3z"></path>\n                  </g>\n              </svg>\n              <svg *ngIf="buscarPercentual(item) == 0.75" x="0px" y="27" width="100" height="100">\n                  <g>\n                      <path class="st0" d="M12.5,0C5.6,0,0,5.6,0,12.5C0,19.4,5.6,25,12.5,25C19.4,25,25,19.4,25,12.5C25,5.6,19.4,0,12.5,0z"></path>\n                      <path class="st2" d="M12,11.9V1.7C6.5,1.9,2,6.3,1.7,11.9H12z"></path>\n                      <path class="st1" d="M1.7,12.8C1.8,18.5,6.3,23.1,12,23.3V12.8H1.7z"></path>\n                      <path class="st1" d="M13,12.8v10.5c5.7-0.2,10.2-4.8,10.4-10.5H13z"></path>\n                      <path class="st1" d="M23.3,11.9C23,6.3,18.5,1.9,13,1.7v10.2H23.3z"></path>\n                  </g>\n              </svg> \n              <line x1="25" y1="40" x2="40" y2="40"></line>\n          </svg>\n          <a (click)="obterQuestao(item.id)" href="javascript:void(0)">\n              <span>\n                  <b> {{ item.numero }}.ª</b>  {{ item.tipo == \'Alternativa\' ? \'objetiva\' : item.tipo.toLowerCase() }}\n              </span>\n              <p></p>\n          </a>\n      </li>        \n  </ul>\n\n</nav>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/alternative-bar/alternative-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_provas_service__["a" /* ProvaService */],
            __WEBPACK_IMPORTED_MODULE_2__services_questoes_service__["a" /* QuestoesService */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */]])
    ], AlternativeBarComponent);
    return AlternativeBarComponent;
}());

//# sourceMappingURL=alternative-bar.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AlternativaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AlternativaComponent = /** @class */ (function () {
    function AlternativaComponent(appService) {
        this.appService = appService;
        this._elemento = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".m_question_alternative");
        this.idCorreta = '';
        this.avancar = false;
        // this.toastr.setRootViewContainerRef(vcr); 
    }
    Object.defineProperty(AlternativaComponent.prototype, "ultimo", {
        get: function () {
            return this._ultimo;
        },
        set: function (value) {
            console.log(value);
            this._ultimo = value;
        },
        enumerable: true,
        configurable: true
    });
    AlternativaComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.number-title').on('click', function () {
            _this.avancar = false;
        });
        this.avancar = false;
    };
    AlternativaComponent.prototype.avancarClick = function () {
        if (!this.ultimo) {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.ativo').next().trigger('click');
            this.avancar = false;
        }
    };
    AlternativaComponent.prototype.pular = function () {
        if (!this.ultimo)
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.ativo').next().trigger('click');
        // else    
        // this.toastr.warning("Não é possível pular a última questão!");    
    };
    AlternativaComponent.prototype.confirmar = function () {
        this._elemento = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".m_question_alternative");
        if (!__WEBPACK_IMPORTED_MODULE_1_jquery___default()('.container-alternative').find("input").is(":checked")) {
            //this.toastr.warning("Selecione alguma das alternativas para confirmar a questão!");
            return;
        }
        if (this._elemento.find("input:checked").attr("id") == this.idCorreta.toString()) {
            this._elemento.find("input:checked").parent('li').addClass("correct");
            // this.toastr.success("Parabéns, alternativa correta!!! ");
            this._elemento.find("input:checked").attr('disabled', 'disabled');
            if (this.ultimo && this._elemento.find("input:checked").attr("id") == this.idCorreta.toString())
                __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#confirma').css('display', 'none');
            // Esconde  os outros e mostra o avancar se houver mais questões;
            var numero = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".a_nav_botton--item.active").attr("numero");
            if (!this.ultimo)
                this.avancar = true;
        }
        else {
            this._elemento = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".m_question_alternative");
            this._elemento.find("input:checked").parent('li').addClass("incorrect");
            this._elemento.find("input:checked").attr('disabled', 'disabled');
            this._elemento.parent("label").addClass('disabled');
            // this.toastr.error("Não foi desta vez. Tente novamente! ");                              
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlternativaComponent.prototype, "questaoAtiva", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlternativaComponent.prototype, "idCorreta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ultimo'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AlternativaComponent.prototype, "ultimo", null);
    AlternativaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alternativa',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/alternativa/alternativa.html"*/'<div *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" class="btn-sugestaao text-center" data-toggle="modal" data-target="#exampleModal">\n  <i class="fas fa-comment"></i>\n  <i class="fas fa-exclamation"></i><br>\n\n   <span>Sugestões</span>\n</div>\n\n<div class="m_question_alternative" style="margin-top: 20px;">\n  <ul class="container-alternative">\n     <li *ngFor="let item of questaoAtiva.alternativas">\n        <!-- <input type="radio" *ngIf="item.texto || item.textoImg" [id]="item.id" name="selector"> -->\n        <label *ngIf="item.texto" [for]="item.id" [innerHTML]="item.texto">\n          \n          </label>\n          <label *ngIf="item.textoImg" [for]="item.id" >\n              <img [src]="appService.urlImagemTarefaNet + item.textoImg.toString().replace(\'~/\',\'\')">\n          </label>            \n        <div *ngIf="item.texto || item.textoImg" class="check">\n           <div class="inside"></div>\n        </div>\n     </li>       \n  </ul>\n  <div *ngIf="!avancar" class="btn-group group-btn-prova">\n      <button type="button" (click)="pular()" id="pular" class="btn btn-pular">Pular</button>\n      <button type="button" (click)="confirmar()" id="confirma" class="btn btn-confirma">Confirmar</button>\n  </div>\n  <div *ngIf="avancar" class="btn-group group-btn-prova">\n      <button type="button" id="avancar" (click)="avancarClick()" class="btn btn-avanca">Avançar</button>        \n  </div>\n</div>\n\n\n\n<sugestoes *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" [questaoAtiva]="questaoAtiva"></sugestoes>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/alternativa/alternativa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */]])
    ], AlternativaComponent);
    return AlternativaComponent;
}());

//# sourceMappingURL=alternativa.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativaProvaComponent; });
/* unused harmony export EIndiceResposta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlternativaProvaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AlternativaProvaComponent = /** @class */ (function () {
    function AlternativaProvaComponent(_appService) {
        this._appService = _appService;
    }
    AlternativaProvaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resposta = this._appService.provaAtiva.gabaritos.find(function (x) { return x.numero == _this.questaoAtiva.numero && x.tipo == _this.questaoAtiva.tipo; }).resposta.toLowerCase();
        this.indiceResposta = EIndiceResposta[resposta];
    };
    AlternativaProvaComponent.prototype.devolverDescricao = function (index, valor) {
        return EIndiceResposta[index] + ' - ' + valor.replace(/<p>/, '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlternativaProvaComponent.prototype, "questaoAtiva", void 0);
    AlternativaProvaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alternativa-prova',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/alternativa-prova/alternativa-prova.html"*/'<div class="m_question_alternative" style="width: 95%;">  \n  <ul class="container-alternative">\n     <li *ngFor="let item of questaoAtiva.alternativas; let indice = index" [class]="questaoAtiva.alternativas[indice].ehCorreta ? \'correct\' : indice == indiceResposta ? \'incorrect\' : \'\'">\n        \n        <label [innerHTML]="item.descricao"></label>          \n        <div class="check">\n           <div class="inside"></div>\n        </div>\n     </li>       \n  </ul>\n</div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/alternativa-prova/alternativa-prova.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* AppService */]])
    ], AlternativaProvaComponent);
    return AlternativaProvaComponent;
}());

var EIndiceResposta;
(function (EIndiceResposta) {
    EIndiceResposta[EIndiceResposta["a"] = 0] = "a";
    EIndiceResposta[EIndiceResposta["b"] = 1] = "b";
    EIndiceResposta[EIndiceResposta["c"] = 2] = "c";
    EIndiceResposta[EIndiceResposta["d"] = 3] = "d";
    EIndiceResposta[EIndiceResposta["e"] = 4] = "e";
    EIndiceResposta[EIndiceResposta["f"] = 5] = "f";
    EIndiceResposta[EIndiceResposta["g"] = 6] = "g";
    EIndiceResposta[EIndiceResposta["h"] = 7] = "h";
})(EIndiceResposta || (EIndiceResposta = {}));
//# sourceMappingURL=alternativa-prova.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabecalhoComponent; });
/* unused harmony export EPeso */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CabecalhoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CabecalhoComponent = /** @class */ (function () {
    function CabecalhoComponent() {
        this.numero = 1;
        this.dificuldade = '';
        this.tipo = '';
        this.instituto = 'Objetivo';
    }
    Object.defineProperty(CabecalhoComponent.prototype, "questaoAtiva", {
        set: function (questao) {
            this.numero = questao.numero;
            this.dificuldade = EPeso[questao.dificuldade];
            this.tipo = questao.tipo == 'Alternativa' ? 'Questão objetiva' : 'Questão ' + questao.tipo;
        },
        enumerable: true,
        configurable: true
    });
    CabecalhoComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CabecalhoComponent.prototype, "questaoAtiva", null);
    CabecalhoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cabecalho',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/cabecalho/cabecalho.html"*/'<div class="m_question_head">\n  <div *ngIf="numero">\n     <h1 class="left_number">{{ numero }}<span>.</span>ª</h1>\n     <!-- <h1 class="left_question text-repair">{{ tipo }}</h1> -->\n     <!-- <hr> -->\n     <!-- <p *ngIf="instituto">{{ instituto }}</p> -->\n     <!-- <p *ngIf="dificuldade" class="hard">Peso:<span> {{ dificuldade }}</span></p> -->\n  </div>\n</div>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/cabecalho/cabecalho.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CabecalhoComponent);
    return CabecalhoComponent;
}());

var EPeso;
(function (EPeso) {
    EPeso["Facil"] = "F\u00E1cil";
    EPeso["Medio"] = "M\u00E9dio";
    EPeso["Dificil"] = "Dif\u00EDcil";
})(EPeso || (EPeso = {}));
//# sourceMappingURL=cabecalho.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DissertativaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DissertativaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DissertativaComponent = /** @class */ (function () {
    function DissertativaComponent(appService) {
        this.appService = appService;
        this.avancar = false;
    }
    DissertativaComponent.prototype.ngOnInit = function () { };
    DissertativaComponent.prototype.avancarClick = function () {
        if (!this.ultimo) {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.ativo').next().trigger('click');
            this.avancar = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DissertativaComponent.prototype, "questaoAtiva", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DissertativaComponent.prototype, "ultimo", void 0);
    DissertativaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dissertativa',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/dissertativa/dissertativa.html"*/'<div *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" class="btn-sugestaao text-center" data-toggle="modal" data-target="#exampleModal">\n  <i class="fas fa-comment"></i>\n  <i class="fas fa-exclamation"></i><br>\n\n   <span>Sugestões</span>\n</div>\n\n<a class="btn btn-resposta" data-toggle="collapse" href="#collapseResposta" role="button" aria-expanded="false" aria-controls="collapseResposta">\nResposta\n</a>\n\n<div *ngIf="!ultimo" class="btn-group group-btn-prova">\n  <button type="button" id="avancar" (click)="avancarClick()" class="btn btn-avanca">Avançar</button>        \n</div>\n\n\n<div class="collapse" id="collapseResposta">\n<div  class="card card-body"> \n    <div *ngIf="questaoAtiva.resposta" [innerHTML]="questaoAtiva.resposta"></div>   \n    <div *ngIf="questaoAtiva.respostaImg">\n        <img  [src]="appService.urlImagemTarefaNet + questaoAtiva.respostaImg.toString().replace(\'~/\',\'\')">\n    </div>\n</div>  \n\n</div>\n\n\n<sugestoes *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" [questaoAtiva]="questaoAtiva"></sugestoes>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/dissertativa/dissertativa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */]])
    ], DissertativaComponent);
    return DissertativaComponent;
}());

//# sourceMappingURL=dissertativa.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnunciadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EnunciadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EnunciadoComponent = /** @class */ (function () {
    function EnunciadoComponent(appService) {
        this.appService = appService;
    }
    Object.defineProperty(EnunciadoComponent.prototype, "questaoAtiva", {
        set: function (questao) {
            this.imagem = questao.imagem ? questao.imagem : '';
            this.enunciadoImg = questao.enunciadoImg ? questao.enunciadoImg : '';
            this.enunciado = questao.enunciado;
        },
        enumerable: true,
        configurable: true
    });
    EnunciadoComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EnunciadoComponent.prototype, "questaoAtiva", null);
    EnunciadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'enunciado',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/enunciado/enunciado.html"*/'<div class="question_content">\n  <div [innerHTML]="enunciado"></div>   \n  <div *ngIf="enunciadoImg">\n    <img [src]="appService.urlImagemTarefaNet + enunciadoImg.toString().replace(\'~/\',\'\')">\n  </div>\n  <div *ngIf="imagem">\n    <img [src]="imagem">\n  </div>\n</div>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/enunciado/enunciado.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* AppService */]])
    ], EnunciadoComponent);
    return EnunciadoComponent;
}());

//# sourceMappingURL=enunciado.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolucaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ResolucaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ResolucaoComponent = /** @class */ (function () {
    function ResolucaoComponent() {
        console.log('Hello ResolucaoComponent Component');
        this.text = 'Hello World';
    }
    ResolucaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'resolucao',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/resolucao/resolucao.html"*/'<title-page-prova *ngIf="appService.questaoAtiva" [color]="\'orange\'" [title]="appService.questaoAtiva.tipo == \'Discursiva\' ? \'Resolução\' : \'Gabarito\'" [hideTrilha]="false"></title-page-prova>\n<div *ngIf="appService.questaoAtiva">\n    <alternativa-prova  [questaoAtiva]="appService.questaoAtiva" *ngIf="appService.questaoAtiva && appService.questaoAtiva.tipo != \'Discursiva\'"></alternativa-prova>\n    <dissertativa-prova [questaoAtiva]="appService.questaoAtiva" *ngIf="appService.questaoAtiva && appService.questaoAtiva.tipo == \'Discursiva\'"></dissertativa-prova>\n</div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/resolucao/resolucao.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ResolucaoComponent);
    return ResolucaoComponent;
}());

//# sourceMappingURL=resolucao.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DissertativaProvaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DissertativaProvaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DissertativaProvaComponent = /** @class */ (function () {
    function DissertativaProvaComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    DissertativaProvaComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DissertativaProvaComponent.prototype, "questaoAtiva", void 0);
    DissertativaProvaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dissertativa-prova',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/dissertativa-prova/dissertativa-prova.html"*/'<div style="width: 95%;" [innerHTML]="sanitizer.bypassSecurityTrustHtml(questaoAtiva.resposta)"></div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/dissertativa-prova/dissertativa-prova.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], DissertativaProvaComponent);
    return DissertativaProvaComponent;
}());

//# sourceMappingURL=dissertativa-prova.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SugestoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SugestoesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SugestoesComponent = /** @class */ (function () {
    function SugestoesComponent(appService) {
        this.appService = appService;
        this.sugestaoAtiva = '';
        this.imgSugestaoAtiva = '';
    }
    SugestoesComponent.prototype.ngOnInit = function () {
        this.sugestaoAtiva = this.questaoAtiva.sugestoes[0].texto;
        this.imgSugestaoAtiva = this.questaoAtiva.sugestoes[0].textoImg;
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('#exampleModal').on('show.bs.modal', function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.number-title-sugestoes > .ativo').trigger('click');
        });
    };
    SugestoesComponent.prototype.obter = function (item, event) {
        this.sugestaoAtiva = item.texto;
        this.imgSugestaoAtiva = this.appService.urlImagemTarefaNet + item.textoImg.toString().replace('~/', '');
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.number-title-sugestoes > .ativo').removeClass('ativo');
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()(event.target).addClass('ativo');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SugestoesComponent.prototype, "questaoAtiva", void 0);
    SugestoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sugestoes',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/sugestoes/sugestoes.html"*/'\n    \n<!-- Modal -->\n<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n      <div class="modal-content">\n          <div class="modal-header">\n              <h5 class="modal-title" id="exampleModalLabel">Sugestões</h5>\n              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n              </button>\n          </div>\n          <div class="yellow">\n              <ul *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" class="number-title-sugestoes">\n                  <li *ngFor="let item of questaoAtiva.sugestoes; let i = index" \n                      [class]="i == 0 ? \'ativo\' : \'\'" \n                      (click)="obter(item, $event)">{{ i + 1 }}</li>           \n              </ul>\n          </div>\n          <div *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" [innerHTML]="sugestaoAtiva" class="modal-body">\n          \n          </div>\n          <div>\n              <img *ngIf="imgSugestaoAtiva" [src]="imgSugestaoAtiva">\n          </div>\n          <!-- <div class="modal-footer">\n              <button type="button" data-dismiss="modal" aria-label="Close" class="btn btn-close">Sair</button>\n          </div> -->\n      </div>\n  </div>\n</div>\n\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/sugestoes/sugestoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* AppService */]])
    ], SugestoesComponent);
    return SugestoesComponent;
}());

//# sourceMappingURL=sugestoes.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorizacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autorizacoes_service__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AutorizacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AutorizacoesPage = /** @class */ (function () {
    function AutorizacoesPage(navCtrl, navParams, _autorizacoesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._autorizacoesService = _autorizacoesService;
        this.loaderContent = true;
    }
    AutorizacoesPage.prototype.ionViewDidLoad = function () { };
    AutorizacoesPage.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".seletor").css('display', 'none');
        this._autorizacoesService.getAuthorizations()
            .subscribe(function (data) {
            _this.loaderContent = false;
            _this.arrAuthorizations = data;
            console.log('autorizacoes ', _this.arrAuthorizations);
            localStorage.setItem('autorizacoes', JSON.stringify(data));
            setTimeout(function () {
                var animateTime = 0;
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.row' + '.list-color').each(function (i, obj) {
                    animateTime += 0.1;
                    __WEBPACK_IMPORTED_MODULE_3_gsap__["c" /* TweenMax */].fromTo(__WEBPACK_IMPORTED_MODULE_2_jquery__(obj), 0.3, {
                        alpha: 0
                    }, {
                        alpha: 1,
                        delay: animateTime,
                        ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["a" /* Power0 */].easeInOut
                    });
                });
            }, 0); // end setTimeout       
        }); //end subscribe 
    }; // end OnInit
    AutorizacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-autorizacoes',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/autorizacoes/autorizacoes.html"*/'             \n<header-obj [navCtrl]="navCtrl"></header-obj>\n<ion-content padding no-bounce >\n  <div class="box-top-app">\n    <div class="title-ico">\n        <i class="ico-autorizacoes"></i>\n        <h2>Autorizações</h2>\n      </div>     \n      <content-loader *ngIf="loaderContent"></content-loader>\n      <list-colors [authorizations]="arrAuthorizations"></list-colors>\n  </div> \n</ion-content>\n\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/autorizacoes/autorizacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__autorizacoes_service__["a" /* AutorizacoesService */]])
    ], AutorizacoesPage);
    return AutorizacoesPage;
}()); // end class

//# sourceMappingURL=autorizacoes.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, field) {
        array.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array.reverse();
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "sort"
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendario_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CalendarioEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CalendarioEventosPage = /** @class */ (function () {
    // listEvents = [
    //   {diaEvento: '03', mesEvento: 'Janeiro', mesEvento: 'Janeiro', color: 'blue', titulo: 'Reunião dos País', subtitulo: 'às 14h00min'},
    //   {diaEvento: '08', mesEvento: 'Janeiro', mesEvento: 'Janeiro', color: 'orange', titulo: 'Feriado nome dele', subtitulo: 'Nesse dia não haverá aula'},
    //   {diaEvento: '20', mesEvento: 'Janeiro', mesEvento: 'Janeiro', color: 'red', titulo: 'Prova de matemática', subtitulo: 'às 14h00min'},
    //   {diaEvento: '23', mesEvento: 'Janeiro', mesEvento: 'Janeiro', color: 'green', titulo: 'Início férias escolares', subtitulo: ''},
    // ];
    function CalendarioEventosPage(navCtrl, calendarioService, navParams) {
        this.navCtrl = navCtrl;
        this.calendarioService = calendarioService;
        this.navParams = navParams;
        this.monthsInPt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        this.currentMonth = '';
        this.listEventsSelectedMonth = [];
        // console.log(this.listEvents)
    }
    CalendarioEventosPage.prototype.ionViewDidLoad = function () {
    };
    CalendarioEventosPage.prototype.ngOnInit = function () {
        var dateObj = new Date();
        this.currentMonth = this.monthsInPt[this.monthIndex].toLowerCase();
        this.checkForEvents(dateObj.getUTCDate(), this.monthIndex, dateObj.getUTCFullYear());
    };
    CalendarioEventosPage.prototype.checkForEvents = function (day, month, year) {
        var _this = this;
        this.listEventsSelectedMonth = this.calendarioService.currentEvents.filter(function (el) {
            return el.month == _this.monthIndex &&
                el.year == _this.yearIndex;
        });
    };
    CalendarioEventosPage.prototype.ngOnChanges = function (changes) {
        var month = changes.monthIndex;
        var dateObj = new Date();
        this.checkForEvents(dateObj.getUTCDate(), month.currentValue, this.yearIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarioEventosPage.prototype, "monthIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarioEventosPage.prototype, "yearIndex", void 0);
    CalendarioEventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendario-eventos',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/calendario/calendario-eventos/calendario-eventos.html"*/'\n<div class="list-event row">\n  <h3 class="title-events-today">Eventos em {{ monthsInPt[monthIndex].toLowerCase() }} de {{ yearIndex }}</h3>\n  <p class="no-events" *ngIf="listEventsSelectedMonth.length == 0">Nenhum evento no mês selecionado</p>\n  <ul class="col" style="list-style-type: none;padding: 0;">\n      <li class="row list-color {{ obj.color }}" *ngFor="let obj of listEventsSelectedMonth">\n        <div class="aux-li" *ngIf="monthIndex == obj.month">\n          <div class="col-3 date">\n            <h4>{{ obj.date }}</h4>\n            <h5>{{ monthsInPt[obj.month] }}</h5>\n          </div>\n          <hr>\n          <div class="col-7 titles">\n            <h4 class="max-lines-1">{{ obj.title }}</h4>\n            <h5 class="max-lines-1">{{ obj.description }}</h5>\n          </div>  \n        </div>    \n      </li>\n  </ul>\n</div>      \n\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/calendario/calendario-eventos/calendario-eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__calendario_service__["a" /* CalendarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CalendarioEventosPage);
    return CalendarioEventosPage;
}());

//# sourceMappingURL=calendario-eventos.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaleConoscoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atendimento_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FaleConoscoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var FaleConoscoPage = /** @class */ (function () {
    function FaleConoscoPage(navCtrl, navParams, _atendimentoService, _sharedService, _formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._atendimentoService = _atendimentoService;
        this._sharedService = _sharedService;
        this._formBuilder = _formBuilder;
        this.alertCtrl = alertCtrl;
        this.voltar = true;
        this.usuario = JSON.parse(localStorage.getItem('dados'));
    }
    FaleConoscoPage.prototype.ionViewDidLoad = function () { };
    FaleConoscoPage.prototype.ngOnInit = function () {
        this.formSac = this._formBuilder.group({
            nome: [null],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email],
            telefone: [null],
            mensagem: [null]
        });
    };
    FaleConoscoPage.prototype.sendMessage = function () {
        var _this = this;
        var body = this._sharedService.tratarObjeto(this.formSac.value);
        this._atendimentoService.contactSecretary(body)
            .subscribe(function (data) {
            console.log(body);
            var alert = _this.alertCtrl.create({
                title: 'Mensagem',
                subTitle: data.mensagem,
                buttons: ['Ok']
            });
            alert.present();
            console.log(data.mensagem);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FaleConoscoPage.prototype, "voltar", void 0);
    FaleConoscoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fale-conosco',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atendimento/fale-conosco/fale-conosco.html"*/'             \n<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n    <div class="row align-items-center justify-content-md-center box-top-app">\n  \n        <div class="col" *ngIf="usuario">\n            <h2 style="margin-left: 15px;">Fale conosco</h2>    \n            <form action=""\n            [formGroup]="formSac"\n            (ngSubmit)="sendMessage()"\n            >\n                <div class="col-12 margin-10">\n                    <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.nome" formControlName="nome" placeholder="Nome Sobrenome">\n                    <span class="focus-border"></span>\n                </div>\n                <div class="col-12 margin-10">\n                    <input type="mail" class="form-control input-obj color input-login" [(ngModel)]="usuario.contato.email" formControlName="email" placeholder="email@objetivo.br">\n                    <span class="focus-border"></span>\n                </div>\n                <div class="col-12 margin-10">\n                    <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.contato.telefone" formControlName="telefone" placeholder="(011) 1234-5678">\n                    <span class="focus-border"></span>\n                </div>\n            \n                <div class="col-12">\n                        <ion-label>Mensagem</ion-label>\n                        <ion-textarea class="form-control " id="message" formControlName="mensagem" rows="5"></ion-textarea>\n                      </div>\n                                    \n                <div class="text-center">\n                        <button style="width:70%" class="text-uppercase bot-primary margin-10 bot"> enviar</button>\n                    </div>\n            </form>        \n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atendimento/fale-conosco/fale-conosco.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__atendimento_service__["a" /* AtendimentoService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], FaleConoscoPage);
    return FaleConoscoPage;
}());

//# sourceMappingURL=fale-conosco.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atendimento_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SecretariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SecretariaPage = /** @class */ (function () {
    function SecretariaPage(navCtrl, navParams, _atendimentoService, _sharedService, _formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._atendimentoService = _atendimentoService;
        this._sharedService = _sharedService;
        this._formBuilder = _formBuilder;
        this.alertCtrl = alertCtrl;
        this.voltar = true;
        this.usuario = JSON.parse(localStorage.getItem('dados'));
    }
    SecretariaPage.prototype.ionViewDidLoad = function () { };
    SecretariaPage.prototype.ngOnInit = function () {
        this.formSecretaria = this._formBuilder.group({
            nome: [null],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email],
            telefone: [null],
            mensagem: [null]
        });
    };
    SecretariaPage.prototype.sendMessage = function () {
        var _this = this;
        var body = this._sharedService.tratarObjeto(this.formSecretaria.value);
        this._atendimentoService.contactSecretary(body)
            .subscribe(function (data) {
            console.log(body);
            var alert = _this.alertCtrl.create({
                title: 'Mensagem',
                subTitle: data.mensagem,
                buttons: ['Ok']
            });
            alert.present();
            console.log(data.mensagem);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SecretariaPage.prototype, "voltar", void 0);
    SecretariaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-secretaria',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atendimento/secretaria/secretaria.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n    <div class="row align-items-center justify-content-md-center box-top-app">\n  \n      <div class="col" *ngIf="usuario">\n        <h2 style="margin-left: 15px;">Contato secretaria</h2>\n        <form action=""\n        [formGroup]="formSecretaria"\n        (ngSubmit)="sendMessage()"\n        >\n\n            <div class="col-12 margin-10">\n              <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.nome" formControlName="nome" placeholder="Nome Sobrenome">\n              <span class="focus-border"></span>\n          </div>\n          <div class="col-12 margin-10">\n              <input type="mail" class="form-control input-obj color input-login" [(ngModel)]="usuario.contato.email" formControlName="email" placeholder="email@objetivo.br">\n              <span class="focus-border"></span>\n          </div>\n          <div class="col-12 margin-10">\n              <input type="text" class="form-control input-obj color input-login" [(ngModel)]="usuario.contato.telefone" formControlName="telefone" placeholder="(011) 1234-5678">\n              <span class="focus-border"></span>\n          </div>\n\n          <div class="col-12">\n            <ion-label>Mensagem</ion-label>\n            <ion-textarea class="form-control " id="message" formControlName="mensagem" rows="5"></ion-textarea>\n          </div>\n        \n          <div class="text-center">\n              <button style="width:70%" class="text-uppercase bot-primary margin-10 bot"> enviar</button>\n          </div>\n        </form>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/atendimento/secretaria/secretaria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__atendimento_service__["a" /* AtendimentoService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SecretariaPage);
    return SecretariaPage;
}());

//# sourceMappingURL=secretaria.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ContentLoaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ContentLoaderComponent = /** @class */ (function () {
    function ContentLoaderComponent() {
    }
    ContentLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'content-loader',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/content-loader/content-loader.html"*/'<article class="container-loader" >\n    <div class="background">\n        <div class="right">\n            <div class="bar"></div>\n            <div class="mask thick"></div>\n            <div class="bar"></div>\n            <div class="mask thin"></div>\n            <div class="bar medium"></div>\n            <div class="mask thick"></div>\n            <div class="bar small"></div>\n            <div class="bar"></div>\n            <div class="mask thick"></div>\n            <div class="bar"></div>\n            <div class="mask thin"></div>\n            <div class="bar medium"></div>\n            <div class="mask thick"></div>\n            <div class="bar small"></div>\n            <div class="bar"></div>\n            <div class="mask thick"></div>\n            <div class="bar"></div>\n            <div class="mask thin"></div>\n            <div class="bar medium"></div>\n            <div class="mask thick"></div>\n            <div class="bar small"></div>\n            <div class="bar"></div>\n            <div class="mask thin"></div>\n            <div class="bar medium"></div>\n            <div class="mask thick"></div>\n            <div class="bar small"></div>\n            <div class="bar"></div>\n            <div class="mask thin"></div>\n            <div class="bar medium"></div>\n            <div class="mask thick"></div>\n            <div class="bar small"></div>\n            <div class="bar"></div>\n            <div class="mask thin"></div>\n            <div class="bar medium"></div>\n            <div class="mask thick"></div>\n            <div class="bar small"></div>\n        </div>\n    </div>\n</article>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/components/content-loader/content-loader.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContentLoaderComponent);
    return ContentLoaderComponent;
}());

//# sourceMappingURL=content-loader.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 265,
	"./af.js": 265,
	"./ar": 266,
	"./ar-dz": 267,
	"./ar-dz.js": 267,
	"./ar-kw": 268,
	"./ar-kw.js": 268,
	"./ar-ly": 269,
	"./ar-ly.js": 269,
	"./ar-ma": 270,
	"./ar-ma.js": 270,
	"./ar-sa": 271,
	"./ar-sa.js": 271,
	"./ar-tn": 272,
	"./ar-tn.js": 272,
	"./ar.js": 266,
	"./az": 273,
	"./az.js": 273,
	"./be": 274,
	"./be.js": 274,
	"./bg": 275,
	"./bg.js": 275,
	"./bm": 276,
	"./bm.js": 276,
	"./bn": 277,
	"./bn.js": 277,
	"./bo": 278,
	"./bo.js": 278,
	"./br": 279,
	"./br.js": 279,
	"./bs": 280,
	"./bs.js": 280,
	"./ca": 281,
	"./ca.js": 281,
	"./cs": 282,
	"./cs.js": 282,
	"./cv": 283,
	"./cv.js": 283,
	"./cy": 284,
	"./cy.js": 284,
	"./da": 285,
	"./da.js": 285,
	"./de": 286,
	"./de-at": 287,
	"./de-at.js": 287,
	"./de-ch": 288,
	"./de-ch.js": 288,
	"./de.js": 286,
	"./dv": 289,
	"./dv.js": 289,
	"./el": 290,
	"./el.js": 290,
	"./en-SG": 291,
	"./en-SG.js": 291,
	"./en-au": 292,
	"./en-au.js": 292,
	"./en-ca": 293,
	"./en-ca.js": 293,
	"./en-gb": 294,
	"./en-gb.js": 294,
	"./en-ie": 295,
	"./en-ie.js": 295,
	"./en-il": 296,
	"./en-il.js": 296,
	"./en-nz": 297,
	"./en-nz.js": 297,
	"./eo": 298,
	"./eo.js": 298,
	"./es": 299,
	"./es-do": 300,
	"./es-do.js": 300,
	"./es-us": 301,
	"./es-us.js": 301,
	"./es.js": 299,
	"./et": 302,
	"./et.js": 302,
	"./eu": 303,
	"./eu.js": 303,
	"./fa": 304,
	"./fa.js": 304,
	"./fi": 305,
	"./fi.js": 305,
	"./fo": 306,
	"./fo.js": 306,
	"./fr": 307,
	"./fr-ca": 308,
	"./fr-ca.js": 308,
	"./fr-ch": 309,
	"./fr-ch.js": 309,
	"./fr.js": 307,
	"./fy": 310,
	"./fy.js": 310,
	"./ga": 311,
	"./ga.js": 311,
	"./gd": 312,
	"./gd.js": 312,
	"./gl": 313,
	"./gl.js": 313,
	"./gom-latn": 314,
	"./gom-latn.js": 314,
	"./gu": 315,
	"./gu.js": 315,
	"./he": 316,
	"./he.js": 316,
	"./hi": 317,
	"./hi.js": 317,
	"./hr": 318,
	"./hr.js": 318,
	"./hu": 319,
	"./hu.js": 319,
	"./hy-am": 320,
	"./hy-am.js": 320,
	"./id": 321,
	"./id.js": 321,
	"./is": 322,
	"./is.js": 322,
	"./it": 323,
	"./it-ch": 324,
	"./it-ch.js": 324,
	"./it.js": 323,
	"./ja": 325,
	"./ja.js": 325,
	"./jv": 326,
	"./jv.js": 326,
	"./ka": 327,
	"./ka.js": 327,
	"./kk": 328,
	"./kk.js": 328,
	"./km": 329,
	"./km.js": 329,
	"./kn": 330,
	"./kn.js": 330,
	"./ko": 331,
	"./ko.js": 331,
	"./ku": 332,
	"./ku.js": 332,
	"./ky": 333,
	"./ky.js": 333,
	"./lb": 334,
	"./lb.js": 334,
	"./lo": 335,
	"./lo.js": 335,
	"./lt": 336,
	"./lt.js": 336,
	"./lv": 337,
	"./lv.js": 337,
	"./me": 338,
	"./me.js": 338,
	"./mi": 339,
	"./mi.js": 339,
	"./mk": 340,
	"./mk.js": 340,
	"./ml": 341,
	"./ml.js": 341,
	"./mn": 342,
	"./mn.js": 342,
	"./mr": 343,
	"./mr.js": 343,
	"./ms": 344,
	"./ms-my": 345,
	"./ms-my.js": 345,
	"./ms.js": 344,
	"./mt": 346,
	"./mt.js": 346,
	"./my": 347,
	"./my.js": 347,
	"./nb": 348,
	"./nb.js": 348,
	"./ne": 349,
	"./ne.js": 349,
	"./nl": 350,
	"./nl-be": 351,
	"./nl-be.js": 351,
	"./nl.js": 350,
	"./nn": 352,
	"./nn.js": 352,
	"./pa-in": 353,
	"./pa-in.js": 353,
	"./pl": 354,
	"./pl.js": 354,
	"./pt": 355,
	"./pt-br": 356,
	"./pt-br.js": 356,
	"./pt.js": 355,
	"./ro": 357,
	"./ro.js": 357,
	"./ru": 358,
	"./ru.js": 358,
	"./sd": 359,
	"./sd.js": 359,
	"./se": 360,
	"./se.js": 360,
	"./si": 361,
	"./si.js": 361,
	"./sk": 362,
	"./sk.js": 362,
	"./sl": 363,
	"./sl.js": 363,
	"./sq": 364,
	"./sq.js": 364,
	"./sr": 365,
	"./sr-cyrl": 366,
	"./sr-cyrl.js": 366,
	"./sr.js": 365,
	"./ss": 367,
	"./ss.js": 367,
	"./sv": 368,
	"./sv.js": 368,
	"./sw": 369,
	"./sw.js": 369,
	"./ta": 370,
	"./ta.js": 370,
	"./te": 371,
	"./te.js": 371,
	"./tet": 372,
	"./tet.js": 372,
	"./tg": 373,
	"./tg.js": 373,
	"./th": 374,
	"./th.js": 374,
	"./tl-ph": 375,
	"./tl-ph.js": 375,
	"./tlh": 376,
	"./tlh.js": 376,
	"./tr": 377,
	"./tr.js": 377,
	"./tzl": 378,
	"./tzl.js": 378,
	"./tzm": 379,
	"./tzm-latn": 380,
	"./tzm-latn.js": 380,
	"./tzm.js": 379,
	"./ug-cn": 381,
	"./ug-cn.js": 381,
	"./uk": 382,
	"./uk.js": 382,
	"./ur": 383,
	"./ur.js": 383,
	"./uz": 384,
	"./uz-latn": 385,
	"./uz-latn.js": 385,
	"./uz.js": 384,
	"./vi": 386,
	"./vi.js": 386,
	"./x-pseudo": 387,
	"./x-pseudo.js": 387,
	"./yo": 388,
	"./yo.js": 388,
	"./zh-cn": 389,
	"./zh-cn.js": 389,
	"./zh-hk": 390,
	"./zh-hk.js": 390,
	"./zh-tw": 391,
	"./zh-tw.js": 391
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 538;

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_usuario_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notas_notas_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notificacoes_notificacoes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendario_calendario_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _usuarioService, _notasService, calendarioService, _menuCtrl, appService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._usuarioService = _usuarioService;
        this._notasService = _notasService;
        this.calendarioService = calendarioService;
        this._menuCtrl = _menuCtrl;
        this.appService = appService;
        this.listaProvas = [];
        this.preLoader = true;
        __WEBPACK_IMPORTED_MODULE_4_jquery__('navdown').show();
        __WEBPACK_IMPORTED_MODULE_4_jquery__('ion-menu').show();
        this.progress(75);
        if (localStorage.getItem('dados')) {
            var data = JSON.parse(localStorage.getItem('dados'));
            this.usuario = data;
            var nome = this.usuario.nome;
            this.nome = nome.substring(0, nome.indexOf(" ")) +
                nome.substring(nome.lastIndexOf(" "));
            this.appService.nome = this.nome;
        }
        else {
            this._usuarioService.getUsers()
                .subscribe(function (data) {
                localStorage.setItem('dados', JSON.stringify(data));
                _this.preLoader = false;
                _this.usuario = data;
                var nome = _this.usuario.nome;
                _this.nome = nome.substring(0, nome.indexOf(" ")) +
                    nome.substring(nome.lastIndexOf(" "));
                _this.appService.nome = _this.nome;
            });
        }
        if (!this.appService.alreadyLoadedDisciplinas) {
            this._notasService.getResumoDisciplinas()
                .subscribe(function (dados) {
                _this.appService.notas = dados;
                _this.populateHome();
                _this.appService.alreadyLoadedDisciplinas = true;
            }, function (err) {
                _this.appService.alreadyLoadedDisciplinas = false;
                _this.appService.showToaster('Ocorreu algum erro na requisição, tente novamente mais tarde.', 3000);
            });
        }
        else {
            this.populateHome();
        }
    }
    HomePage.prototype.populateHome = function () {
        this.appService.emitDisciplinas(this.appService.notas);
        this.preLoader = false;
        this.mediaGeral = 75;
        this.progress(this.mediaGeral);
    };
    HomePage.prototype.toggleMenu = function () {
        this._menuCtrl.toggle();
    };
    HomePage.prototype.progress = function (percent) {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".js-radial-mask").css('transform', 'rotate(' + 1.8 * percent + 'deg)');
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".js-radial-fill").css('transform', 'rotate(' + 1.8 * percent + 'deg)');
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".js-radial-fill_fix").css('transform', 'rotate(' + 3.6 * percent + 'deg)');
        }, 0);
    };
    ;
    HomePage.prototype.openNotificacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__notificacoes_notificacoes__["a" /* NotificacoesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/home/home.html"*/'\n      \n\n<ion-content no-bounce>\n\n    <ion-header no-bounce  class="header-app" no-border>\n        <ion-navbar>\n            <i class="ico-burguer" (click)="toggleMenu()"></i>\n            <!-- <i class="ico-atendimento" (click)="voltarPagina()"></i> -->\n            <img class="logo-obj"  src="assets/img/logo-objetivo.svg" alt="Logo Objetivo">\n            <div (click)="openNotificacoes()" class="ico-notification-alert active">   \n            <div class="notification"></div>\n            <div class="animation">\n                <i class="ico-notification ico-animation"></i>\n            </div>\n            </div>\n            \n        </ion-navbar>\n    </ion-header>\n        \n                       \n    <div class="bg-home"></div>\n    <div class="cont-bg-home"><img src="{{appService.base64Image}}" alt="bg-user"></div>\n    <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n\n    <div class="row align-items-center justify-content-md-center box-center-app" style="padding-right: 0px; padding-left: 25px;">\n        <div class="container text-home">\n                <h3>\n                    <span>Olá,</span><br>\n                    <strong>{{ nome }}</strong>\n                </h3>\n                <p>{{ usuario?.descricao }}</p>\n                <p>{{ usuario?.unidade.colegio }}</p>\n                <h4 class="text-center" >Sua média geral</h4>\n\n\n\n                <div class="father-circle">\n                        <span style="color: white" class="number-circle">{{ mediaGeral | number:\'2.2-2\' }}</span>\n                        <round-progress\n                        [current]="mediaGeral | number:\'2.2-2\'"\n                        [max]="100"\n                        [color]="\'#FFF205\'"\n                        [background]="\'rgba(255, 242, 5, 0.2)\'"\n                        [radius]="125"\n                        [stroke]="15"\n                        [rounded]="true"\n                        [clockwise]="true"\n                        [responsive]="true"\n                        [duration]="2000"\n                        [animation]="\'easeOutQuart\'"\n                        [animationDelay]="0"\n                        >\n                    </round-progress>\n                </div>\n                    \n            \n                <!-- <circle-progress [percent]="mediaGeral | number:\'2.2-2\' " [color]="\'yellow\'"></circle-progress> -->\n                <h5 class="text-center" >Para mais detalhes, acesse a aba "notas"</h5>\n                </div>        \n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__usuario_usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_3__notas_notas_service__["a" /* NotasService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_3__notas_notas_service__["a" /* NotasService */],
            __WEBPACK_IMPORTED_MODULE_7__calendario_calendario_service__["a" /* CalendarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__app_app_service__["a" /* AppService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtendimentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AtendimentoService = /** @class */ (function () {
    function AtendimentoService(_http) {
        this._http = _http;
        this._urlSecretary = 'https://private-2ca7d-objetivoapp.apiary-mock.com/secretaria'; // POST Secretary
        this._urlSac = 'https://private-2ca7d-objetivoapp.apiary-mock.com/sac'; // POST Sac
        this._urlSupport = 'https://private-2ca7d-objetivoapp.apiary-mock.com/suporte'; // POST Support
        this._urlPolos = 'https://private-2ca7d-objetivoapp.apiary-mock.com/polos'; // GET Polos  
    }
    AtendimentoService.prototype.contactSecretary = function (body) {
        return this._http.post(this._urlSecretary, body)
            .map(function (data) { return data.json(); });
    };
    AtendimentoService.prototype.contacSac = function (body) {
        return this._http.post(this._urlSac, body)
            .map(function (data) { return data.json(); });
    };
    AtendimentoService.prototype.contacSupport = function (body) {
        return this._http.post(this._urlSupport, body)
            .map(function (data) { return data.json(); });
    };
    AtendimentoService.prototype.getPolos = function () {
        return this._http.get(this._urlPolos)
            .map(function (data) { return data.json(); });
    };
    AtendimentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AtendimentoService);
    return AtendimentoService;
}());

//# sourceMappingURL=atendimento.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notas_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notas_lista_provas_notas_lista_provas__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotasPage = /** @class */ (function () {
    function NotasPage(navCtrl, navParams, appService, _notasService, _renderer2, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this._notasService = _notasService;
        this._renderer2 = _renderer2;
        this.alertCtrl = alertCtrl;
        this.media = 0.00;
        this.currentFaltas = '';
        this.preLoader = true;
        this.listaProva = [];
        // this.media = this._notasService.calculaMedia(this.listaProva[0]);
    }
    NotasPage.prototype.ionViewDidLoad = function () { };
    NotasPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appService.notas.length > 0) {
            this.id = this.appService.notas[0].id;
            this.getDataMateria();
            this.currentDisciplina = this.appService.notas[0];
            this.firstDisciplina = this.appService.notas[0].disciplina.nome;
            // this.currentFaltas = this.appService.notas[0].faltas;
            //this.media = this._notasService.calculaMedia(this.appService.notas[0].provas);
        }
        else {
            this.serviceSubscription = this.appService.onChangeDisciplinas.subscribe({
                next: function (event) {
                    _this.id = _this.appService.notas[0].id;
                    _this.getDataMateria();
                    _this.currentDisciplina = _this.appService.notas[0];
                    _this.firstDisciplina = _this.appService.notas[0].disciplina.nome;
                    // this.currentFaltas = this.appService.notas[0].faltas;
                    //this.media = this._notasService.calculaMedia(this.appService.notas[0].provas);
                }
            });
        }
    }; // end OnInit
    NotasPage.prototype.getDataMateria = function () {
        var _this = this;
        var currentData;
        var currentObj;
        // for(let i = 0; i < this.appService.notas.length; i++) {
        //     if(this.appService.notas[i].id == this.id) {
        //         currentObj = this.appService.notas[i];
        //     }
        // }
        currentObj = this.appService.notas.find(function (x) { return x.id == _this.id; });
        this.currentDisciplina = currentObj;
        // this.currentFaltas = this.currentDisciplina.faltas;
        // currentData = currentObj.provas;
        // this.media = this._notasService.calculaMedia( currentData )
        // Váriavel global listaProvas de NotasService recebe valor de dados,
        // disciplina filtrada para compartilhamento entre components.
        this._notasService.listaProvas = currentData;
        // this.id = currentData[0].grade.id;
        this._notasService.filtroDisciplinas(this.id)
            .subscribe(function (dados) {
            localStorage.setItem('dadosNotas', JSON.stringify(dados));
            _this.preLoader = false;
            _this.media = _this._notasService.calculaMedia(dados);
            // Váriavel global listaProvas de NotasService recebe valor de dados,
            // disciplina filtrada para compartilhamento entre components.
            _this._notasService.listaProvas = dados;
            _this.id = dados[0].grade.id;
            _this.progress(_this.media);
        }, function () {
            _this.media = 0.00;
            _this.progress(_this.media);
            _this.appService.showAlert('', 'Nenhuma prova encontrada.', 'Ok');
        });
    };
    NotasPage.prototype.progress = function (percent) {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(".js-radial-mask").css('transform', 'rotate(' + 1.8 * percent + 'deg)');
            __WEBPACK_IMPORTED_MODULE_2_jquery__(".js-radial-fill").css('transform', 'rotate(' + 1.8 * percent + 'deg)');
            __WEBPACK_IMPORTED_MODULE_2_jquery__(".js-radial-fill_fix").css('transform', 'rotate(' + 3.6 * percent + 'deg)');
        }, 0);
    };
    ;
    NotasPage.prototype.onChangeFilter = function (deviceValue) {
        var _this = this;
        var buttonIonSelect = document.querySelector('.item-cover-default-ios');
        this.getDataMateria();
        if (buttonIonSelect) {
            setInterval(function () { _this._renderer2.addClass(buttonIonSelect, 'fadeOutDown'); }, 100);
        }
    };
    NotasPage.prototype.goExams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notas_lista_provas_notas_lista_provas__["a" /* NotasListaProvasPage */], { idMateria: this.id, disciplina: this.currentDisciplina.disciplina }, { animate: false });
    };
    NotasPage.prototype.onChangeFake = function (event) {
        this.mediaFake = event;
        console.log(this.mediaFake);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectTest'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], NotasPage.prototype, "select", void 0);
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/notas/notas.html"*/'             \n<header-obj [navCtrl]="navCtrl"></header-obj>\n<ion-content padding no-bounce>\n    <div class="row align-items-center justify-content-md-center box-center-app">\n        <div *ngIf="appService.notas" class="col text-center">\n\n            \n            <!-- <ion-select interface="action-sheet" [(ngModel)]="id"  (ionChange)="onChangeFake($event)"> -->\n            <ion-select interface="action-sheet" [(ngModel)]="id" [placeholder]="firstDisciplina" (ionChange)="onChangeFilter($event)">\n    \n                <!-- <ion-option\n                    *ngFor="let obj of listaProva"\n                    [attr.selectedText]="cont == 0"\n                    [value]="obj.aproveitamento"> {{ obj.disciplina }}\n                </ion-option> --> \n                <ion-option\n                    *ngFor="let obj of appService.notas, let cont = index"\n                    [attr.selectedText]="cont == 0"\n                    [attr.disciplinaName]="obj?.disciplina.nome"\n                    [value]="obj?.id"> {{ obj?.disciplina.nome }}\n                </ion-option>                \n    \n            </ion-select>\n            \n            <h5 class="text-center">Aproveitamento</h5>\n\n\n            <div class="father-circle" style="margin-top: 4vh;margin-bottom: 2vh;">\n                <span style="color: #144EA0" class="number-circle">{{ media | number:\'1.2-2\' }}</span>\n                <round-progress\n                    [current]="media | number:\'1.2-2\'"\n                    [max]="100"\n                    [color]="\'#144EA0\'"\n                    [background]="\'rgba(20, 78, 160, 0.2)\'"\n                    [radius]="125"\n                    [stroke]="15"\n                    [rounded]="true"\n                    [clockwise]="true"\n                    [responsive]="true"\n                    [duration]="2000"\n                    [animation]="\'easeOutQuart\'"\n                    [animationDelay]="0"\n                    ></round-progress>\n        </div>\n\n            <!-- <circle-progress [percent]="media | number:\'1.2-2\' " [color]="\'third\'"></circle-progress> -->\n\n\n            <!-- <h3 class="absences-text">Faltas: {{ currentFaltas }}</h3> -->\n            <button ion-button (click)="goExams()" style="width: 70%;" class="text-uppercase bot-primary bot margin-10">detalhes</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/notas/notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_3__notas_service__["a" /* NotasService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Service = /** @class */ (function () {
    function Service(_appService) {
        this._appService = _appService;
        // public url = 'https://www.objetivo.br/prova/api/';
        this.url = 'http://200.174.103.116/objetivoprova/api/';
        this.requestOptions = this._appService.requestOptions;
    }
    Service.prototype.requestOptionsUpdated = function () {
        return { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'appKey': 'YPpj++OV7AckYkJ7lLL1OJPO+rCJPXv1GggdgV8aFsPxDXNLN3OIF2k8GQfUAboY',
                'userKey': localStorage.getItem('token') ? localStorage.getItem('token') : '',
                'Cache-Control': 'no-cache'
            }) };
    };
    Service.prototype.tratarObjeto = function (obj) {
        var newObj = '';
        var array = Object.getOwnPropertyNames(obj);
        __WEBPACK_IMPORTED_MODULE_1_jquery__["each"](array, function (index, value) { newObj += value + '=' + obj[value] + "&"; });
        return newObj;
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.model.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarioService = /** @class */ (function () {
    function CalendarioService(_http) {
        this._http = _http;
        this.currentEvents = [
            {
                year: 2019,
                month: 1,
                date: 27,
                title: 'Reunião dos pais',
                color: 'blue',
                description: 'às 14h00min'
            },
            {
                year: 2019,
                month: 2,
                date: 10,
                title: 'Feriado nome',
                color: 'green',
                description: 'às 17h00min'
            },
            {
                year: 2019,
                month: 3,
                date: 14,
                title: 'Prova de matemática',
                color: 'orange',
                description: 'às 14h00min'
            },
            {
                year: 2019,
                month: 5,
                date: 7,
                title: 'Reunião dos pais',
                color: 'orange',
                description: 'às 14h00min'
            },
            {
                year: 2019,
                month: 11,
                date: 25,
                title: 'Entrega de trabalho de português',
                color: 'blue',
                description: 'com capa'
            },
            {
                year: 2019,
                month: 11,
                date: 26,
                title: 'Início das férias escolares',
                color: 'red',
                description: 'Confirmar dispensa dos professores'
            }
        ];
    }
    CalendarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CalendarioService);
    return CalendarioService;
}());

//# sourceMappingURL=calendario.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendario_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { TweenMax, Power0} from 'gsap';
/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, navParams, calendarioService, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendarioService = calendarioService;
        this.appService = appService;
        this.monthsInPt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        this.monthIndex = 0;
        this.yearIndex = 0;
        this.dateFullString = '';
        this.listEventsSelectedDay = [];
        this.selectedIsToday = false;
        this.calendarLoaded = false;
        this.currentDay = '';
    }
    CalendarioPage.prototype.ionViewDidLoad = function () {
    };
    CalendarioPage.prototype.ngOnInit = function () {
        var _this = this;
        this.calendarLoaded = true;
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.calendar-header-col.col').eq(0).text('Dom');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.calendar-header-col.col').eq(1).text('Seg');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.calendar-header-col.col').eq(2).text('Ter');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.calendar-header-col.col').eq(3).text('Qua');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.calendar-header-col.col').eq(4).text('Qui');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.calendar-header-col.col').eq(5).text('Sex');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.calendar-header-col.col').eq(6).text('Sáb');
            _this.updateMonth();
        }, 0);
        var dateObj = new Date();
        this.dateFullString = ('0' + (dateObj.getUTCDate())).slice(-2) + "/" + ('0' + (dateObj.getUTCMonth() + 1)).slice(-2) + "/" + dateObj.getUTCFullYear();
        this.monthIndex = dateObj.getUTCMonth();
        this.yearIndex = dateObj.getUTCFullYear();
        this.updateCurrentDay(dateObj.getUTCDate(), dateObj.getUTCMonth(), dateObj.getUTCFullYear());
        this.checkForEvents(dateObj.getUTCDate(), dateObj.getUTCMonth(), dateObj.getUTCFullYear());
        this.selectedIsToday = true;
    };
    CalendarioPage.prototype.onDaySelect = function (e) {
        this.updateCurrentDay(e.date, e.month, e.year);
        this.checkForEvents(e.date, e.month, e.year);
        this.currentDay == this.dateFullString ? this.selectedIsToday = true : this.selectedIsToday = false;
    };
    CalendarioPage.prototype.onMonthSelect = function (e) {
        var calendarYear = e.year, calendarMonthIndex = e.month;
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(calendarYear + " - " + this.monthsInPt[calendarMonthIndex]);
        this.monthIndex = e.month;
        this.yearIndex = e.year;
    };
    CalendarioPage.prototype.updateMonth = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('January', 'Janeiro'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('February', 'Fevereiro'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('March', 'Março'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('April', 'Abril'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('May', 'Maio'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('June', 'Junho'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('July', 'Julho'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('August', 'Agosto'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('September', 'Setembro'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('October', 'Outubro'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('November', 'Novembro'));
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text(__WEBPACK_IMPORTED_MODULE_2_jquery__('ion-calendar .col > div').text().replace('December', 'Dezembro'));
    };
    CalendarioPage.prototype.updateCurrentDay = function (day, month, year) {
        this.currentDay = ('0' + (day)).slice(-2) + "/" + ('0' + (month + 1)).slice(-2) + "/" + year;
    };
    CalendarioPage.prototype.checkForEvents = function (day, month, year) {
        this.listEventsSelectedDay = this.calendarioService.currentEvents.filter(function (el) {
            return el.date == day &&
                el.month == month &&
                el.year == year;
        });
    };
    CalendarioPage.prototype.ngOnDestroy = function () {
        this.appService.currentPage = 'other';
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendario',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/calendario/calendario.html"*/'<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n<ion-content padding no-bounce>\n    <div class="box-top-app">\n      <!-- <div id="calendar" class="col">\n          <div id="calendar_header">\n            <i class="icon-chevron-left">\n              <div class="caretIcon-left"><div class="caret-1"></div><div class="caret-2"></div></div>\n            </i>          \n              <h1></h1>\n            <i class="icon-chevron-right"> \n              <div class="caretIcon-right"><div class="caret-1"></div><div class="caret-2"></div></div> \n            </i>         \n          </div>\n          <div id="calendar_weekdays"></div>\n          <div id="calendar_content"></div>\n        </div> -->\n\n        <ion-calendar *ngIf="calendarLoaded" #calendar lang="en" [events]="calendarioService.currentEvents" (onDaySelect)="onDaySelect($event)" (onMonthSelect)="onMonthSelect($event)"></ion-calendar>\n\n\n\n      </div>\n\n      <div class="list-event row">\n        <h3 class="title-events-today" *ngIf="!selectedIsToday">Eventos no dia {{ currentDay }}</h3>\n        <h3 class="title-events-today" *ngIf="selectedIsToday">Eventos hoje</h3>\n        <p class="no-events" *ngIf="listEventsSelectedDay.length == 0">Nenhum evento no dia selecionado</p>\n        <ul class="col" style="list-style-type: none;padding: 0;">\n            <li class="row list-color {{ obj.color }}" *ngFor="let obj of listEventsSelectedDay">\n              <div class="col-3 date">\n                <h4>{{ obj.date }}</h4>\n                <h5>{{ monthsInPt[obj.month] }}</h5>\n              </div>\n              <hr>\n              <div class="col-7 titles">\n                <h4 class="max-lines-1">{{ obj.title }}</h4>\n                <h5 class="max-lines-1">{{ obj.description }}</h5>\n              </div>      \n            </li>\n        </ul>\n      </div> \n\n      <calendario-eventos [monthIndex]="monthIndex" [yearIndex]="yearIndex"></calendario-eventos>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/calendario/calendario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__calendario_service__["a" /* CalendarioService */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__financeiro_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__financeiro_detalhes_financeiro_detalhes__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FinanceiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var FinanceiroPage = /** @class */ (function () {
    function FinanceiroPage(navCtrl, navParams, _financeiroService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._financeiroService = _financeiroService;
        this.loaderContent = true;
    }
    FinanceiroPage.prototype.ionViewDidLoad = function () { };
    FinanceiroPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getDateCurrent();
        this._financeiroService.getTickets()
            .subscribe(function (data) {
            _this.loaderContent = false;
            _this.tickets = data;
            localStorage.setItem('boletos', JSON.stringify(_this.tickets));
            // console.log(this.tickets)
            // console.log('dia: ' + this.dateCurrent + ' ' + 'mes: ' + this.monthCurrent )
        });
    };
    FinanceiroPage.prototype.getDateCurrent = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        this.dateCurrent = dd;
        this.monthCurrent = mm;
    };
    FinanceiroPage.prototype.goDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__financeiro_detalhes_financeiro_detalhes__["a" /* FinanceiroDetalhesPage */], { id: id }, { animate: false });
    };
    FinanceiroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-financeiro',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/financeiro/financeiro.html"*/'<header-obj [navCtrl]="navCtrl"></header-obj>\n<ion-content padding no-bounce >\n  <div class="box-top-app">\n      <div class="title-ico">\n          <i class="ico-financeiro"></i>\n          <h2>Secretaria Online</h2>\n        </div>\n        <content-loader id="financeiroLoader" *ngIf="loaderContent"></content-loader>\n        \n        \n        <ul class="list-financeiro col">\n            <li class="row" *ngFor="let obj of tickets"\n            (click)="goDetails(obj.id)"\n            >\n                <div  class="col-7">\n                    <h4 class="max-lines-1">{{ obj?.descricao }}</h4>\n                    <p>venc: {{ obj.detalhes.data | date: \'dd/MM/yyyy\' }}</p>\n                </div>\n                <div  class="col-4 text-right no-padding">\n                    <h5\n                    [ngClass]="{\n                        \'em-atraso\': obj.status == \'EmAtraso\',\n                        \'pago\': obj.status == \'Aprovado\',\n                        \'pendente\': obj.status == \'Pendente\'\n                    }"\n                    [class.green]="obj.detalhes.mesReferencia < monthCurrent && obj.detalhes.diaVencimento  <= dateCurrent  && obj.status == \'Aprovado\' "\n                    [class.orange]="obj.detalhes.mesReferencia >= monthCurrent && dateCurrent >= obj.detalhes.diaVencimento  && obj.status == \'Pendente\'"\n                    [class.red]="obj.detalhes.mesReferencia < monthCurrent && obj.status == \'EmAtraso\' "\n                    >{{ obj?.mensalidade.valor | currency:\'BRL\': \'1.2-2\' }}</h5>\n                </div>\n                <div class="caretMenu" style="position: absolute;right: 0px; margin-top: 21px;"><div class="caret-1" style="background-color: grey;"></div><div class="caret-2" style="background-color: grey;"></div></div>\n            </li>      \n        </ul>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/financeiro/financeiro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__financeiro_service__["a" /* FinanceiroService */]])
    ], FinanceiroPage);
    return FinanceiroPage;
}());

//# sourceMappingURL=financeiro.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = /** @class */ (function () {
    function AppService(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        /*
          Header padrão para fazer requisições.
          Usar os métodos delete e append para deletar e adicionar campos no header 'se necessário'.
          Link da cocumentação: https://angular.io/api/http/Headers
        */
        this.token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        this.listaGrade = localStorage.getItem('grade') ? JSON.parse(localStorage.getItem('grade')) : '';
        this.serie = localStorage.getItem('serie') ? localStorage.getItem('serie') : '';
        this.questoesProva = '';
        this.videos = [];
        this.conteudo = [];
        this.exercicios = [];
        this.jogos = [];
        this.classeCheckConteudo = '';
        this.classeCheckVideos = '';
        this.classeCheckResolucao = '';
        this.classeCheckApoio = '';
        this.classeCheckExercicios = '';
        this.classeCheckJogos = '';
        this.quantidadeLiProvas = 0;
        this.quantidadeLiClicadasProvas = 0;
        this.porcRevisao = 75;
        this.provas = false;
        this.urlImagemTarefaNet = 'http://www.objetivo.br/tarefanet/Api/Asserts/Images/'; // "http://200.174.103.116/tarefanet/Api/Asserts/Images/"
        this.alreadyLoadedDisciplinas = false;
        this.onChangeDisciplinas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'appKey': 'YPpj++OV7AckYkJ7lLL1OJPO+rCJPXv1GggdgV8aFsPxDXNLN3OIF2k8GQfUAboY',
            'userKey': this.token
        });
        // RequestOptions
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.header
        });
        this.base64Image = 'assets/img/bg-user.jpg';
        this.publicKey = 'DcBvX4hEONE5tST6bL0X';
        this.currentPage = '';
        this.notas = [];
        this.news = [
            {
                title: "RO, VC e RV",
                description: "Revisão bimestral/RO, verificação complementar e recuperação de...",
                image: "assets/img/banners/news-fallback.jpg"
            },
            {
                title: "Medalhas em olimpíadas científicas",
                description: "Alunos do Objetivo já conquistaram 7.014 medalhas em olimpíadas científicas",
                image: "assets/img/banners/news-fallback.jpg"
            },
            {
                title: "Medalha de prata no IYPT",
                description: "Na China, aluno do Colégio Objetivo conquista medalha de prata no IYPT, a \"Copa do Mundo da Física\"",
                image: "assets/img/banners/news-fallback.jpg"
            }
        ];
        this.navOptions = {
            animate: false
        };
        var encryptedToken = localStorage.getItem('utk') || 'a';
        this.decryptToken(encryptedToken);
    }
    AppService.prototype.decryptToken = function (token) {
        // Decrypt
        var bytes = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].decrypt(token.toString(), this.publicKey);
        this.token = bytes.toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["enc"].Utf8);
    };
    AppService.prototype.showMenu = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".menu-icons").fadeIn();
        var animateTime = 0;
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.list-menu-item.openMenu').each(function (i, obj) {
            animateTime += 0.03;
            __WEBPACK_IMPORTED_MODULE_3_gsap__["c" /* TweenMax */].fromTo(__WEBPACK_IMPORTED_MODULE_4_jquery__(obj), 0.45, {
                x: "-100%",
                alpha: 0
            }, {
                x: "0%",
                alpha: 1,
                delay: animateTime,
                ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["b" /* Sine */].easeInOut
            });
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".openMenu").addClass('change');
        __WEBPACK_IMPORTED_MODULE_4_jquery__('body').addClass('scrollblock');
    };
    AppService.prototype.hideMenu = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".menu-icons").fadeOut();
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".openMenu").removeClass('change');
        __WEBPACK_IMPORTED_MODULE_4_jquery__('body').removeClass('scrollblock');
    };
    AppService.prototype.showToaster = function (msg, duration) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: duration
        });
        toast.present();
    };
    AppService.prototype.showAlert = function (title, message, btnText) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [btnText]
        });
        alert.present();
    };
    AppService.prototype.emitDisciplinas = function (dados) {
        this.notas = dados;
        this.onChangeDisciplinas.emit(dados);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */]])
    ], AppService);
    return AppService;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvasPage; });
/* unused harmony export EIndiceResposta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_provas_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_aula_service__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_questoes_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_exercicios_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProvasPage = /** @class */ (function () {
    function ProvasPage(navCtrl, navParams, _provasService, _appService, _aulaService, _questoesService, _exerciciosService, events, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._provasService = _provasService;
        this._appService = _appService;
        this._aulaService = _aulaService;
        this._questoesService = _questoesService;
        this._exerciciosService = _exerciciosService;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.opcoesSidebar = { textoDeApoio: true, jogos: true, conteudos: true, exercicios: true, videos: true };
        this.id = this.navParams.get('id');
        this._provasService.obterProvaPorId(this.id)
            .then(function (data) {
            _this.prova = data;
            _this._appService.provaAtiva = _this.prova;
        })
            .catch(function (error) { });
    }
    ProvasPage.prototype.ngOnInit = function () {
        this._appService.provas = true;
    };
    ProvasPage.prototype.ngOnDestroy = function () {
        this._appService.provas = false;
    };
    ProvasPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ProvasPage');
    };
    ProvasPage.prototype.obterQuestao = function (questao) {
        var _this = this;
        console.log(questao);
        this.opcoesSidebar = { textoDeApoio: true, jogos: true, conteudos: true, exercicios: true, videos: true };
        if (questao.tipo.toLowerCase() == "alternativa") {
            this._questoesService.obterQuestaoAlternativa(questao.id)
                .then(function (data) {
                _this.questaoAtiva = data;
                _this._appService.questaoAtiva = data;
                _this.obterVinculos();
            })
                .catch(function () { });
        }
        else {
            this._questoesService.obterQuestaoDiscursiva(questao.id)
                .then(function (data) {
                _this.questaoAtiva = data;
                _this._appService.questaoAtiva = data;
                _this.obterVinculos();
            })
                .catch(function () { });
        }
    };
    ProvasPage.prototype.obterVinculos = function () {
        var _this = this;
        var resposta = this._appService.provaAtiva.gabaritos.find(function (x) { return x.numero == _this.questaoAtiva.numero && x.tipo == _this.questaoAtiva.tipo; }).resposta.toLowerCase();
        this._appService.indiceResposta = EIndiceResposta[resposta];
        this._appService.questaoAtiva = this.questaoAtiva;
        this._appService.textoApoio = this.questaoAtiva.textoApoio;
        // Habilita ou não o texto de apoio no sidebar
        this.opcoesSidebar.textoDeApoio = this._appService.textoApoio ? true : false;
        this._appService.conteudo = [];
        this._appService.jogos = [];
        this._appService.exercicios = [];
        this._appService.videos = [];
        if (this.prova.gabaritos.find(function (x) { return x.numero == _this.questaoAtiva.numero && x.tipo == _this.questaoAtiva.tipo; }).percentual == 1) {
            this.opcoesSidebar.jogos = false;
            this.opcoesSidebar.videos = false;
            this.opcoesSidebar.conteudos = false;
            this.opcoesSidebar.exercicios = false;
            return;
        }
        this.obterAula(this.questaoAtiva.id);
        this.obterExercicios(this.questaoAtiva.id);
        // this.opcoesSidebar.exercicios = false; // remover quando for pra ter exercicios
    };
    ProvasPage.prototype.obterAula = function (id) {
        var _this = this;
        this._aulaService.listarAula(id).subscribe(function (data) {
            _this.tratarAula(JSON.parse(data._body));
        }, function () {
            _this.opcoesSidebar.jogos = false;
            _this.opcoesSidebar.videos = false;
            _this.opcoesSidebar.conteudos = false;
        });
    };
    ProvasPage.prototype.obterExercicios = function (id) {
        var _this = this;
        this._exerciciosService.listarExercicios(id).subscribe(function (data) {
            data = JSON.parse(data._body);
            _this._appService.exercicios = data.map(function (x) { return x.id; });
            !_this._appService.exercicios ? _this.opcoesSidebar.exercicios = false : null;
        }, function () { _this.opcoesSidebar.exercicios = false; });
    };
    ProvasPage.prototype.tratarAula = function (dados) {
        var _this = this;
        // console.log(dados)
        this._appService.conteudo = [];
        this._appService.jogos = [];
        this._appService.videos = [];
        dados.forEach(function (value) {
            if (value.tag.indexOf("video") != -1)
                _this._appService.videos.push(value.id);
            if (value.tag.indexOf("iteratividade") != -1)
                _this._appService.jogos.push(value.id);
            if (value.tag.indexOf("nivelamento") != -1 || value.tag == "")
                _this._appService.conteudo.push(value.id);
        });
        if (this._appService.videos.length == 0)
            this.opcoesSidebar.videos = false;
        if (this._appService.jogos.length == 0)
            this.opcoesSidebar.jogos = false;
        if (this._appService.conteudo.length == 0)
            this.opcoesSidebar.conteudos = false;
    };
    ProvasPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle('right');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProvasPage.prototype, "prova", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProvasPage.prototype, "questaoAtiva", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProvasPage.prototype, "opcoesSidebar", void 0);
    ProvasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-provas',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/provas.html"*/'             \n<header-obj [navCtrl]="navCtrl" [voltar]="voltar"></header-obj>\n\n<ion-content padding no-bounce>\n    <div class="row content-prova">\n        <div class="col">\n          <!-- <app-sidebar-prova *ngIf="prova" [prova]="prova" [opcoesSidebar]="opcoesSidebar"></app-sidebar-prova> -->\n\n          <div *ngIf="prova" class="row  head-prova">\n            <!-- <div *ngIf="prova.notaFinal" class="col-md-3 col-sm-4 col-12 nota">\n              <span>Nota: <b>{{ prova.notaFinal.toFixed(2) }}</b></span>\n            </div> -->\n            <!-- <div class="col-5 detalhes text-center">\n              <span style="margin-right: 40px;">\n                  <i class="fa fa-university" title="Check"></i>\n                  <span>Objetivo</span>\n              </span>\n              <span>\n                  <i class="fa fa-check" title="Check"></i>\n                  <span>Prova Concluída</span>\n              </span>    \n            </div> -->\n          \n            <!-- <div class="col-md-9 col-sm-8 col-12  questoes">\n              <div class="acertos">\n                Acerto(s)\n                <p>{{ prova.acertos }}</p>\n              </div>\n              <div class="parciais">\n                Parcial(is)\n                <p>{{ prova.parciais }}</p>\n              </div>\n              <div class="erros">\n                Erro(s)\n                <p>{{ prova.erros }}</p>\n              </div>        \n            </div> -->\n          \n          </div>\n          <detalhes></detalhes>\n          <alternative-bar style="display:none;" (trocaQuestao)="obterQuestao($event)" *ngIf="prova" [prova]="prova" ></alternative-bar>\n          \n        </div>\n    </div>\n    <div class="text-center" style="margin-bottom: 80px;">   \n        <button ion-button (click)="toggleMenu()" style="width: 70%;margin-top: 30px;" class="text-uppercase bot-primary bot">questões</button>\n    </div> \n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/provas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_provas_service__["a" /* ProvaService */], __WEBPACK_IMPORTED_MODULE_3__services_aula_service__["a" /* AulaService */], __WEBPACK_IMPORTED_MODULE_4__services_questoes_service__["a" /* QuestoesService */], __WEBPACK_IMPORTED_MODULE_5__services_exercicios_service__["a" /* ExerciciosService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_provas_service__["a" /* ProvaService */],
            __WEBPACK_IMPORTED_MODULE_6__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_3__services_aula_service__["a" /* AulaService */],
            __WEBPACK_IMPORTED_MODULE_4__services_questoes_service__["a" /* QuestoesService */],
            __WEBPACK_IMPORTED_MODULE_5__services_exercicios_service__["a" /* ExerciciosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], ProvasPage);
    return ProvasPage;
}());

var EIndiceResposta;
(function (EIndiceResposta) {
    EIndiceResposta[EIndiceResposta["a"] = 0] = "a";
    EIndiceResposta[EIndiceResposta["b"] = 1] = "b";
    EIndiceResposta[EIndiceResposta["c"] = 2] = "c";
    EIndiceResposta[EIndiceResposta["d"] = 3] = "d";
    EIndiceResposta[EIndiceResposta["e"] = 4] = "e";
    EIndiceResposta[EIndiceResposta["f"] = 5] = "f";
    EIndiceResposta[EIndiceResposta["g"] = 6] = "g";
    EIndiceResposta[EIndiceResposta["h"] = 7] = "h";
})(EIndiceResposta || (EIndiceResposta = {}));
//# sourceMappingURL=provas.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_touch_id__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_fingerprint_auth__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_crypto_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, _formBuilder, _loginService, alertCtrl, _appService, _renderer2, device, platform, touchId, androidFingerprintAuth, loadingController, _sharedService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._formBuilder = _formBuilder;
        this._loginService = _loginService;
        this.alertCtrl = alertCtrl;
        this._appService = _appService;
        this._renderer2 = _renderer2;
        this.device = device;
        this.platform = platform;
        this.touchId = touchId;
        this.androidFingerprintAuth = androidFingerprintAuth;
        this.loadingController = loadingController;
        this._sharedService = _sharedService;
        this.md5 = new __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__["Md5"]();
        this.navOptions = {
            animate: true,
            animation: 'ios-transition'
        };
        this.touchIdAvailable = false;
        this.fingerAuthAvailable = false;
        this.usedTouchId = false;
        this.usedFingerAuth = false;
        this.hasTouchId = false;
        this.hasFingerAuth = false;
        this.technologyAvailable = 'Touch ID';
        // this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'ios-animation' });
        __WEBPACK_IMPORTED_MODULE_9_jquery__('navdown').hide();
        this.platform.ready().then(function () {
            // iOS
            _this.touchId.isAvailable()
                .then(function (res) {
                // iPhone X
                if (_this.device.model.indexOf('iPhoneX') > -1) {
                    _this.technologyAvailable = 'Face ID';
                }
                _this.touchIdAvailable = true;
                _this.hasTouchId = true;
            }, function (err) { return console.error('TouchID is not available', err); });
            // Android
            _this.androidFingerprintAuth.isAvailable()
                .then(function (result) {
                if (result.isAvailable) {
                    // it is available
                    _this.fingerAuthAvailable = true;
                    _this.hasFingerAuth = true;
                }
                else {
                    // fingerprint auth isn't available
                }
            })
                .catch(function (error) { return console.error(error); });
            // this.platform.registerBackButtonAction(() => this.backButtonClick, 2)
        });
        this.formLogin = this._formBuilder.group({
            login: ['01010014215', [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].minLength(2)]],
            //login: ['', [Validators.required, Validators.minLength(2)]],      
            senha: ['2511', [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].minLength(2)]],
            //senha: ['', [Validators.required, Validators.minLength(2)]],
            origem: ''
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.ngOnInit = function () {
        // this.formLogin = this._formBuilder.group({
        //     login: [null, Validators.required],
        //     senha: [null, Validators.required],
        //     origem: 'Lyceum'
        // })
        // this.formLogin.controls['login'].setValue('01010009343');
        // this.formLogin.controls['senha'].setValue('01010009343');
        // let loader = document.querySelector('.load-bar');
        // this._renderer2.setStyle(document.querySelector('.loader'), 'display', 'none');
        // this.formLogin = this._formBuilder.group({
        //     login: [null],
        //     senha: [null],
        //     origem: 'Lyceum'
        // })
    };
    LoginPage.prototype.doLogin = function () {
        //this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'ios-animation' });
        var _this = this;
        this.loader = this.loadingController.create({
            content: "Autenticando, por favor aguarde..."
        });
        this.loader.present();
        var loader = document.querySelector('.loader');
        // this._renderer2.setStyle(loader, 'display', 'block');
        var login = this.formLogin.value.login;
        var senha = this.formLogin.value.senha;
        var lyceum = this.formLogin.value.origem;
        var body = "login=" + login + "&senha=" + senha + "&origem=" + lyceum + "&";
        //$('navdown').fadeIn(1000);
        this._loginService.authUser(body)
            .subscribe(function (dados) {
            // $('navdown').show(150);
            _this.loader.dismiss();
            // this._sharedService.showToaster('Logado com sucesso!', 1200);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */], null, { animate: true, animation: 'ios-animation' });
            localStorage.getItem('materias') ? localStorage.removeItem('materias') : false;
            // console.log(dados)
            // this._renderer2.setStyle(loader, 'display', 'none');
            var encryptedToken = __WEBPACK_IMPORTED_MODULE_11_crypto_js__["AES"].encrypt(dados.token, _this._appService.publicKey);
            // Criptografia do token de sessão.
            // 'utk' = User Token Key
            localStorage.setItem('utk', encryptedToken);
            _this._appService.decryptToken(encryptedToken);
            _this._appService.token = dados.token;
            sessionStorage.setItem('token', dados.token);
            _this._loginService.userAuth = true;
        }, function (data) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Atenção',
                subTitle: JSON.parse(data._body).notificacoes[0].mensagem,
                buttons: ['Ok']
            });
            alert.present();
        });
        //   error => {
        //     this._loginService.userAuth = false;
        //     console.log(this._loginService.userAuth)
        //     if(error.status === 400){
        //       // this._loginService.mostrarNav.emit(true);
        //       let listaErros = JSON.parse(error._body).notificacoes;
        //       listaErros.forEach((value, index) => {
        //         this.mensagemErro = listaErros[index].mensagem
        //       })
        //     } else{
        //       console.log(error)
        //     }
        //   });
        // if(!this.formLogin.valid)
        //   return;
        // let login = this.formLogin.value.login;
        // let senha = this.formLogin.value.senha;
        // let lyceum = this.formLogin.value.origem;
        // // let body = `login=${login}&senha=${Md5.hashStr(senha)}&origem=${lyceum}&`;
        // var navOptions = {
        //   animation: 'ios-transition'
        // };
        // $('navdown').fadeIn(1000);
        // this.navCtrl.push(HomePage, null, navOptions);
        // this._loginService.authUser(body)
        //   .then(() => {
        //     var navOptions = {
        //       animation: 'ios-transition'
        //     };
        //     this.navCtrl.push(HomePage, null, navOptions);
        //   })
        //   .catch(() => {
        //     let alert = this.alertCtrl.create({
        //       title: 'Atenção',
        //       subTitle: 'Usuário ou Senha inválidos.',
        //       buttons: ['Ok']
        //     });
        //     alert.present();
        //   });
    };
    LoginPage.prototype.logarFake = function () {
        var _this = this;
        // if (this.formLogin.valid) {
        this.loader = this.loadingController.create({
            spinner: 'crescent',
            content: "Autenticando, por favor aguarde..."
        });
        this.loader.present();
        setTimeout(function () {
            _this.loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */], null, { animate: true, animation: 'ios-animation' });
        }, 1000);
        // } else {
        // $('input.is-invalid').eq(0).focus();
        // }
    };
    LoginPage.prototype.authViaTouchId = function () {
        var _this = this;
        this.touchId.verifyFingerprint('Toque no sensor para acessar a sua conta.')
            .then(function (res) {
            _this.logarFake();
        }, function (err) { return console.error('Error', err); });
    };
    LoginPage.prototype.authViaFingerAuth = function () {
        var _this = this;
        this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
            .then(function (result) {
            if (result) {
                _this.logarFake();
            }
        })
            .catch(function (error) {
            if (error === _this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                console.log('Fingerprint authentication cancelled');
            }
            else
                console.error(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/login/login.html"*/'\n\n<ion-content no-bounce>\n\n<div class="container-fluid">\n  <div class="bg-login"></div>\n  <div class="gradiente-bg"></div>\n  \n  <div class="container-fluid">\n    <div class="row align-items-center justify-content-md-center box-login-pai">\n       \n        <div class="col-sm-12">\n            <div class="box-login text-center">\n    \n                <figure>\n                    <h1>\n                  <img src="assets/img/logo-objetivo.svg" alt="logo-objetvo">\n                </h1>\n                </figure>\n                <!-- INPUT LOGIN -->\n                <form [formGroup]="formLogin">\n\n                    <div class="col-auto margin-30">                        \n                        <select formControlName="origem" class="form-control" style="height: calc(3rem + 2px);">\n                            <option value="">Selecione uma origem</option>\n                            <option value="ColegioObjetivo">Colégio Objetivo</option>\n                            <option value="ObjetivoConveniada">Objetivo Conveniada</option>                         \n                        </select>\n                    </div>\n\n                    <div class="col-auto margin-30">\n                        <label class="sr-only" for="inputUser">Nome do usuário</label>\n                        <div class="input-group input-yellow mb-2">\n                            <div class="input-group-prepend">\n                                <div class="input-group-text color" \n                                [ngClass]="{\'is-invalid\': !formLogin.controls[\'login\'].valid && formLogin.controls[\'login\'].touched}">\n                                    <ion-icon name="ico-user-login"></ion-icon>\n                                </div>\n                            </div>\n                            <input type="text" class="form-control input-obj color input-login" formControlName="login" placeholder="Nome de usuário"\n                            [ngClass]="{\'is-invalid\': !formLogin.controls[\'login\'].valid && formLogin.controls[\'login\'].touched}">\n                        </div>\n                    </div>\n    \n                    <!-- INPUT SENHA -->\n                    <div class="col-auto margin-20">\n                        <label class="sr-only" for="inputPassword">Senha:</label>\n                        <div class="input-group input-yellow mb-2">\n                            <div class="input-group-prepend">\n                                <div class="input-group-text color"\n                                [ngClass]="{\'is-invalid\': !formLogin.controls[\'senha\'].valid && formLogin.controls[\'senha\'].touched}">\n                                    <ion-icon name="ico-key"></ion-icon>\n                                </div>\n                            </div>\n                            <input type="password" class="form-control input-obj color input-login" formControlName="senha" placeholder="Senha"\n                            [ngClass]="{\'is-invalid\': !formLogin.controls[\'senha\'].valid && formLogin.controls[\'senha\'].touched}">\n                        </div>\n                    </div>\n                </form>\n    \n                <!-- BOTÂO LOGIN -->\n                <section class="margin-30 bots-login">\n    \n                    <!-- SENHA INVALIDA -->\n                    <span *ngIf="mensagemErro" class="user-invalid">Usuário ou senha inválido.</span>\n                    \n                    <button type="submit" (click)="doLogin()" routerLink="" class="bot bot-login text-uppercase" style="width:70%">Entrar</button>\n                    <!-- <button type="submit" (click)="logarFake()" class="bot bot-login text-uppercase" style="width:70%">Entrar</button> -->\n                    <br>\n                    <p class="or" *ngIf="touchIdAvailable && hasTouchId">ou</p>\n					<button *ngIf="touchIdAvailable && hasTouchId" ion-button full class="touch-id-button" (click)="authViaTouchId()"><ion-icon name="finger-print" color="white" class="icon-finger" item-left></ion-icon> Acessar via {{ technologyAvailable }}</button>\n\n					<p class="or" *ngIf="fingerAuthAvailable && hasFingerAuth">ou</p>\n					<button *ngIf="fingerAuthAvailable && hasFingerAuth" ion-button full class="touch-id-button" (click)="authViaFingerAuth()">Acessar via <ion-icon name="finger-print" class="icon-finger android-icon" color="white" item-left></ion-icon></button>\n                    <!-- <a href="#" style="color: white;">Esqueceu sua senha?</a> -->\n                    <!-- <br>    -->\n\n                    <!-- <button type="submit" routerLink="" class="bot bot-red">\n                        <ion-icon name="ico-google"></ion-icon>Login com o Google</button>\n                    <br>\n                    <button type="submit" routerLink="" class="bot bot-third">\n                        <ion-icon name="ico-face"></ion-icon>Login com o Facebook</button> -->\n                </section>\n    \n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_touch_id__["a" /* TouchID */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_12__shared_shared_service__["a" /* SharedService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[400]);
//# sourceMappingURL=main.js.map