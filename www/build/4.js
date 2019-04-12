webpackJsonp([4],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlternativaProvaPageModule", function() { return AlternativaProvaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alternativa_prova__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlternativaProvaPageModule = /** @class */ (function () {
    function AlternativaProvaPageModule() {
    }
    AlternativaProvaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alternativa_prova__["a" /* AlternativaProvaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alternativa_prova__["a" /* AlternativaProvaPage */]),
            ],
        })
    ], AlternativaProvaPageModule);
    return AlternativaProvaPageModule;
}());

//# sourceMappingURL=alternativa-prova.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativaProvaPage; });
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
 * Generated class for the AlternativaProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlternativaProvaPage = /** @class */ (function () {
    function AlternativaProvaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlternativaProvaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlternativaProvaPage');
    };
    AlternativaProvaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alternativa-prova',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/questao/alternativa-prova/alternativa-prova.html"*/'<div class="m_question_alternative" style="width: 95%;">  \n  <ul class="container-alternative">\n     <li *ngFor="let item of questaoAtiva.alternativas; let indice = index" [class]="questaoAtiva.alternativas[indice].ehCorreta ? \'correct\' : indice == indiceResposta ? \'incorrect\' : \'\'">\n        <!-- <input type="radio" name="selector"> -->\n        <label [innerHTML]="item.descricao"></label>          \n        <div class="check">\n           <div class="inside"></div>\n        </div>\n     </li>       \n  </ul>\n</div>'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/questao/alternativa-prova/alternativa-prova.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AlternativaProvaPage);
    return AlternativaProvaPage;
}());

//# sourceMappingURL=alternativa-prova.js.map

/***/ })

});
//# sourceMappingURL=4.js.map