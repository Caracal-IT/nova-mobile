webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = __WEBPACK_IMPORTED_MODULE_2__app_core__["d" /* Route */].withShell([
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */], data: { title: Object(__WEBPACK_IMPORTED_MODULE_2__app_core__["e" /* extract */])('About') } }
]);
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
            providers: []
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"jumbotron text-center\">\n    <h1>\n      <span translate>APP_NAME</span>\n    </h1>\n    <p>\n      <i class=\"fa fa-bookmark-o\"></i> <span translate>Version</span> {{version}}\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.version = __WEBPACK_IMPORTED_MODULE_1__env_environment__["a" /* environment */].version;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_routing_module__ = __webpack_require__("./src/app/about/about-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__about_routing_module__["a" /* AboutRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__about_component__["a" /* AboutComponent */]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__("./node_modules/@ionic-native/keyboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__("./node_modules/@ionic-native/status-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__("./node_modules/@ionic-native/splash-screen/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__env_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var log = new __WEBPACK_IMPORTED_MODULE_10__app_core__["c" /* Logger */]('App');
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, translateService, zone, keyboard, statusBar, splashScreen, i18nService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.translateService = translateService;
        this.zone = zone;
        this.keyboard = keyboard;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.i18nService = i18nService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setup logger
        if (__WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].production) {
            __WEBPACK_IMPORTED_MODULE_10__app_core__["c" /* Logger */].enableProductionMode();
        }
        log.debug('init');
        // Setup translations
        this.i18nService.init(__WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].defaultLanguage, __WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].supportedLanguages);
        var onNavigationEnd = this.router.events.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["b" /* filter */])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }));
        // Change page title on navigation or language change, based on route data
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_merge__["a" /* merge */])(this.translateService.onLangChange, onNavigationEnd)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["d" /* map */])(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["b" /* filter */])(function (route) { return route.outlet === 'primary'; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["e" /* mergeMap */])(function (route) { return route.data; }))
            .subscribe(function (event) {
            var title = event['title'];
            if (title) {
                _this.titleService.setTitle(_this.translateService.instant(title));
            }
        });
        // Cordova platform and plugins initialization
        document.addEventListener('deviceready', function () {
            _this.zone.run(function () { return _this.onCordovaReady(); });
        }, false);
    };
    AppComponent.prototype.onCordovaReady = function () {
        if (window['cordova']) {
            this.keyboard.hideKeyboardAccessoryBar(true);
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__app_core__["b" /* I18nService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__("./node_modules/@ionic-native/keyboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__("./node_modules/@ionic-native/status-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__("./node_modules/@ionic-native/splash-screen/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_module__ = __webpack_require__("./src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_nova_paper__ = __webpack_require__("./node_modules/nova-paper/esm5/nova-paper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_nova_forms__ = __webpack_require__("./node_modules/nova-forms/nova-forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_nova_workflow__ = __webpack_require__("./node_modules/nova-workflow/esm5/nova-workflow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_state_machine_services_ToastyNotificationsService__ = __webpack_require__("./src/app/state-machine/services/ToastyNotificationsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_state_machine_services_NgTranslateTranslatorService__ = __webpack_require__("./src/app/state-machine/services/NgTranslateTranslatorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_state_machine_services_MobileWorkflowProviderService__ = __webpack_require__("./src/app/state-machine/services/MobileWorkflowProviderService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_state_machine_state_machine_module__ = __webpack_require__("./src/app/state-machine/state-machine.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
        __WEBPACK_IMPORTED_MODULE_17_nova_workflow__["e" /* WorkflowProviderService */].setUrl('http://192.168.1.3/api/workflow/[name]');
        __WEBPACK_IMPORTED_MODULE_16_nova_forms__["a" /* DynamicFormModule */].registerComponents();
        __WEBPACK_IMPORTED_MODULE_16_nova_forms__["a" /* DynamicFormModule */].addModules(__WEBPACK_IMPORTED_MODULE_15_nova_paper__["a" /* PaperModule */].getComponents());
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_nova_forms__["a" /* DynamicFormModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_16_nova_forms__["c" /* NovaTranslatorService */],
                    useClass: __WEBPACK_IMPORTED_MODULE_19__app_state_machine_services_NgTranslateTranslatorService__["a" /* NgTranslateTranslatorService */]
                }),
                __WEBPACK_IMPORTED_MODULE_15_nova_paper__["a" /* PaperModule */],
                __WEBPACK_IMPORTED_MODULE_17_nova_workflow__["d" /* WorkflowModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_17_nova_workflow__["a" /* NotificationsService */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__app_state_machine_services_ToastyNotificationsService__["a" /* ToastyNotificationsService */]
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_17_nova_workflow__["b" /* NovaFormService */],
                    useClass: __WEBPACK_IMPORTED_MODULE_16_nova_forms__["b" /* DynamicFormService */]
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_17_nova_workflow__["e" /* WorkflowProviderService */],
                    useClass: __WEBPACK_IMPORTED_MODULE_20__app_state_machine_services_MobileWorkflowProviderService__["a" /* MobileWorkflowProviderService */]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__app_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_module__["a" /* AboutModule */],
                __WEBPACK_IMPORTED_MODULE_21__app_state_machine_state_machine_module__["a" /* StateMachineModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createHttpService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shell_shell_component__ = __webpack_require__("./src/app/core/shell/shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shell_header_header_component__ = __webpack_require__("./src/app/core/shell/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__route_reusable_strategy__ = __webpack_require__("./src/app/core/route-reusable-strategy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__i18n_service__ = __webpack_require__("./src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_http_service__ = __webpack_require__("./src/app/core/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__http_http_cache_service__ = __webpack_require__("./src/app/core/http/http-cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












function createHttpService(backend, defaultOptions, httpCacheService) {
    return new __WEBPACK_IMPORTED_MODULE_10__http_http_service__["a" /* HttpService */](backend, defaultOptions, httpCacheService);
}
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(parentModule + " has already been loaded. Import Core module in the AppModule only.");
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__shell_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shell_shell_component__["a" /* ShellComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__i18n_service__["a" /* I18nService */],
                __WEBPACK_IMPORTED_MODULE_11__http_http_cache_service__["a" /* HttpCacheService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["h" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_11__http_http_cache_service__["a" /* HttpCacheService */]],
                    useFactory: createHttpService
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouteReuseStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_8__route_reusable_strategy__["a" /* RouteReusableStrategy */]
                }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http/http-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__("./src/app/core/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var log = new __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* Logger */]('HttpCacheService');
var cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
var HttpCacheService = /** @class */ (function () {
    function HttpCacheService() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param {!string} url The request URL.
     * @param {any} params Optional request query parameters.
     * @param {ResponseOptions} data The received data.
     * @param {Date=} lastUpdated The cache last update, current date is used if not specified.
     */
    HttpCacheService.prototype.setCacheData = function (url, params, data, lastUpdated) {
        var cacheKey = this.getCacheKey(url, params);
        this.cachedData[cacheKey] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        log.debug('Cache set for key: "' + cacheKey + '"');
        this.saveCacheData();
    };
    /**
     * Gets the cached data for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     * @return {?ResponseOptions} The cached data or null if no cached data exists for this request.
     */
    HttpCacheService.prototype.getCacheData = function (url, params) {
        var cacheKey = this.getCacheKey(url, params);
        var cacheEntry = this.cachedData[cacheKey];
        if (cacheEntry) {
            log.debug('Cache hit for key: "' + cacheKey + '"');
            return cacheEntry.data;
        }
        return null;
    };
    /**
     * Gets the cached entry for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     * @return {?HttpCacheEntry} The cache entry or null if no cache entry exists for this request.
     */
    HttpCacheService.prototype.getHttpCacheEntry = function (url, params) {
        return this.cachedData[this.getCacheKey(url, params)] || null;
    };
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     */
    HttpCacheService.prototype.clearCache = function (url, params) {
        var cacheKey = this.getCacheKey(url, params);
        this.cachedData[cacheKey] = null;
        log.debug('Cache cleared for key: "' + cacheKey + '"');
        this.saveCacheData();
    };
    /**
     * Cleans cache entries older than the specified date.
     * @param {date=} expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    HttpCacheService.prototype.cleanCache = function (expirationDate) {
        var _this = this;
        if (expirationDate) {
            Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["each"])(this.cachedData, function (value, key) {
                if (expirationDate >= value.lastUpdated) {
                    delete _this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    };
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param {'local'|'session'=} persistence How the cache should be persisted, it can be either local or session
     *   storage, or if no value is provided it will be only in-memory (default).
     */
    HttpCacheService.prototype.setPersistence = function (persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    };
    HttpCacheService.prototype.getCacheKey = function (url, params) {
        return url + (params ? JSON.stringify(params) : '');
    };
    HttpCacheService.prototype.saveCacheData = function () {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    };
    HttpCacheService.prototype.loadCacheData = function () {
        var data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? JSON.stringify(data) : {};
    };
    HttpCacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HttpCacheService);
    return HttpCacheService;
}());



