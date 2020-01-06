webpackJsonp([0],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPageModule", function() { return MovieDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_detail__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieDetailPageModule = (function () {
    function MovieDetailPageModule() {
    }
    return MovieDetailPageModule;
}());
MovieDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__movie_detail__["a" /* MovieDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_detail__["a" /* MovieDetailPage */]),
        ],
    })
], MovieDetailPageModule);

//# sourceMappingURL=movie-detail.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/movie-detail/movie-detail.module": [
		115
	],
	"../pages/movie-list/movie-list.module": [
		157
	],
	"../pages/my-movies/my-movies.module": [
		159
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageModule", function() { return MovieListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_list__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieListPageModule = (function () {
    function MovieListPageModule() {
    }
    return MovieListPageModule;
}());
MovieListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__movie_list__["a" /* MovieListPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_list__["a" /* MovieListPage */])]
    })
], MovieListPageModule);

//# sourceMappingURL=movie-list.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieApiProvider = (function () {
    function MovieApiProvider(http, platform) {
        this.http = http;
        this.platform = platform;
        this.baseUrl = "../../assets/api/movies.json";
        console.log("Hello MovieApiProvider Provider");
        if (this.platform.is("cordova") && this.platform.is("android")) {
            this.baseUrl = "/android_asset/www/assets/api/movies.json";
        }
    }
    MovieApiProvider.prototype.getMovies = function () {
        return this.http.get("" + this.baseUrl);
    };
    return MovieApiProvider;
}());
MovieApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]])
], MovieApiProvider);

//# sourceMappingURL=movie-api.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMoviesPageModule", function() { return MyMoviesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_movies__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyMoviesPageModule = (function () {
    function MyMoviesPageModule() {
    }
    return MyMoviesPageModule;
}());
MyMoviesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_movies__["a" /* MyMoviesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_movies__["a" /* MyMoviesPage */]),
        ],
    })
], MyMoviesPageModule);

//# sourceMappingURL=my-movies.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_favorite_movie_favorite_movie__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_detail_movie_detail__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_list_movie_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyMoviesPage = (function () {
    function MyMoviesPage(navCtrl, navParams, favoriteMovieProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteMovieProvider = favoriteMovieProvider;
    }
    MyMoviesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MyMoviesPage");
    };
    MyMoviesPage.prototype.ionViewWillEnter = function () {
        this.initFavoriteMovies();
    };
    MyMoviesPage.prototype.initFavoriteMovies = function () {
        var _this = this;
        this.favoriteMovieProvider
            .getFavoriteMovies()
            .then(function (favs) { return (_this.favoriteMovies = favs); });
    };
    MyMoviesPage.prototype.findMovie = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__movie_list_movie_list__["a" /* MovieListPage */]);
    };
    MyMoviesPage.prototype.goToDetail = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__movie_detail_movie_detail__["a" /* MovieDetailPage */], movie);
    };
    return MyMoviesPage;
}());
MyMoviesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: "page-my-movies",template:/*ion-inline-start:"C:\Users\Anissa\Desktop\ionic3-movie-app-master\src\pages\my-movies\my-movies.html"*/'<ion-header>\n\n    <ion-navbar color="secondary">\n      <button menuToggle ion-button icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Le meilleur du cinéma</ion-title>\n    </ion-navbar>\n\n    <ion-toolbar color="light">\n      <ion-title>Mes favoris</ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-card *ngIf="favoriteMovies && favoriteMovies.length; else noFavorite">\n      <ion-list>\n        <ion-list-header class="my-movies-header">Mes Favoris</ion-list-header>\n        <ion-item *ngFor="let movie of favoriteMovies" (click)="goToDetail(movie)">\n          <ion-row>\n            <ion-col col-1>\n              <ion-icon name="star"></ion-icon>\n            </ion-col>\n            <ion-col col-6 text-wrap>\n              <h4>{{movie.title}}</h4>\n            </ion-col>\n            <ion-col col-3>\n              <h4>{{movie.release_date}}</h4>\n            </ion-col>\n            <ion-col col-2>\n              <ion-badge color="danger">{{movie.vote_average}}</ion-badge>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n      <ion-card-content>\n        <p>Ajouter plus de films en cliquant sur le bouton ci-dessous</p>\n        <button icon-left ion-button full (click)="findMovie()">\n          <ion-icon name="search"></ion-icon>\n          Chercher un film\n        </button>\n      </ion-card-content>\n    </ion-card>\n\n    <ng-template #noFavorite>\n      <ion-card>\n        <ion-card-content>\n          <p>Votre sélèction est vide.</p>\n          <p>Ajouter un film en cliquant sur le bouton ci-dessous</p>\n          <button ion-button icon-left full (click)="findMovie()">\n            <ion-icon name="search"></ion-icon>\n            Chercher un film\n          </button>\n        </ion-card-content>\n      </ion-card>\n    </ng-template>\n\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Anissa\Desktop\ionic3-movie-app-master\src\pages\my-movies\my-movies.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_favorite_movie_favorite_movie__["a" /* FavoriteMovieProvider */]])
], MyMoviesPage);

