(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./WikolliApp/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./WikolliApp/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./WikolliApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./WikolliApp/app/app.component.css":
/*!******************************************!*\
  !*** ./WikolliApp/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJXaWtvbGxpQXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./WikolliApp/app/app.component.html":
/*!*******************************************!*\
  !*** ./WikolliApp/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n\n</router-outlet>\n"

/***/ }),

/***/ "./WikolliApp/app/app.component.ts":
/*!*****************************************!*\
  !*** ./WikolliApp/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WikolliApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./WikolliApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./WikolliApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./WikolliApp/app/app.module.ts":
/*!**************************************!*\
  !*** ./WikolliApp/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "./WikolliApp/app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./WikolliApp/app/app.component.ts");
/* harmony import */ var _components_composicao_composicao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/composicao/composicao.component */ "./WikolliApp/app/components/composicao/composicao.component.ts");
/* harmony import */ var _components_produto_procura_produto_procura_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/produto-procura/produto-procura.component */ "./WikolliApp/app/components/produto-procura/produto-procura.component.ts");
/* harmony import */ var _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/principal/principal.component */ "./WikolliApp/app/components/principal/principal.component.ts");











var router = [
    {
        path: "", component: _components_composicao_composicao_component__WEBPACK_IMPORTED_MODULE_8__["ComposicaoComponent"]
    },
    {
        path: "api/composicao/:id", component: _components_composicao_composicao_component__WEBPACK_IMPORTED_MODULE_8__["ComposicaoComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_composicao_composicao_component__WEBPACK_IMPORTED_MODULE_8__["ComposicaoComponent"],
                _components_produto_procura_produto_procura_component__WEBPACK_IMPORTED_MODULE_9__["ProdutoProcuraComponent"],
                _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_10__["PrincipalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(router, { useHash: true, enableTracing: true, onSameUrlNavigation: "reload" })
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./WikolliApp/app/components/composicao/composicao.component.css":
/*!***********************************************************************!*\
  !*** ./WikolliApp/app/components/composicao/composicao.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJXaWtvbGxpQXBwL2FwcC9jb21wb25lbnRzL2NvbXBvc2ljYW8vY29tcG9zaWNhby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./WikolliApp/app/components/composicao/composicao.component.html":
/*!************************************************************************!*\
  !*** ./WikolliApp/app/components/composicao/composicao.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-3\">\r\n    <app-produto-procura></app-produto-procura>\r\n  </div>\r\n\r\n  <div class=\"col-xs-6\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-hover\" *ngIf=\"composicao\">\r\n        <thead>\r\n          <tr>\r\n            <th>Descrição</th>\r\n            <th>Quantidade</th>\r\n            <th>Unidade</th>\r\n            <th>Valor Unitário</th>\r\n            <th>Valor Total\r\n            <th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of composicao; let i = index\">\r\n            <td>{{composicao[i].coM_DESCRICAO}}</td>\r\n            <td>{{composicao[i].coM_QUANTIDADE * quantityBox.value | number: '1.1-6'}}</td>\r\n            <td>{{composicao[i].coM_UNIDADE}}</td>\r\n            <td>{{composicao[i].coM_VALORUNITARIO | currency:'BRL':symbol:'1.1-2'}}</td>\r\n            <td>{{composicao[i].coM_VALORTOTAL * quantityBox.value | currency:'BRL':symbol:'1.1-2'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-3\">\r\n    <h4>Quantidade da produção</h4>\r\n    <input class=\"form-control\" value=\"1\" #quantityBox (input)=\"update(quantityBox.value)\" />\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./WikolliApp/app/components/composicao/composicao.component.ts":
/*!**********************************************************************!*\
  !*** ./WikolliApp/app/components/composicao/composicao.component.ts ***!
  \**********************************************************************/
/*! exports provided: ComposicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposicaoComponent", function() { return ComposicaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var WikolliApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! WikolliApp/app/services/data.service */ "./WikolliApp/app/services/data.service.ts");
/* harmony import */ var WikolliApp_app_models_composicao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! WikolliApp/app/models/composicao */ "./WikolliApp/app/models/composicao.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ComposicaoComponent = /** @class */ (function () {
    function ComposicaoComponent(route, data, router) {
        var _this = this;
        this.route = route;
        this.data = data;
        this.router = router;
        this.id = 0;
        this.quantity = "";
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.router.navigated = false;
            }
        });
    }
    ComposicaoComponent.prototype.ngOnInit = function () {
        this.getComposicao();
    };
    ComposicaoComponent.prototype.getComposicao = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
        //const id = +this.route.snapshot.paramMap.get('id');
        this.data.procuraComposicao(this.id).subscribe(function (composicao) { return _this.composicao = composicao; });
    };
    ComposicaoComponent.prototype.update = function (value) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", WikolliApp_app_models_composicao__WEBPACK_IMPORTED_MODULE_3__["Composicao"])
    ], ComposicaoComponent.prototype, "composicao", void 0);
    ComposicaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-composicao',
            template: __webpack_require__(/*! ./composicao.component.html */ "./WikolliApp/app/components/composicao/composicao.component.html"),
            styles: [__webpack_require__(/*! ./composicao.component.css */ "./WikolliApp/app/components/composicao/composicao.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], WikolliApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ComposicaoComponent);
    return ComposicaoComponent;
}());



