webpackJsonp([1],{

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolucaoPageModule", function() { return ResolucaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolucao__ = __webpack_require__(565);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResolucaoPageModule = /** @class */ (function () {
    function ResolucaoPageModule() {
    }
    ResolucaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resolucao__["a" /* ResolucaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resolucao__["a" /* ResolucaoPage */]),
            ],
        })
    ], ResolucaoPageModule);
    return ResolucaoPageModule;
}());

//# sourceMappingURL=resolucao.module.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolucaoPage; });
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
 * Generated class for the ResolucaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResolucaoPage = /** @class */ (function () {
    function ResolucaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResolucaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResolucaoPage');
    };
    ResolucaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resolucao',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/resolucao/resolucao.html"*/'<app-title-page-prova *ngIf="appService.questaoAtiva" [color]="\'orange\'" [title]="appService.questaoAtiva.tipo == \'Discursiva\' ? \'Resolução\' : \'Gabarito\'" [hideTrilha]="false"></app-title-page-prova>\n<div *ngIf="appService.questaoAtiva">\n    <app-alternativa-prova  [questaoAtiva]="appService.questaoAtiva" *ngIf="appService.questaoAtiva && appService.questaoAtiva.tipo != \'Discursiva\'"></app-alternativa-prova>\n    <app-dissertativa-prova [questaoAtiva]="appService.questaoAtiva" *ngIf="appService.questaoAtiva && appService.questaoAtiva.tipo == \'Discursiva\'"></app-dissertativa-prova>\n</div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/resolucao/resolucao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ResolucaoPage);
    return ResolucaoPage;
}());

//# sourceMappingURL=resolucao.js.map

/***/ })

});
//# sourceMappingURL=1.js.map