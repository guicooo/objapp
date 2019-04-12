webpackJsonp([14],{

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPageModule", function() { return NotasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notas_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notas_lista_provas_notas_lista_provas__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notas_detalhes_notas_detalhes__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotasPageModule = /** @class */ (function () {
    function NotasPageModule() {
    }
    NotasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_4__notas_lista_provas_notas_lista_provas__["a" /* NotasListaProvasPage */],
                __WEBPACK_IMPORTED_MODULE_5__notas_detalhes_notas_detalhes__["a" /* NotasDetalhesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */]),
            ],
            entryComponents: [
                // NotasPage,
                __WEBPACK_IMPORTED_MODULE_4__notas_lista_provas_notas_lista_provas__["a" /* NotasListaProvasPage */],
                __WEBPACK_IMPORTED_MODULE_5__notas_detalhes_notas_detalhes__["a" /* NotasDetalhesPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__notas_service__["a" /* NotasService */]]
        })
    ], NotasPageModule);
    return NotasPageModule;
}());

//# sourceMappingURL=notas.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map