/***/ }),

/***/ "./src/app/core/http/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logger_service__ = __webpack_require__("./src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_cache_service__ = __webpack_require__("./src/app/core/http/http-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__request_options_args__ = __webpack_require__("./src/app/core/http/request-options-args.ts");
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










var log = new __WEBPACK_IMPORTED_MODULE_7__logger_service__["a" /* Logger */]('HttpService');
/**
 * Provides a base framework for http service extension.
 * The default extension adds support for API prefixing, request caching and default error handler.
 */
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, httpCacheService) {
        var _this = 
        // Customize default options here if needed
        _super.call(this, backend, defaultOptions) || this;
        _this.defaultOptions = defaultOptions;
        _this.httpCacheService = httpCacheService;
        return _this;
    }
    /**
     * Performs any type of http request.
     * You can customize this method with your own extended behavior.
     */
    HttpService.prototype.request = function (request, options) {
        var _this = this;
        var requestOptions = options || {};
        var url;
        if (typeof request === 'string') {
            url = request;
            request = __WEBPACK_IMPORTED_MODULE_6__env_environment__["a" /* environment */].serverUrl + url;
        }
        else {
            url = request.url;
            request.url = __WEBPACK_IMPORTED_MODULE_6__env_environment__["a" /* environment */].serverUrl + url;
        }
        if (!requestOptions.cache) {
            // Do not use cache
            return this.httpRequest(request, requestOptions);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (subscriber) {
                var cachedData = requestOptions.cache === __WEBPACK_IMPORTED_MODULE_9__request_options_args__["a" /* HttpCachePolicy */].Update ?
                    null : _this.httpCacheService.getCacheData(url);
                if (cachedData !== null) {
                    // Create new response to avoid side-effects
                    subscriber.next(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */](cachedData));
                    subscriber.complete();
                }
                else {
                    _this.httpRequest(request, requestOptions).subscribe(function (response) {
                        // Store the serializable version of the response
                        _this.httpCacheService.setCacheData(url, null, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ResponseOptions */]({
                            body: response.text(),
                            status: response.status,
                            headers: response.headers,
                            statusText: response.statusText,
                            type: response.type,
                            url: response.url
                        }));
                        subscriber.next(response);
                    }, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
                }
            });
        }
    };
    HttpService.prototype.get = function (url, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get }));
    };
    HttpService.prototype.post = function (url, body, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post
        }));
    };
    HttpService.prototype.put = function (url, body, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put
        }));
    };
    HttpService.prototype.delete = function (url, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete }));
    };
    HttpService.prototype.patch = function (url, body, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch
        }));
    };
    HttpService.prototype.head = function (url, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head }));
    };
    HttpService.prototype.options = function (url, options) {
        return this.request(url, Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Options }));
    };
    // Customize the default behavior for all http requests here if needed
    HttpService.prototype.httpRequest = function (request, options) {
        var _this = this;
        var req = _super.prototype.request.call(this, request, options);
        if (!options.skipErrorHandler) {
            req = req.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return _this.errorHandler(error); }));
        }
        return req;
    };
    // Customize the default error handler here if needed
    HttpService.prototype.errorHandler = function (response) {
        if (__WEBPACK_IMPORTED_MODULE_6__env_environment__["a" /* environment */].production) {
            // Avoid unchaught exceptions on production
            log.error('Request error', response);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__["a" /* _throw */])(response);
        }
        throw response;
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_8__http_cache_service__["a" /* HttpCacheService */]])
    ], HttpService);
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));