//# sourceMappingURL=my-movies.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_movie_detail_movie_detail_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_movie_list_movie_list_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_movies_my_movies_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_movie_api_movie_api__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_favorite_movie_favorite_movie__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/movie-detail/movie-detail.module#MovieDetailPageModule', name: 'MovieDetailPage', segment: 'movie-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/movie-list/movie-list.module#MovieListPageModule', name: 'MovieListPage', segment: 'movie-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-movies/my-movies.module#MyMoviesPageModule', name: 'MyMoviesPage', segment: 'my-movies', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__pages_my_movies_my_movies_module__["MyMoviesPageModule"],
            __WEBPACK_IMPORTED_MODULE_3__pages_movie_list_movie_list_module__["MovieListPageModule"],
            __WEBPACK_IMPORTED_MODULE_2__pages_movie_detail_movie_detail_module__["MovieDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_movie_api_movie_api__["a" /* MovieApiProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_favorite_movie_favorite_movie__["a" /* FavoriteMovieProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_movie_list_movie_list__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_my_movies_my_movies__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_my_movies_my_movies__["a" /* MyMoviesPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Accueil", component: __WEBPACK_IMPORTED_MODULE_1__pages_my_movies_my_movies__["a" /* MyMoviesPage */] },
            { title: "Liste des films", component: __WEBPACK_IMPORTED_MODULE_0__pages_movie_list_movie_list__["a" /* MovieListPage */] }
        ];
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
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Anissa\Desktop\ionic3-movie-app-master\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="secondary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Anissa\Desktop\ionic3-movie-app-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_movie_api_movie_api__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_detail_movie_detail__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieListPage = (function () {
    function MovieListPage(navCtrl, navParams, movieApiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieApiProvider = movieApiProvider;
        this.movies = new Array();
    }
    MovieListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.movieApiProvider.getMovies().subscribe(function (data) {
            _this.movies = data;
        });
    };
    MovieListPage.prototype.goToDetail = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__movie_detail_movie_detail__["a" /* MovieDetailPage */], movie);
    };
    return MovieListPage;
}());
MovieListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: "page-movie-list",template:/*ion-inline-start:"C:\Users\Anissa\Desktop\ionic3-movie-app-master\src\pages\movie-list\movie-list.html"*/'<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Liste des films</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid *ngIf="movies">\n    <ion-row>\n      <ion-col col-3 *ngFor="let movie of movies">\n        <img [src]="movie.poster_path" (click)="goToDetail(movie)" />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Anissa\Desktop\ionic3-movie-app-master\src\pages\movie-list\movie-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_movie_api_movie_api__["a" /* MovieApiProvider */]])
], MovieListPage);

//# sourceMappingURL=movie-list.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_favorite_movie_favorite_movie__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetailPage = (function () {
    function MovieDetailPage(navCtrl, navParams, favoriteMovieProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteMovieProvider = favoriteMovieProvider;
        this.isFavorite = false;
    }
    MovieDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.movie = this.navParams.data;
        this.favoriteMovieProvider
            .isFavortieMovie(this.movie)
            .then(function (value) { return (_this.isFavorite = value); });
    };
    MovieDetailPage.prototype.toggleFavorite = function () {
        this.isFavorite = !this.isFavorite;
        this.favoriteMovieProvider.toogleFavoriteMovie(this.movie);
    };
    return MovieDetailPage;
}());
MovieDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: "page-movie-detail",template:/*ion-inline-start:"C:\Users\Anissa\Desktop\ionic3-movie-app-master\src\pages\movie-detail\movie-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center *ngIf="movie">{{movie.title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button incon-only style="font-size: 1.7em" (click)=toggleFavorite()>\n        <ion-icon [name]="isFavorite ? \'star\':\'star-outline\'"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngIf="movie">\n    <img [src]="movie.poster_path" />\n    <ion-card-header>\n      <h2>Synopsis\n        <ion-badge color="danger">{{movie.vote_average}}</ion-badge>\n      </h2>\n    </ion-card-header>\n    <ion-card-content>{{movie.overview}}</ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Anissa\Desktop\ionic3-movie-app-master\src\pages\movie-detail\movie-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_favorite_movie_favorite_movie__["a" /* FavoriteMovieProvider */]])
], MovieDetailPage);

//# sourceMappingURL=movie-detail.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteMovieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MOVIE_KEY = "movie_";
var FavoriteMovieProvider = (function () {
    function FavoriteMovieProvider(storage) {
        this.storage = storage;
        console.log("Hello UserPreferencesProvider Provider");
    }
    FavoriteMovieProvider.prototype.addFavoriteMovie = function (movie) {
        this.storage.set(this.getMovieKey(movie), JSON.stringify(movie));
    };
    FavoriteMovieProvider.prototype.removeFavoriteMovie = function (movie) {
        this.storage.remove(this.getMovieKey(movie));
    };
    FavoriteMovieProvider.prototype.isFavortieMovie = function (movie) {
        return this.storage.get(this.getMovieKey(movie));
    };
    FavoriteMovieProvider.prototype.toogleFavoriteMovie = function (movie) {
        var _this = this;
        this.isFavortieMovie(movie).then(function (isFavorite) {
            return isFavorite
                ? _this.removeFavoriteMovie(movie)
                : _this.addFavoriteMovie(movie);
        });
    };
    FavoriteMovieProvider.prototype.getMovieKey = function (movie) {
        return MOVIE_KEY + movie.id.toString();
    };
    FavoriteMovieProvider.prototype.getFavoriteMovies = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var results = [];
            _this.storage
                .keys()
                .then(function (keys) {
                return keys
                    .filter(function (key) { return key.includes(MOVIE_KEY); })
                    .forEach(function (key) {
                    return _this.storage.get(key).then(function (data) { return results.push(JSON.parse(data)); });
                });
            });
            return resolve(results);
        });
    };
    return FavoriteMovieProvider;
}());
FavoriteMovieProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], FavoriteMovieProvider);

//# sourceMappingURL=favorite-movie.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map