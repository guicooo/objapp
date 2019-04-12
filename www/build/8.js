webpackJsonp([8],{

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_editar_usuario_editar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_redefinir_usuario_redefinir__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usuario_redefinir_valida_senha_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_module__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_4__usuario_editar_usuario_editar__["a" /* UsuarioEditarPage */],
                __WEBPACK_IMPORTED_MODULE_5__usuario_redefinir_usuario_redefinir__["a" /* UsuarioRedefinirPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_4__usuario_editar_usuario_editar__["a" /* UsuarioEditarPage */],
                __WEBPACK_IMPORTED_MODULE_5__usuario_redefinir_usuario_redefinir__["a" /* UsuarioRedefinirPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__app_app_module__["a" /* AppModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usuario__["a" /* UsuarioPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_6__usuario_redefinir_valida_senha_service__["a" /* ValidaSenhaService */]]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());

//# sourceMappingURL=usuario.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map