/***/ }),

/***/ "./src/app/core/http/request-options-args.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCachePolicy; });
/**
 * Cache policy for HTTP requests.
 * With the value 'Never' the request is always made and the cache is not used.
 * With the value 'Always' the request result is fetched from cache if possible, or the request is made and cached.
 * If the value 'Update' is used, a request will be forced and the cache entry updated.
 */
var HttpCachePolicy;
(function (HttpCachePolicy) {
    HttpCachePolicy[HttpCachePolicy["Never"] = false] = "Never";
    HttpCachePolicy[HttpCachePolicy["Always"] = true] = "Always";
    HttpCachePolicy[HttpCachePolicy["Update"] = 'update'] = "Update";
})(HttpCachePolicy || (HttpCachePolicy = {}));


/***/ }),

/***/ "./src/app/core/i18n.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extract;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service__ = __webpack_require__("./src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_en_US_json__ = __webpack_require__("./src/translations/en-US.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_en_US_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__translations_en_US_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__translations_fr_FR_json__ = __webpack_require__("./src/translations/fr-FR.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__translations_fr_FR_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__translations_fr_FR_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var log = new __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */]('I18nService');
var languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param {string} s The string to extract for translation.
 * @return {string} The same string.
 */
function extract(s) {
    return s;
}
var I18nService = /** @class */ (function () {
    function I18nService(translateService) {
        this.translateService = translateService;
        // Embed languages to avoid extra HTTP requests
        translateService.setTranslation('en-US', __WEBPACK_IMPORTED_MODULE_4__translations_en_US_json__);
        translateService.setTranslation('fr-FR', __WEBPACK_IMPORTED_MODULE_5__translations_fr_FR_json__);
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param {!string} defaultLanguage The default language to use.
     * @param {Array.<String>} supportedLanguages The list of supported languages.
     */
    I18nService.prototype.init = function (defaultLanguage, supportedLanguages) {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = '';
        this.translateService.onLangChange
            .subscribe(function (event) { localStorage.setItem(languageKey, event.lang); });
    };
    Object.defineProperty(I18nService.prototype, "language", {
        /**
         * Gets the current language.
         * @return {string} The current language code.
         */
        get: function () {
            return this.translateService.currentLang;
        },
        /**
         * Sets the current language.
         * Note: The current language is saved to the local storage.
         * If no parameter is specified, the language is loaded from local storage (if present).
         * @param {string} language The IETF language code to set.
         */
        set: function (language) {
            language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
            var isSupportedLanguage = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["includes"])(this.supportedLanguages, language);
            // If no exact match is found, search without the region
            if (language && !isSupportedLanguage) {
                language = language.split('-')[0];
                language = this.supportedLanguages.find(function (supportedLanguage) { return supportedLanguage.startsWith(language); }) || '';
                isSupportedLanguage = Boolean(language);
            }
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
                language = this.defaultLanguage;
            }
            log.debug("Language set to " + language);
            this.translateService.use(language);
        },
        enumerable: true,
        configurable: true
    });
    I18nService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */]])
    ], I18nService);
    return I18nService;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_service__ = __webpack_require__("./src/app/core/i18n.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__i18n_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http_service__ = __webpack_require__("./src/app/core/http/http.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http_cache_service__ = __webpack_require__("./src/app/core/http/http-cache.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_service__ = __webpack_require__("./src/app/core/route.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__route_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_reusable_strategy__ = __webpack_require__("./src/app/core/route-reusable-strategy.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__("./src/app/core/logger.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__logger_service__["a"]; });









/***/ }),