/***/ }),

/***/ "./WikolliApp/app/components/principal/principal.component.css":
/*!*********************************************************************!*\
  !*** ./WikolliApp/app/components/principal/principal.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJXaWtvbGxpQXBwL2FwcC9jb21wb25lbnRzL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./WikolliApp/app/components/principal/principal.component.html":
/*!**********************************************************************!*\
  !*** ./WikolliApp/app/components/principal/principal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-5\">\r\n    <app-produto-procura></app-produto-procura>\r\n  </div>\r\n  <div class=\"col-xs-7\">\r\n    <app-composicao></app-composicao>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./WikolliApp/app/components/principal/principal.component.ts":
/*!********************************************************************!*\
  !*** ./WikolliApp/app/components/principal/principal.component.ts ***!
  \********************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./WikolliApp/app/components/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./WikolliApp/app/components/principal/principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./WikolliApp/app/components/produto-procura/produto-procura.component.css":
/*!*********************************************************************************!*\
  !*** ./WikolliApp/app/components/produto-procura/produto-procura.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJXaWtvbGxpQXBwL2FwcC9jb21wb25lbnRzL3Byb2R1dG8tcHJvY3VyYS9wcm9kdXRvLXByb2N1cmEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./WikolliApp/app/components/produto-procura/produto-procura.component.html":
/*!**********************************************************************************!*\
  !*** ./WikolliApp/app/components/produto-procura/produto-procura.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\r\n  <h4>Pesquisa de produtos</h4>\r\n\r\n  <input class=\"form-control\" #searchBox id=\"app-produto-procura\" (input)=\"search(searchBox.value)\" />\r\n\r\n  <ul class=\"search-result\">\r\n    <li *ngFor=\"let produto of produtos$ | async\">\r\n      <a routerLink=\"/api/composicao/{{produto.prO_CODIGO}}\">\r\n        {{produto.prO_DESCRICAO}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./WikolliApp/app/components/produto-procura/produto-procura.component.ts":
/*!********************************************************************************!*\
  !*** ./WikolliApp/app/components/produto-procura/produto-procura.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProdutoProcuraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoProcuraComponent", function() { return ProdutoProcuraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var WikolliApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! WikolliApp/app/services/data.service */ "./WikolliApp/app/services/data.service.ts");





var ProdutoProcuraComponent = /** @class */ (function () {
    function ProdutoProcuraComponent(data) {
        this.data = data;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ProdutoProcuraComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ProdutoProcuraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.produtos$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.data.procuraProduto(term); }));
    };
    ProdutoProcuraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto-procura',
            template: __webpack_require__(/*! ./produto-procura.component.html */ "./WikolliApp/app/components/produto-procura/produto-procura.component.html"),
            styles: [__webpack_require__(/*! ./produto-procura.component.css */ "./WikolliApp/app/components/produto-procura/produto-procura.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [WikolliApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ProdutoProcuraComponent);
    return ProdutoProcuraComponent;
}());



/***/ }),

/***/ "./WikolliApp/app/models/composicao.ts":
/*!*********************************************!*\
  !*** ./WikolliApp/app/models/composicao.ts ***!
  \*********************************************/
/*! exports provided: Composicao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Composicao", function() { return Composicao; });
var Composicao = /** @class */ (function () {
    function Composicao() {
    }
    return Composicao;
}());



/***/ }),

/***/ "./WikolliApp/app/services/data.service.ts":
/*!*************************************************!*\
  !*** ./WikolliApp/app/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.produtoUrl = "/api/produto";
        this.composicaoUrl = "/api/composicao";
    }
    DataService.prototype.carregarProdutos = function () {
        return this.http.get(this.produtoUrl)
            .map(function (data) {
            return data;
        });
    };
    DataService.prototype.procuraProduto = function (term) {
        if (!term.trim)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        return this.http.get(this.produtoUrl + "/pro_descricao/" + term)
            .map(function (data) {
            return data;
        });
    };
    DataService.prototype.carregarComposicao = function () {
        return this.http.get(this.composicaoUrl)
            .map(function (data) {
            return data;
        });
    };
    DataService.prototype.procuraComposicao = function (term) {
        return this.http.get(this.composicaoUrl + "/" + term)
            .map(function (data) {
            return data;
        });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./WikolliApp/environments/environment.ts":
/*!************************************************!*\
  !*** ./WikolliApp/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./WikolliApp/main.ts":
/*!****************************!*\
  !*** ./WikolliApp/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./WikolliApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./WikolliApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./WikolliApp/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\C\Wikolli\Wikolli.Solution\Wikolli.API\WikolliApp\main.ts */"./WikolliApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map