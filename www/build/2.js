webpackJsonp([2],{

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DissertativaPageModule", function() { return DissertativaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dissertativa__ = __webpack_require__(564);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DissertativaPageModule = /** @class */ (function () {
    function DissertativaPageModule() {
    }
    DissertativaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dissertativa__["a" /* DissertativaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dissertativa__["a" /* DissertativaPage */]),
            ],
        })
    ], DissertativaPageModule);
    return DissertativaPageModule;
}());

//# sourceMappingURL=dissertativa.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DissertativaPage; });
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
 * Generated class for the DissertativaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DissertativaPage = /** @class */ (function () {
    function DissertativaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DissertativaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DissertativaPage');
    };
    DissertativaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dissertativa',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/questao/dissertativa/dissertativa.html"*/'<div *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" class="btn-sugestaao text-center" data-toggle="modal" data-target="#exampleModal">\n  <i class="fas fa-comment"></i>\n  <i class="fas fa-exclamation"></i><br>\n\n   <span>Sugestões</span>\n</div>\n\n<a class="btn btn-resposta" data-toggle="collapse" href="#collapseResposta" role="button" aria-expanded="false" aria-controls="collapseResposta">\nResposta\n</a>\n\n<div *ngIf="!ultimo" class="btn-group group-btn-prova">\n  <button type="button" id="avancar" (click)="avancarClick()" class="btn btn-avanca">Avançar</button>        \n</div>\n\n\n<div class="collapse" id="collapseResposta">\n<div  class="card card-body"> \n    <div *ngIf="questaoAtiva.resposta" [innerHTML]="questaoAtiva.resposta"></div>   \n    <div *ngIf="questaoAtiva.respostaImg">\n        <img  [src]="appService.urlImagemTarefaNet + questaoAtiva.respostaImg.toString().replace(\'~/\',\'\')">\n    </div>\n</div>  \n\n</div>\n\n\n<app-sugestoes *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" [questaoAtiva]="questaoAtiva"></app-sugestoes>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/questao/dissertativa/dissertativa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], DissertativaPage);
    return DissertativaPage;
}());

//# sourceMappingURL=dissertativa.js.map

/***/ })

});
//# sourceMappingURL=2.js.map