/***/ "./src/app/core/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogLevel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];
    return Logger;
}());



/***/ }),

/***/ "./src/app/core/route-reusable-strategy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteReusableStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
var RouteReusableStrategy = /** @class */ (function (_super) {
    __extends(RouteReusableStrategy, _super);
    function RouteReusableStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteReusableStrategy.prototype.shouldDetach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.store = function (route, detachedTree) { };
    RouteReusableStrategy.prototype.shouldAttach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.retrieve = function (route) {
        return null;
    };
    RouteReusableStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return (future.routeConfig === curr.routeConfig) || future.data.reuse;
    };
    return RouteReusableStrategy;
}(__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouteReuseStrategy */]));



/***/ }),

/***/ "./src/app/core/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shell_shell_component__ = __webpack_require__("./src/app/core/shell/shell.component.ts");

/**
 * Provides helper methods to create routes.
 */
var Route = /** @class */ (function () {
    function Route() {
    }
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return {Routes} The new routes using shell as the base.
     */
    Route.withShell = function (routes) {
        return [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__shell_shell_component__["a" /* ShellComponent */],
                children: routes,
                // Reuse ShellComponent instance when navigating between child views
                data: { reuse: true }
            }];
    };
    return Route;
}());



/***/ }),

/***/ "./src/app/core/shell/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"https://github.com/ngx-rocket\" translate>APP_NAME</a>\n    <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbar-menu\"\n            aria-label=\"Toggle navigation\" (click)=\"toggleMenu()\" [attr.aria-expanded]=\"!menuHidden\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div id=\"navbar-menu\" class=\"collapse navbar-collapse float-xs-none\" [ngbCollapse]=\"menuHidden\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link text-uppercase\" routerLink=\"/home\" routerLinkActive=\"active\">\n          <i class=\"fa fa-home\"></i>\n          <span translate>Home</span>\n        </a>\n        <a class=\"nav-item nav-link text-uppercase\" routerLink=\"/about\" routerLinkActive=\"active\">\n          <i class=\"fa fa-question-circle\"></i>\n          <span translate>About</span>\n        </a>\n\n        <a class=\"nav-item nav-link text-uppercase\" routerLink=\"/mobile\" routerLinkActive=\"active\">\n          <i class=\"fa fa-question-circle\"></i>\n          <span translate>Mobile</span>\n        </a>\n\n      </div>\n      <div class=\"navbar-nav ml-auto\">\n        <div class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n          <a id=\"language-dropdown\" class=\"nav-link\" ngbDropdownToggle>{{currentLanguage}}</a>\n          <div ngbDropdownMenu aria-labelledby=\"language-dropdown\">\n            <button class=\"dropdown-item\" *ngFor=\"let language of languages\" (click)=\"setLanguage(language)\">\n              {{language}}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/core/shell/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "/*\n * Application global variables.\n */\n.navbar {\n  margin-bottom: 1rem; }\n.nav-link.dropdown-toggle {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/core/shell/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_service__ = __webpack_require__("./src/app/core/i18n.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(i18nService) {
        this.i18nService = i18nService;
        this.menuHidden = true;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuHidden = !this.menuHidden;
    };
    HeaderComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    Object.defineProperty(HeaderComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/shell/header/header.component.html"),
            styles: [__webpack_require__("./src/app/core/shell/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/shell/shell.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div style=\"margin-left: 10px;margin-right: 10px;\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/core/shell/shell.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/shell/shell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () { };
    ShellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shell',
            template: __webpack_require__("./src/app/core/shell/shell.component.html"),
            styles: [__webpack_require__("./src/app/core/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = __WEBPACK_IMPORTED_MODULE_2__app_core__["d" /* Route */].withShell([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */], data: { title: Object(__WEBPACK_IMPORTED_MODULE_2__app_core__["e" /* extract */])('Home') } }
]);
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
            providers: []
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"jumbotron text-center\">\n    <h1>\n      <img class=\"logo\" src=\"assets/ngx-rocket-logo.png\" alt=\"angular logo\"/>\n      <span translate>Hello world !</span>\n    </h1>\n    <app-loader [isLoading]=\"isLoading\"></app-loader>\n    <q [hidden]=\"isLoading\">{{quote}}</q>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.logo {\n  width: 100px; }\nq {\n  font-style: italic;\n  font-size: 1.2rem;\n  quotes: \"« \" \" »\"; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quote_service__ = __webpack_require__("./src/app/home/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(quoteService) {
        this.quoteService = quoteService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.quoteService.getRandomQuote({ category: 'dev' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* finalize */])(function () { _this.isLoading = false; }))
            .subscribe(function (quote) { _this.quote = quote; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__quote_service__["a" /* QuoteService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quote_service__ = __webpack_require__("./src/app/home/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_routing_module__["a" /* HomeRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__quote_service__["a" /* QuoteService */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/quote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = {
    quote: function (c) { return "/jokes/random?category=" + c.category; }
};
var QuoteService = /** @class */ (function () {
    function QuoteService(http) {
        this.http = http;
    }
    QuoteService.prototype.getRandomQuote = function (context) {
        return this.http.get(routes.quote(context), { cache: true })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* map */])(function (res) { return res.json(); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* map */])(function (body) { return body.value; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])('Error, could not load joke :-('); }));
    };
    QuoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], QuoteService);
    return QuoteService;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_loader_component__ = __webpack_require__("./src/app/shared/loader/loader.component.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "./src/app/shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isLoading\" class=\"text-xs-center\">\n  <i class=\"fa fa-cog fa-spin fa-3x\"></i> <span>{{message}}</span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.scss":
/***/ (function(module, exports) {

module.exports = ".fa {\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.isLoading = false;
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "message", void 0);
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/shared/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/shared/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__ = __webpack_require__("./src/app/shared/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__["a" /* LoaderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__["a" /* LoaderComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/state-machine/services/MobileWorkflowProviderService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileWorkflowProviderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nova_workflow__ = __webpack_require__("./node_modules/nova-workflow/esm5/nova-workflow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
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


var MobileWorkflowProviderService = /** @class */ (function (_super) {
    __extends(MobileWorkflowProviderService, _super);
    function MobileWorkflowProviderService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.workflow = {
            name: 'mobile',
            activities: [
                {
                    name: 'start',
                    type: 'FormActivity',
                    form: {
                        controls: [
                            {
                                type: 'paper-header',
                                label: 'Personal Details',
                                name: 'header'
                            },
                            {
                                type: 'paper-input',
                                label: 'Firstname',
                                name: 'firstname',
                                placeholder: 'Please enter your firstname'
                            },
                            {
                                type: 'paper-input',
                                label: 'Surname',
                                name: 'surname',
                                placeholder: 'Please enter your surname'
                            },
                            {
                                type: 'paper-button',
                                label: 'Select Hotel',
                                name: 'select_hotel',
                                style: 'btn btn-outline-info',
                                nextActivity: 'select-hotel'
                            }
                        ]
                    }
                },
                {
                    name: 'select-hotel',
                    type: 'FormActivity',
                    form: {
                        controls: [
                            {
                                type: 'paper-header',
                                label: 'Hotel',
                                name: 'header'
                            },
                            {
                                type: 'paper-input',
                                label: 'Hotel Name',
                                name: 'hotel',
                                placeholder: 'Please enter your hotel name'
                            },
                            {
                                type: 'paper-input',
                                label: 'Room Number',
                                name: 'roomNumber',
                                placeholder: 'Please enter your room number'
                            },
                            {
                                type: 'paper-button',
                                label: 'Personal Details',
                                name: 'personal_details',
                                style: 'btn btn-outline-danger',
                                nextActivity: 'start'
                            },
                            {
                                type: 'paper-button',
                                label: 'Pay',
                                name: 'make_payment',
                                style: 'btn btn-outline-success',
                                nextActivity: 'payment-confirmation'
                            }
                        ]
                    }
                },
                {
                    name: 'payment-confirmation',
                    type: 'FormActivity',
                    form: {
                        controls: [
                            {
                                type: 'paper-header',
                                label: 'Reservation Confirmation',
                                name: 'header'
                            },
                            {
                                type: 'paper-label',
                                label: 'Welcome {{firstname}} {{surname}}, your reservation at the {{hotel}} is confirmed!!',
                                name: 'confirmation'
                            },
                            {
                                type: 'paper-input',
                                label: 'Reply',
                                name: 'reply',
                                placeholder: 'Please enter your reply'
                            },
                            {
                                type: 'paper-label',
                                label: 'Your reply: {{reply}}',
                                name: 'message-label'
                            }
                        ]
                    }
                }
            ]
        };
        return _this;
    }
    MobileWorkflowProviderService.prototype.getWorkflow = function (name) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var wf = JSON.parse(JSON.stringify(_this.workflow));
            console.log(wf);
            observer.next(wf);
        });
    };
    return MobileWorkflowProviderService;
}(__WEBPACK_IMPORTED_MODULE_0_nova_workflow__["e" /* WorkflowProviderService */]));



