webpackJsonp([6],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesPageModule", function() { return DetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhes__ = __webpack_require__(559);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhesPageModule = /** @class */ (function () {
    function DetalhesPageModule() {
    }
    DetalhesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhes__["a" /* DetalhesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhes__["a" /* DetalhesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__detalhes__["a" /* DetalhesPage */]
            ]
        })
    ], DetalhesPageModule);
    return DetalhesPageModule;
}());

//# sourceMappingURL=detalhes.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesPage; });
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
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalhesPage = /** @class */ (function () {
    function DetalhesPage(appService, navCtrl, navParams) {
        this.appService = appService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(appService);
    }
    DetalhesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhesPage');
    };
    DetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detalhes',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/detalhes/detalhes.html"*/'<app-title-page-prova  *ngIf="appService.provaAtiva" [color]="\'red\'" [title]="appService.provaAtiva.rotulo" [hideTrilha]="false"></app-title-page-prova>\n<app-cabecalho *ngIf="appService.questaoAtiva" [questaoAtiva]="appService.questaoAtiva"></app-cabecalho>\n<app-enunciado *ngIf="appService.questaoAtiva" [questaoAtiva]="appService.questaoAtiva"></app-enunciado>\n<div *ngIf="appService.provaAtiva && appService.questaoAtiva && appService.questaoAtiva.alternativas && appService.questaoAtiva.alternativas.length > 0" class="m_question_alternative">\n    <ul class="container-alternative">\n        <li *ngFor="let item of appService.questaoAtiva.alternativas; let indice = index"\n            [class]="indice == appService.indiceResposta ? appService.questaoAtiva.alternativas[indice].ehCorreta ? \'correct\' : \'incorrect\' : \'\'">           \n            <!-- <input disabled type="radio" name="selector"> -->\n            <label [innerHTML]="item.descricao"></label>            \n            <div class="check">\n                <div class="inside"></div>\n            </div>\n        </li>       \n    </ul>\n</div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/detalhes/detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], DetalhesPage);
    return DetalhesPage;
}());

//# sourceMappingURL=detalhes.js.map

/***/ })

});
//# sourceMappingURL=6.js.map