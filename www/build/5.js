webpackJsonp([5],{

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugestoesPageModule", function() { return SugestoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sugestoes__ = __webpack_require__(563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SugestoesPageModule = /** @class */ (function () {
    function SugestoesPageModule() {
    }
    SugestoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sugestoes__["a" /* SugestoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sugestoes__["a" /* SugestoesPage */]),
            ],
        })
    ], SugestoesPageModule);
    return SugestoesPageModule;
}());

//# sourceMappingURL=sugestoes.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SugestoesPage; });
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
 * Generated class for the SugestoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SugestoesPage = /** @class */ (function () {
    function SugestoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SugestoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SugestoesPage');
    };
    SugestoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sugestoes',template:/*ion-inline-start:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/exercicios/sugestoes/sugestoes.html"*/'\n    \n<!-- Modal -->\n<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n      <div class="modal-content">\n          <div class="modal-header">\n              <h5 class="modal-title" id="exampleModalLabel">Sugestões</h5>\n              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n              </button>\n          </div>\n          <div class="yellow">\n              <ul *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" class="number-title-sugestoes">\n                  <li *ngFor="let item of questaoAtiva.sugestoes; let i = index" \n                      [class]="i == 0 ? \'ativo\' : \'\'" \n                      (click)="obter(item, $event)">{{ i + 1 }}</li>           \n              </ul>\n          </div>\n          <div *ngIf="questaoAtiva && questaoAtiva.sugestoes.length > 0" [innerHTML]="sugestaoAtiva" class="modal-body">\n          \n          </div>\n          <div>\n              <img *ngIf="imgSugestaoAtiva" [src]="imgSugestaoAtiva">\n          </div>\n          <!-- <div class="modal-footer">\n              <button type="button" data-dismiss="modal" aria-label="Close" class="btn btn-close">Sair</button>\n          </div> -->\n      </div>\n  </div>\n</div>\n\n'/*ion-inline-end:"/Users/eddigital/Documents/projetos/objetivoappionic/src/pages/provas/exercicios/sugestoes/sugestoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SugestoesPage);
    return SugestoesPage;
}());

//# sourceMappingURL=sugestoes.js.map

/***/ })

});
//# sourceMappingURL=5.js.map