/***/ }),

/***/ "./src/app/state-machine/services/NgTranslateTranslatorService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTranslateTranslatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("./node_modules/ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nova_forms__ = __webpack_require__("./node_modules/nova-forms/nova-forms.es5.js");
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



var NgTranslateTranslatorService = /** @class */ (function (_super) {
    __extends(NgTranslateTranslatorService, _super);
    function NgTranslateTranslatorService(translate) {
        var _this = _super.call(this) || this;
        _this.translate = translate;
        return _this;
    }
    NgTranslateTranslatorService.prototype.get = function (key, interpolateParams) {
        return this
            .translate
            .get(key, interpolateParams);
    };
    NgTranslateTranslatorService.prototype.interpolate = function (expr, params) {
        return this.translate.parser.interpolate(expr, params);
    };
    NgTranslateTranslatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]])
    ], NgTranslateTranslatorService);
    return NgTranslateTranslatorService;
}(__WEBPACK_IMPORTED_MODULE_2_nova_forms__["c" /* NovaTranslatorService */]));



/***/ }),

/***/ "./src/app/state-machine/services/ToastyNotificationsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastyNotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastyNotificationsService = /** @class */ (function () {
    function ToastyNotificationsService() {
        this.waitId = -1;
    }
    ToastyNotificationsService.prototype.error = function (title, message) {
        console.log("error - " + title + " - " + message);
    };
    ToastyNotificationsService.prototype.success = function (title, message) {
        console.log("success - " + title + " - " + message);
    };
    ToastyNotificationsService.prototype.info = function (title, message) {
        console.log("info - " + title + " - " + message);
    };
    ToastyNotificationsService.prototype.default = function (title, message) {
        console.log("default - " + title + " - " + message);
    };
    ToastyNotificationsService.prototype.warning = function (title, message) {
        console.log("warning - " + title + " - " + message);
    };
    ToastyNotificationsService.prototype.wait = function (title, message) {
        console.log("wait - " + title + " - " + message);
    };
    ToastyNotificationsService.prototype.cancelWait = function () {
        console.log('cancel wait');
    };
    ToastyNotificationsService.prototype.clearAll = function () {
        console.log('clear all');
    };
    ToastyNotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ToastyNotificationsService);
    return ToastyNotificationsService;
}());



/***/ }),

/***/ "./src/app/state-machine/state-machine-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateMachineRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nova_workflow__ = __webpack_require__("./node_modules/nova-workflow/esm5/nova-workflow.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = __WEBPACK_IMPORTED_MODULE_2__app_core__["d" /* Route */].withShell([
    { path: ':wf', component: __WEBPACK_IMPORTED_MODULE_3_nova_workflow__["c" /* WorkflowComponent */] },
    { path: ':wf/:act', component: __WEBPACK_IMPORTED_MODULE_3_nova_workflow__["c" /* WorkflowComponent */] }
]);
var StateMachineRoutingModule = /** @class */ (function () {
    function StateMachineRoutingModule() {
    }
    StateMachineRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
            providers: []
        })
    ], StateMachineRoutingModule);
    return StateMachineRoutingModule;
}());



/***/ }),

/***/ "./src/app/state-machine/state-machine.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateMachineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_machine_state_machine_routing_module__ = __webpack_require__("./src/app/state-machine/state-machine-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StateMachineModule = /** @class */ (function () {
    function StateMachineModule() {
    }
    StateMachineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_state_machine_state_machine_routing_module__["a" /* StateMachineRoutingModule */]
            ],
            declarations: []
        })
    ], StateMachineModule);
    return StateMachineModule;
}());



/***/ }),

/***/ "./src/environments/.env.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    'npm_package_version': '1.0.0'
});


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("./src/environments/.env.ts");
// `.env.ts` is generated by the `npm run env` command

var environment = {
    production: true,
    version: __WEBPACK_IMPORTED_MODULE_0__env__["a" /* default */].npm_package_version,
    serverUrl: 'https://api.chucknorris.io',
    defaultLanguage: 'en-US',
    supportedLanguages: [
        'en-US',
        'fr-FR'
    ]
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_environment__ = __webpack_require__("./src/environments/environment.ts");
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (__WEBPACK_IMPORTED_MODULE_3__env_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/translations/en-US.json":
/***/ (function(module, exports) {

module.exports = {"APP_NAME":"Saffire","About":"About","Hello world !":"Hello world !","Home":"Home","Version":"Version"}

/***/ }),

/***/ "./src/translations/fr-FR.json":
/***/ (function(module, exports) {

module.exports = {"APP_NAME":"Saffire","About":"A propos","Hello world !":"Bonjour le monde !","Home":"Accueil","Version":"Version"}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map