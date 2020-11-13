(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<main>\n  <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"fh5co-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"row row-pb-md\">\n      <div class=\"col-md-4 fh5co-widget\">\n        <h3>Koality.</h3>\n        <p>\n          Disclaimer: This is a personal project developed by\n          <a target=\"_blank\" href=\"https://henrykhoanguyen.com\"\n            >Khoa Nguyen</a\n          >\n          for fun and learning purposes. Please do not attempt to buy or put\n          in any sensitive information about you on this website.\n        </p>\n        <p><a href=\"#\">Learn More</a></p>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n        <ul class=\"fh5co-footer-links\">\n          <li><a href=\"/about\">About</a></li>\n          <li><a href=\"#\">Help</a></li>\n          <li><a href=\"#\">Contact</a></li>\n          <li><a href=\"#\">Terms</a></li>\n          <li><a href=\"#\">Meetups</a></li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n        <ul class=\"fh5co-footer-links\">\n          <li><a href=\"#\">Shop</a></li>\n          <li><a href=\"#\">Privacy</a></li>\n          <li><a href=\"#\">Testimonials</a></li>\n          <li><a href=\"#\">Handbook</a></li>\n          <li><a href=\"#\">Held Desk</a></li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n        <ul class=\"fh5co-footer-links\">\n          <li><a href=\"#\">Find Designers</a></li>\n          <li><a href=\"#\">Find Developers</a></li>\n          <li><a href=\"#\">Teams</a></li>\n          <li><a href=\"#\">Advertise</a></li>\n          <li><a href=\"#\">API</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"row copyright\">\n      <div class=\"col-md-12 text-center\">\n        <p>\n          <small class=\"block\">&copy; 2021 All Rights Reserved.</small>\n          <small class=\"block\"\n            >Designed by\n            <a href=\"https://henrykhoanguyen.com\" target=\"_blank\"\n              >Khoa Nguyen</a\n            >\n            Demo Images:\n            <a href=\"http://unsplash.com/\" target=\"_blank\">Unsplash</a></small\n          >\n        </p>\n        <div>\n          <ul class=\"fh5co-social-icons\">\n            <li>\n              <a href=\"https://henrykhoanguyen.com\"\n                ><i class=\"icon-globe\"></i\n              ></a>\n            </li>\n            <li>\n              <a href=\"mailto:henrykhoanguyen@gmail.com\"\n                ><i class=\"icon-mail\"></i\n              ></a>\n            </li>\n            <li>\n              <a href=\"https://www.linkedin.com/in/henrykhoanguyen/\"\n                ><i class=\"icon-linkedin\"></i\n              ></a>\n            </li>\n            <li>\n              <a href=\"https://github.com/henrykhoanguyen\"\n                ><i class=\"icon-github\"></i\n              ></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"fh5co-nav\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-2 text-left\">\n        <div id=\"fh5co-logo\">\n          <a href=\"/\">Koality<span>.</span></a>\n        </div>\n      </div>\n      <div class=\"col-xs-10 text-right menu-1\">\n        <ul *ngIf=\"!isLoggedIn\">\n          <li class=\"active\"><a href=\"/login\">Log In</a></li>\n          <!-- <li class=\"has-dropdown\">\n            <a href=\"services.html\">Services</a>\n            <ul class=\"dropdown\">\n              <li><a href=\"#\">Web Design</a></li>\n              <li><a href=\"#\">eCommerce</a></li>\n              <li><a href=\"#\">Branding</a></li>\n              <li><a href=\"#\">API</a></li>\n            </ul>\n          </li>\n\n          <li><a href=\"products.html\">Products</a></li>\n          <li><a href=\"about.html\">About</a></li>\n          <li><a href=\"blog.html\">Blog</a></li>\n          <li><a href=\"contact.html\">Contact</a></li> -->\n        </ul>\n        <ul *ngIf=\"isLoggedIn\">\n          <li [ngClass]=\"{ active: '/search' === currentURL }\">\n            <form\n              #userSearch=\"ngForm\"\n              (ngSubmit)=\"onSubmit(userSearch.value)\"\n            >\n              <div class=\"col-sm-4\">\n                <input\n                  type=\"text\"\n                  name=\"title\"\n                  [(ngModel)]=\"search\"\n                  #title=\"ngModel\"\n                  class=\"form-control search-box\"\n                  placeholder=\"Enter Movie...\"\n                />\n                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Search\"/> -->\n              </div>\n            </form>\n          </li>\n          <li [ngClass]=\"{ active: '/' === currentURL }\">\n            <a href=\"/\">Home</a>\n          </li>\n          <li\n            [ngClass]=\"{ active: '/movies' === currentURL }\"\n            class=\"has-dropdown\"\n          >\n            <a href=\"/movies\">Movies</a>\n            <ul class=\"dropdown\">\n              <li [ngClass]=\"{ active: '/browser' === currentURL }\">\n                <a href=\"/browser\">Browse</a>\n              </li>\n              <li><a href=\"/search\">Search</a></li>\n            </ul>\n          </li>\n          <li [ngClass]=\"{ active: '/about' === currentURL }\">\n            <a href=\"/about\">About</a>\n          </li>\n          <li><a (click)=\"logout()\" style=\"cursor: pointer\">Log Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-page/about-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-page/about-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fh5co-loader\"></div>\n\n<div id=\"page\">\n  <app-nav-bar></app-nav-bar>\n\n  <header\n    id=\"fh5co-header\"\n    class=\"fh5co-cover fh5co-cover-sm\"\n    role=\"banner\"\n    style=\"background-image: url(../../../assets/images/about-bg.jpg);\n    background-position: left;\"\n    data-stellar-background-ratio=\"0.5\"\n  >\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-7 text-left\">\n          <div class=\"display-t\">\n            <div class=\"display-tc animate-box\" data-animate-effect=\"fadeInUp\">\n              <h1 class=\"mb30\">About Us</h1>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div id=\"fh5co-team\">\n    <div class=\"container\">\n      <div class=\"row animate-box row-pb-md\">\n        <div class=\"col-md-8 col-md-offset-2 text-left fh5co-heading\">\n          <span>Productive Staff</span>\n          <h2>Meet Our Staff</h2>\n          <p>\n            These are our hard working staff that ensure the site is running\n            smoothly. We promise to provide you with the highest quality of\n            service. If there are anything bugs that you encounter on our site,\n            please do not hesitate to report it to our staff.\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 animate-box\" data-animate-effect=\"fadeIn\">\n          <div class=\"fh5co-staff\">\n            <img src=\"../../../assets/images/DSC_0622.jpg\" alt=\"Henry Nguyen\" />\n            <h3>Henry Nguyen</h3>\n            <strong class=\"role\">Front-end Developer</strong>\n            <p>\n              We promise to provide you with the highest quality of service. If\n              there are anything bugs that you encounter on our site, please do\n              not hesitate to report it to our staff.\n            </p>\n            <ul class=\"fh5co-social-icons\">\n              <li>\n                <a href=\"https://henrykhoanguyen.com\"\n                  ><i class=\"icon-globe\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"mailto:henrykhoanguyen@gmail.com\"\n                  ><i class=\"icon-mail\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"https://www.linkedin.com/in/henrykhoanguyen/\"\n                  ><i class=\"icon-linkedin\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"https://github.com/henrykhoanguyen\"\n                  ><i class=\"icon-github\"></i\n                ></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-6 animate-box\" data-animate-effect=\"fadeIn\">\n          <div class=\"fh5co-staff\">\n            <img src=\"../../../assets/images/DSC_0622.jpg\" alt=\"Khoa Nguyen\" />\n            <h3>Khoa Nguyen</h3>\n            <strong class=\"role\">Back-end Developer</strong>\n            <p>\n              We promise to provide you with the highest quality of service. If\n              there are anything bugs that you encounter on our site, please do\n              not hesitate to report it to our staff.\n            </p>\n            <ul class=\"fh5co-social-icons\">\n              <li>\n                <a href=\"https://henrykhoanguyen.com\"\n                  ><i class=\"icon-globe\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"mailto:henrykhoanguyen@gmail.com\"\n                  ><i class=\"icon-mail\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"https://www.linkedin.com/in/henrykhoanguyen/\"\n                  ><i class=\"icon-linkedin\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"https://github.com/henrykhoanguyen\"\n                  ><i class=\"icon-github\"></i\n                ></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/browser-page/browser-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/browser-page/browser-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fh5co-loader\"></div>\n\n<div id=\"page\">\n  <app-nav-bar></app-nav-bar>\n\n  <header\n    id=\"fh5co-header\"\n    class=\"fh5co-cover fh5co-cover-sm\"\n    role=\"banner\"\n    style=\"\n      background-image: url(../../../assets/images/browse-bg.jpg);\n      background-position: left;\n    \"\n    data-stellar-background-ratio=\"0.5\"\n  >\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-7 text-left\">\n          <div class=\"display-t\">\n            <div class=\"display-tc animate-box\" data-animate-effect=\"fadeInUp\">\n              <h1 class=\"mb30\">Browse Our Movies</h1>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div id=\"fh5co-project\" class=\"fh5co-bg-section border-bottom\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row row-pb-md\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-left fh5co-heading animate-box\">\n\t\t\t\t\t<span>Choose any genres</span>\n\t\t\t\t\t<h2>Genres</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"genres\">\n        <div *ngFor=\"let genre of genres\">\n          <a (click)=\"getMoviesFromGenre(genre.id)\" style=\"cursor: pointer;\">\n            <div class=\"col-md-3 col-sm-6\">\n              <div class=\"feature-center text-center\" data-animate-effect=\"fadeInUp\">\n                <span class=\"icon\">\n                  <i class=\"icon-video2\"></i>\n                </span>\n                <h3>{{genre.name}}</h3>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\t\t\t\t<!-- <div class=\"col-md-4 col-sm-6 fh5co-project animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t<a href=\"#\"><img src=\"../../../assets/images/work-2.jpg\" alt=\"Free HTML5 Website Template by gettemplates.co\" class=\"img-responsive\">\n\t\t\t\t\t\t<div class=\"fh5co-copy\">\n\t\t\t\t\t\t\t<h3>Smart Layers</h3>\n\t\t\t\t\t\t\t<p>Brand &amp; Identity</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 fh5co-project animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t<a href=\"#\"><img src=\"../../../assets/images/work-3.jpg\" alt=\"Free HTML5 Website Template by gettemplates.co\" class=\"img-responsive\">\n\t\t\t\t\t\t<div class=\"fh5co-copy\">\n\t\t\t\t\t\t\t<h3>Notepad Mockup</h3>\n\t\t\t\t\t\t\t<p>Illustration</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\n\n\t<!-- <div id=\"fh5co-services\" class=\"fh5co-bg-section border-bottom\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row row-pb-md\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-left animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t<div class=\"fh5co-heading\">\n\t\t\t\t\t\t<span>We're expert</span>\n\t\t\t\t\t\t<h2>What We Do</h2>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-eye\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Retina Ready</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-command\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Fully Responsive</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix visible-sm-block\"></div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-power\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Web Starter</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"clearfix visible-md-block\"></div>\n\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-eye\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Retina Ready</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix visible-sm-block\"></div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-command\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Fully Responsive</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-power\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Web Starter</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"clearfix visible-md-block\"></div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n\n  <app-footer></app-footer>\n</div>\n\n<div class=\"gototop js-top\">\n  <a href=\"#\" class=\"js-gotop\"><i class=\"icon-arrow-up\"></i></a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fh5co-loader\"></div>\n\n<div id=\"page\">\n  <nav class=\"fh5co-nav\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-2 text-left\">\n          <div id=\"fh5co-logo\">\n            <a href=\"/\">Koality<span>.</span></a>\n          </div>\n        </div>\n        <!-- <div class=\"col-xs-10 text-right menu-1\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"index.html\">Home</a></li>\n\t\t\t\t\t\t<li class=\"has-dropdown\">\n\t\t\t\t\t\t\t<a href=\"services.html\">Services</a>\n\t\t\t\t\t\t\t<ul class=\"dropdown\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Web Design</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">eCommerce</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Branding</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">API</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li><a href=\"products.html\">Products</a></li>\n\t\t\t\t\t\t<li><a href=\"about.html\">About</a></li>\n\t\t\t\t\t\t<li><a href=\"blog.html\">Blog</a></li>\n\t\t\t\t\t\t<li class=\"active\"><a href=\"contact.html\">Contact</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div> -->\n      </div>\n    </div>\n  </nav>\n\n  <header\n    id=\"fh5co-header\"\n    class=\"fh5co-cover fh5co-cover-sm\"\n    role=\"banner\"\n    style=\"\n      background-image: url(../../../assets/images/krists-luhaers-theater.jpg);\n      background-position: left;\n    \"\n    data-stellar-background-ratio=\"0.5\"\n  >\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <!-- <div class=\"col-md-4 col-md-push-1 text-left\">\n\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t\t<h1 class=\"mb30\">Login</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n        </div> -->\n        <!-- <div class=\"col-md-4 col-md-push-1 animate-box\">\n\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeInUp\">\n              <div class=\"fh5co-contact-info\">\n                <h3>Contact Information</h3>\n                <ul>\n                  <li class=\"address\">Irvine, CA</li>\n                  <li class=\"email\"><a href=\"mailto:henrykhoanguyen@gmail.com\">henrykhoanguyen@gmail.com</a></li>\n                  <li class=\"url\"><a href=\"http://henrykhoanguyen.com\">henrykhoanguyen.com</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div> -->\n\n        <div class=\"col-md-7\">\n          <div class=\"display-t\">\n            <div class=\"display-tc\" data-animate-effect=\"fadeInUp\">\n              <form\n                #userLogin=\"ngForm\"\n                (ngSubmit)=\"login(userLogin.value)\"\n                style=\"background-color: white; border-radius: 2%; padding: 2em\"\n              >\n                <h1 class=\"mb25\" style=\"color: black\">Login</h1>\n                <div class=\"row form-group\">\n                  <div class=\"col-md-12\">\n                    <label for=\"email\">Email</label>\n                    <input\n                      type=\"text\"\n                      name=\"email\"\n                      class=\"form-control\"\n                      placeholder=\"Your email address\"\n                      [(ngModel)]=\"email\"\n                      #userEmail=\"ngModel\"\n                      required\n                    />\n                    <div\n                      *ngIf=\"\n                        userEmail.invalid &&\n                        (userEmail.dirty || userEmail.touched)\n                      \"\n                      class=\"alert alert-danger\"\n                    >\n                      <div *ngIf=\"userEmail.errors.required\">\n                        Email is required...\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row form-group\">\n                  <div class=\"col-md-12\">\n                    <label for=\"password\">Password</label>\n                    <input\n                      type=\"password\"\n                      name=\"password\"\n                      class=\"form-control\"\n                      placeholder=\"Your password\"\n                      [(ngModel)]=\"password\"\n                      #userPass=\"ngModel\"\n                      required\n                    />\n                    <div\n                      *ngIf=\"\n                        userPass.invalid && (userPass.dirty || userPass.touched)\n                      \"\n                      class=\"alert alert-danger\"\n                    >\n                      <div *ngIf=\"userPass.errors.required\">\n                        Password is required...\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <input\n                    type=\"submit\"\n                    value=\"Login\"\n                    class=\"btn btn-lg btn-primary\"\n                  />\n                  <div *ngIf=\"error\" class=\"alert alert-danger\">\n                    {{ error }}\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <!-- <div id=\"fh5co-contact\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5 col-md-push-1 animate-box\">\n\n\t\t\t\t\t<div class=\"fh5co-contact-info\">\n\t\t\t\t\t\t<h3>Contact Information</h3>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"address\">Irvine, CA</li>\n\t\t\t\t\t\t\t<li class=\"phone\"><a href=\"tel://1234567920\">+ 1235 2355 98</a></li>\n\t\t\t\t\t\t\t<li class=\"email\"><a href=\"mailto:henrykhoanguyen@gmail.com\">henrykhoanguyen@gmail.com</a></li>\n\t\t\t\t\t\t\t<li class=\"url\"><a href=\"http://henrykhoanguyen.com\">henrykhoanguyen.com</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 animate-box\">\n\n\t\t\t\t\t<form action=\"#\">\n\n\t\t\t\t\t\t<div class=\"row form-group\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"email\" class=\"form-control\" placeholder=\"Your email address\">\n\t\t\t\t\t\t\t</div>\n            </div>\n\n            <div class=\"row form-group\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"password\" class=\"form-control\" placeholder=\"Your password\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"submit\" value=\"Login\" class=\"btn btn-lg btn-primary\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div> -->\n\n  <!-- <div id=\"fh5co-started\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row animate-box\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t<span>Let's work together</span>\n\t\t\t\t\t<h2>Try this template for free</h2>\n\t\t\t\t\t<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>\n\t\t\t\t\t<p><button type=\"submit\" class=\"btn btn-default\">Get In Touch</button></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n\n  <footer id=\"fh5co-footer\" role=\"contentinfo\">\n    <div class=\"container\">\n      <div class=\"row row-pb-md\">\n        <div class=\"col-md-4 fh5co-widget\">\n          <h3>Koality.</h3>\n          <p>\n            Disclaimer: This is a personal project developed by\n            <a target=\"_blank\" href=\"https://henrykhoanguyen.com\"\n              >Khoa Nguyen</a\n            >\n            for fun and learning purposes. Please do not attempt to buy or put\n            in any sensitive information about you on this website.\n          </p>\n          <p><a href=\"#\">Learn More</a></p>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n          <ul class=\"fh5co-footer-links\">\n            <li><a href=\"#\">About</a></li>\n            <li><a href=\"#\">Help</a></li>\n            <li><a href=\"#\">Contact</a></li>\n            <li><a href=\"#\">Terms</a></li>\n            <li><a href=\"#\">Meetups</a></li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n          <ul class=\"fh5co-footer-links\">\n            <li><a href=\"#\">Shop</a></li>\n            <li><a href=\"#\">Privacy</a></li>\n            <li><a href=\"#\">Testimonials</a></li>\n            <li><a href=\"#\">Handbook</a></li>\n            <li><a href=\"#\">Held Desk</a></li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n          <ul class=\"fh5co-footer-links\">\n            <li><a href=\"#\">Find Designers</a></li>\n            <li><a href=\"#\">Find Developers</a></li>\n            <li><a href=\"#\">Teams</a></li>\n            <li><a href=\"#\">Advertise</a></li>\n            <li><a href=\"#\">API</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"row copyright\">\n        <div class=\"col-md-12 text-center\">\n          <p>\n            <small class=\"block\">&copy; 2021 All Rights Reserved.</small>\n            <small class=\"block\"\n              >Designed by\n              <a href=\"https://henrykhoanguyen.com\" target=\"_blank\"\n                >Khoa Nguyen</a\n              >\n              Demo Images:\n              <a href=\"http://unsplash.com/\" target=\"_blank\">Unsplash</a></small\n            >\n          </p>\n          <div>\n            <ul class=\"fh5co-social-icons\">\n              <li>\n                <a href=\"https://henrykhoanguyen.com\"\n                  ><i class=\"icon-globe\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"mailto:henrykhoanguyen@gmail.com\"\n                  ><i class=\"icon-mail\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"https://www.linkedin.com/in/henrykhoanguyen/\"\n                  ><i class=\"icon-linkedin\"></i\n                ></a>\n              </li>\n              <li>\n                <a href=\"https://github.com/henrykhoanguyen\"\n                  ><i class=\"icon-github\"></i\n                ></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n\n<div class=\"gototop js-top\">\n  <a href=\"#\" class=\"js-gotop\"><i class=\"icon-arrow-up\"></i></a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fh5co-loader\" *ngIf=\"!movieData\"></div>\n\n<div id=\"page\">\n  <app-nav-bar></app-nav-bar>\n\n  <header\n    id=\"fh5co-header\"\n    class=\"fh5co-cover\"\n    role=\"banner\"\n    style=\"\n      background-image: url(../../../assets/images/krists-luhaers-theater.jpg);\n      background-position: left;\n    \"\n    data-stellar-background-ratio=\"0.5\"\n  >\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-7 text-left\">\n          <div class=\"display-t\">\n            <div class=\"display-tc\" data-animate-effect=\"fadeInUp\">\n              <h1 class=\"mb30\">Let us enjoy a Koality time together...</h1>\n              <p>\n                <a href=\"/login\" class=\"btn btn-primary\" *ngIf=\"!isLoggedIn\">Get Started</a>\n                <a href=\"/browser\" class=\"btn btn-primary\" *ngIf=\"isLoggedIn\">Get Started</a>\n                <em class=\"or\">or</em>\n                <a\n                  href=\"https://vimeo.com/channels/staffpicks/93951774\"\n                  class=\"link-watch popup-vimeo\"\n                  >Watch Video</a\n                >\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div id=\"fh5co-project\">\n    <div class=\"container\">\n      <div class=\"row row-pb-md\">\n        <div\n          class=\"col-md-8 col-md-offset-2 text-left fh5co-heading\"\n        >\n          <span>Watch Some Cool Stuff</span>\n          <h2>Most Popular Movies</h2>\n          <p>These are some of our most popular movies on our site.</p>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"movieData\">\n        <div\n          *ngFor=\"let movie of movieData\"\n          class=\"col-md-4 col-sm-6 fh5co-project\"\n          data-animate-effect=\"fadeIn\"\n        >\n          <a href=\"#\">\n            <img\n              src=\"../../../assets/images/movie-2.jpg\"\n              alt=\"random movie poster\"\n              class=\"img-responsive\"\n            />\n            <div class=\"fh5co-copy\">\n              <h3>{{ movie.title }}</h3>\n              <p>{{ movie.director }} &mdash; {{ movie.year }}</p>\n            </div>\n          </a>\n        </div>\n\n        <!-- <div class=\"col-md-4 col-sm-6 fh5co-project animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t<a href=\"#\"><img src=\"../../../assets/images/movie-2.jpg\" alt=\"random movie poster\" class=\"img-responsive\">\n\t\t\t\t\t\t<div class=\"fh5co-copy\">\n\t\t\t\t\t\t\t<h3>Movie Title</h3>\n\t\t\t\t\t\t\t<p>Director &mdash; Year</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 fh5co-project animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t<a href=\"#\"><img src=\"../../../assets/images/movie-3.jpg\" alt=\"random movie poster\" class=\"img-responsive\">\n\t\t\t\t\t\t<div class=\"fh5co-copy\">\n\t\t\t\t\t\t\t<h3>Movie Title</h3>\n\t\t\t\t\t\t\t<p>Director &mdash; Year</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div> -->\n      </div>\n    </div>\n\n    <!-- <div class=\"col-md-12 text-center\">\n      <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n          <li>\n            <a href=\"#\" aria-label=\"Previous\">\n              <span arial-hidden=\"true\">&laquo;</span>\n            </a>\n          </li>\n          <li class=\"active\"><a href=\"#\">1</a></li>\n          <li><a href=\"#\">2</a></li>\n          <li><a href=\"#\">3</a></li>\n          <li>\n            <a href=\"#\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </div> -->\n  </div>\n\n  <!-- <div id=\"fh5co-services\" class=\"fh5co-bg-section border-bottom\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row row-pb-md\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-left animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t<div class=\"fh5co-heading\">\n\t\t\t\t\t\t<span>We're expert</span>\n\t\t\t\t\t\t<h2>What We Do</h2>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-eye\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Retina Ready</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-command\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Fully Responsive</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix visible-sm-block\"></div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-power\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Web Starter</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"clearfix visible-md-block\"></div>\n\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-eye\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Retina Ready</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix visible-sm-block\"></div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-command\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Fully Responsive</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<div class=\"feature-center animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"icon-power\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3>Web Starter</h3>\n\t\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\t\t\t\t\t\t<p><a href=\"#\">Learn more</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"clearfix visible-md-block\"></div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n\n  <!-- Happy Clients' Testimonial -->\n  <div id=\"fh5co-testimonial\" class=\"fh5co-bg-section\">\n    <div class=\"container\">\n      <div class=\"row row-pb-md\">\n        <div class=\"col-md-8 col-md-offset-2 text-left fh5co-heading\">\n          <span>You deserved happiness</span>\n          <h2>Happy Clients</h2>\n          <p>\n            Find it hard to believe that our service can satisfy you? Here are\n            testimonials from some of our happiest clients...\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"testimonial\">\n            <blockquote>\n              <p>\n                &ldquo;After any good golf trip, I like to enjoy a good daily\n                dose of movies while siping on covfefe. The FAKE NEWS media will\n                say this site sucks! SAD! They don't know how to enjoy themseve.\n                America deserves KOALITY time!!! #MAKA &rdquo;\n              </p>\n              <p class=\"author\">\n                <img\n                  src=\"../../../assets/images/donaldrump.png\"\n                  alt=\"Donal Drump Image\"\n                />\n                <cite>&mdash; Donal Drump</cite>\n              </p>\n            </blockquote>\n          </div>\n\n          <div class=\"testimonial fh5co-selected\">\n            <blockquote>\n              <p>\n                &ldquo;I was the first to own a sensory deprivation tank. But\n                ALSO the first to join this incredible site to watch movies with\n                my family. I have a bit about it in my special! Do you know\n                about Dimethyltryptamine? It goes great with any movies on here.\n                &rdquo;\n              </p>\n              <p class=\"author\">\n                <img\n                  src=\"../../../assets/images/joeRogan.jpeg\"\n                  alt=\"Joe Rogan Image\"\n                />\n                <cite>&mdash; Joe &ldquo;pull that up Jamie&rdquo; Rogan</cite>\n              </p>\n            </blockquote>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"testimonial fh5co-selected\">\n            <blockquote>\n              <p>\n                &ldquo;I am family man. I love my wife Michelle. I love my kids.\n                And I love a Koality time with my family....I said nice thing\n                about you, Michelle. Can I have my phone back now?&rdquo;\n              </p>\n              <p class=\"author\">\n                <img\n                  src=\"../../../assets/images/obama.jpg\"\n                  alt=\"Barock Obama Image\"\n                />\n                <cite>&mdash; Barock Obama</cite>\n              </p>\n            </blockquote>\n          </div>\n\n          <div class=\"testimonial\">\n            <blockquote>\n              <p>\n                &ldquo;Aw man...They don't have \"Nuktuk: Hero of the South\" on\n                here. Honestly, I can't confirm nor deny that Koality is a good\n                movies site. But I do have a great time on here! :D&rdquo;\n              </p>\n              <p class=\"author\">\n                <img src=\"../../../assets/images/Bolin.png\" alt=\"Bolin Image\" />\n                <cite>&mdash; Bolin</cite>\n              </p>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Fun Fact About Company -->\n  <div id=\"fh5co-counter\">\n    <div class=\"container\">\n      <div class=\"row\" data-animate-effect=\"fadeInUp\">\n        <div class=\"col-md-8 col-md-offset-2 text-left fh5co-heading\">\n          <span>Enjoy it</span>\n          <h2>Fun Facts</h2>\n          <p>\n            We have happy users all around the world. With millions of hour\n            streamed and downloaded. Some might be bots but definitely a happy\n            bot that like a Koality time...we think.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div\n          class=\"col-md-3 col-sm-6\"\n          data-animate-effect=\"fadeInLeft\"\n        >\n          <div class=\"feature-center\">\n            <span class=\"icon\">\n              <i class=\"ti-download\"></i>\n            </span>\n            <span class=\"counter\"\n              ><span\n                class=\"js-counter\"\n                data-from=\"0\"\n                data-to=\"15\"\n                data-speed=\"1500\"\n                data-refresh-interval=\"50\"\n                >15</span\n              >M+</span\n            >\n            <span class=\"counter-label\">Downloads</span>\n          </div>\n        </div>\n        <div\n          class=\"col-md-3 col-sm-6\"\n          data-animate-effect=\"fadeInLeft\"\n        >\n          <div class=\"feature-center\">\n            <span class=\"icon\">\n              <i class=\"ti-face-smile\"></i>\n            </span>\n            <span class=\"counter\"\n              ><span\n                class=\"js-counter\"\n                data-from=\"0\"\n                data-to=\"400\"\n                data-speed=\"1500\"\n                data-refresh-interval=\"50\"\n                >400</span\n              >M+</span\n            >\n            <span class=\"counter-label\">Happy Clients</span>\n          </div>\n        </div>\n        <div\n          class=\"col-md-3 col-sm-6\"\n          data-animate-effect=\"fadeInLeft\"\n        >\n          <div class=\"feature-center\">\n            <span class=\"icon\">\n              <i class=\"ti-briefcase\"></i>\n            </span>\n            <span class=\"counter\"\n              ><span\n                class=\"js-counter\"\n                data-from=\"0\"\n                data-to=\"12\"\n                data-speed=\"1500\"\n                data-refresh-interval=\"50\"\n                >12</span\n              >K+</span\n            >\n            <span class=\"counter-label\">Movies</span>\n          </div>\n        </div>\n        <div\n          class=\"col-md-3 col-sm-6\"\n          data-animate-effect=\"fadeInLeft\"\n        >\n          <div class=\"feature-center\">\n            <span class=\"icon\">\n              <i class=\"ti-time\"></i>\n            </span>\n            <span class=\"counter\"\n              ><span\n                class=\"js-counter\"\n                data-from=\"0\"\n                data-to=\"12\"\n                data-speed=\"1500\"\n                data-refresh-interval=\"50\"\n                >12</span\n              >B+</span\n            >\n            <span class=\"counter-label\">Hours Spent</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div id=\"fh5co-blog\" class=\"fh5co-bg-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row animate-box row-pb-md\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-left fh5co-heading\">\n\t\t\t\t\t<span>Thoughts &amp; Ideas</span>\n\t\t\t\t\t<h2>Our Blog</h2>\n\t\t\t\t\t<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-sm-4 animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t<span class=\"fh5co-date\">Sep. 12th</span>\n\t\t\t\t\t\t<h3><a href=\"#\">Web Design for the Future</a></h3>\n\t\t\t\t\t\t<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>\n\t\t\t\t\t\t<p class=\"author\"><img src=\"../../../assets/images/person1.jpg\" alt=\"Free HTML5 Bootstrap Template by gettemplates.co\"> <cite> Mike Adam</cite></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-4 animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t<span class=\"fh5co-date\">Sep. 23rd</span>\n\t\t\t\t\t\t<h3><a href=\"#\">Web Design for the Future</a></h3>\n\t\t\t\t\t\t<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>\n\t\t\t\t\t\t<p class=\"author\"><img src=\"../../../assets/images/person1.jpg\" alt=\"Free HTML5 Bootstrap Template by gettemplates.co\"> <cite> Mike Adam</cite></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-4 animate-box\" data-animate-effect=\"fadeInUp\">\n\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t<span class=\"fh5co-date\">Sep. 24th</span>\n\t\t\t\t\t\t<h3><a href=\"#\">Web Design for the Future</a></h3>\n\t\t\t\t\t\t<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>\n\t\t\t\t\t\t<p class=\"author\"><img src=\"../../../assets/images/person1.jpg\" alt=\"Free HTML5 Bootstrap Template by gettemplates.co\"> <cite> Mike Adam</cite></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n\n  <div id=\"fh5co-started\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n          <span>There are many adventures await ahead!</span>\n          <h2>Let's watch some movies</h2>\n          <p>\n            What are you waiting for? Login with your account and start watching\n            movies today. Give us your time and <strong>moneyyyy</strong>!!!\n          </p>\n          <p>\n            <button routerLink=\"/login\" class=\"btn btn-primary\" *ngIf=\"!isLoggedIn\">Get Started</button>\n            <button routerLink=\"/browser\" class=\"btn btn-primary\" *ngIf=\"isLoggedIn\">Get Started</button>\n\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n\n<div class=\"gototop js-top\">\n  <a href=\"#\" class=\"js-gotop\"><i class=\"icon-arrow-up\"></i></a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-page/movies-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-page/movies-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"fh5co-loader\"></div> -->\n\n<div id=\"page\">\n  <app-nav-bar></app-nav-bar>\n  <header\n    id=\"fh5co-header\"\n    class=\"fh5co-cover-sm\"\n    role=\"banner\"\n    style=\"\n      background-image: url(../../../assets/images/movies-bg.jpg);\n      background-position: left;\n    \"\n    data-stellar-background-ratio=\"0.5\"\n  >\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-7 text-left\">\n          <div class=\"display-t\">\n            <div class=\"display-tc animate-box\" data-animate-effect=\"fadeInUp\">\n              <h1 class=\"mb30\" style=\"color: transparent\">.</h1>\n              <!-- <h1 class=\"mb30\">Movies</h1> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div id=\"fh5co-services\" class=\"fh5co-bg-section border-bottom\">\n    <div class=\"container\">\n      <div class=\"row row-pb-md\">\n        <div\n          class=\"col-md-8 col-md-offset-2 text-left\"\n          data-animate-effect=\"fadeInUp\"\n        >\n          <div class=\"fh5co-heading\">\n            <span>Exciting! What are we watching?</span>\n            <h2>Movies...</h2>\n            <!-- <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"movies\">\n        <div *ngFor=\"let movie of movies\">\n          <div class=\"col-md-4 col-sm-6\">\n            <div class=\"feature-center\" data-animate-effect=\"fadeInUp\">\n              <span class=\"icon\">\n                <i class=\"icon-monitor\"></i>\n              </span>\n              <h3>{{ movie.title }}</h3>\n              <p>\n                Far far away, behind the word mountains, far from the countries\n                Vokalia and... <br/>\n                <strong>Genre(s):</strong>\n                <span *ngFor=\"let genre of movie.genres\"\n                  > {{ genre.name }},\n                </span>\n                <br />\n                <strong>Star(s):</strong>\n                <span *ngFor=\"let star of movie.stars\"> {{ star.name }},</span>\n              </p>\n              <p><a href=\"#\">Learn more</a></p>\n            </div>\n          </div>\n          <!-- <div class=\"clearfix visible-sm-block\"></div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</div>\n\n<div class=\"gototop js-top\">\n  <a href=\"#\" class=\"js-gotop\"><i class=\"icon-arrow-up\"></i></a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 1080\">\n  <title>404</title>\n  <g id=\"Layer_12 yellow-back-fig\" data-name=\"Layer 12\">\n    <path class=\"cls-1\" d=\"M600.87,872H156a4,4,0,0,0-3.78,4.19h0a4,4,0,0,0,3.78,4.19H600.87a4,4,0,0,0,3.78-4.19h0A4,4,0,0,0,600.87,872Z\"/>\n    <rect class=\"cls-1\" x=\"680.91\" y=\"871.98\" width=\"513.38\" height=\"8.39\" rx=\"4.19\" ry=\"4.19\"/>\n    <path class=\"cls-1\" d=\"M1480,876.17h0c0,2.32,2.37,4.19,5.3,4.19h350.61c2.93,0,5.3-1.88,5.3-4.19h0c0-2.32-2.37-4.19-5.3-4.19H1485.26C1482.33,872,1480,873.86,1480,876.17Z\"/>\n    <rect class=\"cls-1\" x=\"492.21\" y=\"920.64\" width=\"249.8\" height=\"8.39\" rx=\"4.19\" ry=\"4.19\"/>\n    <path class=\"cls-1\" d=\"M1549.14,924.84h0a4.19,4.19,0,0,0-4.19-4.19H1067.46a14.66,14.66,0,0,1,.35,3.21v1A4.19,4.19,0,0,0,1072,929h472.94A4.19,4.19,0,0,0,1549.14,924.84Z\"/>\n    <path class=\"cls-1\" d=\"M865.5,924.84h0a4.19,4.19,0,0,0,4.19,4.19h82.37a12.28,12.28,0,0,1-.19-2v-2.17a4.19,4.19,0,0,0-4.19-4.19h-78A4.19,4.19,0,0,0,865.5,924.84Z\"/>\n    <rect class=\"cls-1\" x=\"915.6\" y=\"981.47\" width=\"54.72\" height=\"8.39\" rx=\"4.19\" ry=\"4.19\"/>\n    <path class=\"cls-1\" d=\"M730.33,985.67h0c0,2.32,4.23,4.19,9.44,4.19h104.3c5.22,0,9.44-1.88,9.44-4.19h0c0-2.32-4.23-4.19-9.44-4.19H739.78C734.56,981.47,730.33,983.35,730.33,985.67Z\"/>\n    <rect class=\"cls-1\" x=\"997.06\" y=\"981.47\" width=\"78.11\" height=\"8.39\" rx=\"4.19\" ry=\"4.19\"/>\n\n   <g id=\"round-conf\">\n    <path class=\"cls-1 circle c1\" d=\"M536.41,155.14a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,536.41,155.14Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,536.41,183.81Z\"/>\n    <path class=\"cls-1 circle c2\" d=\"M1345.09,82.44a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1345.09,82.44Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1345.09,111.12Z\"/>\n    <path class=\"cls-1 circle c3\" d=\"M70.12,363A17.77,17.77,0,1,0,87.89,380.8,17.77,17.77,0,0,0,70.12,363Zm0,28.68A10.9,10.9,0,1,1,81,380.8,10.9,10.9,0,0,1,70.12,391.7Z\"/>\n    <path class=\"cls-1 circle c4\" d=\"M170.47,751.82a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,170.47,751.82Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,170.47,780.5Z\"/>\n    <path class=\"cls-1 circle c5\" d=\"M1457.34,762.73a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1457.34,762.73Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1457.34,791.4Z\"/>\n    <path class=\"cls-1 circle c6\" d=\"M1829.15,407.49a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1829.15,407.49Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1829.15,436.17Z\"/>\n    </g>\n  </g>\n  <g id=\"fortyfour\" data-name=\"Layer 2\">\n    <g class=\"four a\">\n\n      <rect class=\"cls-2\" x=\"233.74\" y=\"391.14\" width=\"120.71\" height=\"466.29\" rx=\"57.1\" ry=\"57.1\" transform=\"translate(918.39 330.19) rotate(90)\"/>\n\n      <rect class=\"cls-3\" x=\"333.83\" y=\"475.1\" width=\"120.71\" height=\"396.88\" rx=\"60.36\" ry=\"60.36\"/>\n\n      <rect class=\"cls-3\" x=\"197.13\" y=\"122.89\" width=\"120.71\" height=\"604.75\" rx=\"60.36\" ry=\"60.36\" transform=\"translate(290.49 -70.78) rotate(35)\"/>\n\n    </g>\n    <g class=\"four b\">\n\n      <rect class=\"cls-2\" x=\"1558.84\" y=\"391.91\" width=\"120.71\" height=\"466.29\" rx=\"57.1\" ry=\"57.1\" transform=\"translate(2244.26 -994.14) rotate(90)\"/>\n\n\n      <rect class=\"cls-3\" x=\"1658.92\" y=\"475.87\" width=\"120.71\" height=\"396.88\" rx=\"60.36\" ry=\"60.36\"/>\n\n      <rect class=\"cls-3\" x=\"1522.22\" y=\"123.66\" width=\"120.71\" height=\"604.75\" rx=\"60.36\" ry=\"60.36\" transform=\"translate(530.57 -830.68) rotate(35)\"/>\n\n    </g>\n    <path class=\"cls-3\" id=\"ou\" d=\"M956.54,168.2c-194.34,0-351.89,157.55-351.89,351.89S762.19,872,956.54,872s351.89-157.55,351.89-351.89S1150.88,168.2,956.54,168.2Zm0,584.49c-128.46,0-232.6-104.14-232.6-232.6s104.14-232.6,232.6-232.6,232.6,104.14,232.6,232.6S1085,752.69,956.54,752.69Z\"/>\n  </g>\n  <g id=\"umbrella\" data-name=\"Layer 3\">\n    <g>\n      <circle class=\"cls-4\" cx=\"1187.53\" cy=\"240.3\" r=\"7.66\" transform=\"translate(236.36 990.8) rotate(-49.71)\"/>\n      <g>\n        <path class=\"cls-5\" d=\"M1219.56,359.67l55,100.52c32.7-48.48-6.87-142.43-91.75-214.38-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z\"/>\n        <path class=\"cls-6\" d=\"M1182.79,245.81c-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z\"/>\n        <polygon class=\"cls-7\" points=\"1182.79 245.81 1071.19 233.91 1219.56 359.67 1182.79 245.81\"/>\n      </g>\n      <polygon class=\"cls-8\" points=\"1180.91 409.02 1274.54 460.19 1219.56 359.67 1071.19 233.91 956.98 189.76 1021.95 274.29 1180.91 409.02\"/>\n      <g>\n        <rect class=\"cls-4\" x=\"997.45\" y=\"358.35\" width=\"175.58\" height=\"5.1\" transform=\"translate(108.21 955.38) rotate(-49.71)\"/>\n        <rect class=\"cls-4\" x=\"1028.09\" y=\"399.36\" width=\"21.46\" height=\"32.27\" rx=\"10.73\" ry=\"10.73\" transform=\"translate(515.04 -573.16) rotate(40.29)\"/>\n      </g>\n    </g>\n  </g>\n  <g id=\"pillow\" data-name=\"Layer 4\">\n    <path class=\"cls-1\" d=\"M754,627.07c7,.54,12.92-2.82,13.35-7.59s-4.95-9.24-12-9.87a18.55,18.55,0,0,0-2.17,0l-74.9-81.64c0-.1,0-.19,0-.29,0-7.09-4-12.83-8.8-12.81s-8.75,5.77-8.73,12.87c0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65Z\"/>\n    <path class=\"cls-9\" d=\"M669.46,514.82c-4.77-.83-8.75,5.77-8.73,12.87,0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65C570.55,573,702.07,520.47,669.46,514.82Z\"/>\n  </g>\n  <g id=\"cup\" data-name=\"Layer 7\">\n    <polygon class=\"cls-1\" points=\"1173.69 748.21 1140.52 715.42 1195.79 647.35 1241.13 692.16 1173.69 748.21\"/>\n    <polygon class=\"cls-8\" points=\"1173.69 748.21 1140.52 715.42 1143.93 711.27 1177.81 744.75 1173.69 748.21\"/>\n    <polygon class=\"cls-5\" points=\"1194.68 731.46 1157.04 694.24 1183.8 661.7 1226.91 704.32 1194.68 731.46\"/>\n    <g class=\"cls-10\">\n      <path class=\"cls-8\" d=\"M1176.32,667.78h0a4.19,4.19,0,0,1,4.19,4.19v33.54a0,0,0,0,1,0,0h-8.38a0,0,0,0,1,0,0V672a4.19,4.19,0,0,1,4.19-4.19Z\" transform=\"translate(822.53 -628.67) rotate(44.67)\"/>\n      <path class=\"cls-8\" d=\"M1172.73,709.7l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92l-23.58,23.85Z\"/>\n      <path class=\"cls-8\" d=\"M1185.11,722.09l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92L1191.06,728Z\"/>\n    </g>\n    <path class=\"cls-5\" d=\"M1197.85,660.5h45.69a5.7,5.7,0,0,1,5.7,5.7v8.32a0,0,0,0,1,0,0h-57.09a0,0,0,0,1,0,0v-8.32A5.7,5.7,0,0,1,1197.85,660.5Z\" transform=\"translate(829.53 -667.66) rotate(45)\"/>\n    <path class=\"cls-8\" d=\"M1191.49,664.74h53.94a5.25,5.25,0,0,1,5.25,5.25v4.79a0,0,0,0,1,0,0h-64.44a0,0,0,0,1,0,0V670a5.25,5.25,0,0,1,5.25-5.25Z\" transform=\"translate(822.83 -663.17) rotate(44.67)\"/>\n  </g>\n  <g id=\"clock\" data-name=\"Layer 8\">\n\n    <circle class=\"cls-5\" cx=\"847.7\" cy=\"247.59\" r=\"74.66\" transform=\"translate(-32.91 314.05) rotate(-20.6)\"/>\n    <circle class=\"cls-1\" cx=\"847.7\" cy=\"247.59\" r=\"63.44\" transform=\"translate(-32.91 314.05) rotate(-20.6)\"/>\n    <rect class=\"cls-3 clock-hand-1\" x=\"845\" y=\"189.5\" width=\"6.04\" height=\"58\" rx=\"3.02\" ry=\"3.02\" />\n    <rect class=\"cls-3 clock-hand-2\" x=\"845\" y=\"209.5\" width=\"6.04\" height=\"38\" rx=\"3.02\" ry=\"3.02\" transform=\"translate(1611.22 -230.4) rotate(130.4)\"/>\n        <circle class=\"cls-3\" cx=\"847.7\" cy=\"247.59\" transform=\"translate(-32.91 314.05) rotate(-20.6)\" r=\"3\" />\n  </g>\n  <g id=\"box\" data-name=\"Layer 9\">\n    <g id=\"box-top\"><polygon class=\"cls-8\" points=\"569.71 382.28 653.74 329.39 747.13 320.1 679.2 369.85 569.71 382.28\"></polygon>\n    <polygon class=\"cls-5\" points=\"691.95 367.2 570.87 392.34 565.32 383.35 687.8 357.45 691.95 367.2\"></polygon>\n\n\n    <polygon class=\"cls-5\" points=\"661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48\"></polygon><polygon class=\"cls-7\" points=\"661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48\"></polygon><polygon class=\"cls-5\" points=\"747.13 320.1 661.54 337.48 652.25 322.38 738.4 307.1 747.13 320.1\"></polygon>\n    </g>\n      <path class=\"cls-5\" d=\"M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z\"></path>\n      <path class=\"cls-7\" d=\"M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z\"></path>\n    <rect class=\"cls-5\" x=\"693.73\" y=\"335.51\" width=\"83.99\" height=\"90.58\" transform=\"translate(-89.78 450.43) rotate(-32.19)\"></rect>\n\n\n\n  </g>\n\n  <g id=\"rucksack\" data-name=\"Layer 6\">\n    <g id=\"stripe\"><path class=\"cls-12\" d=\"M1200.32,473.91h0a13.74,13.74,0,0,0-18.41,7.44l-55,129.86a14.82,14.82,0,0,0,7.13,19.21h0a13.74,13.74,0,0,0,18.41-7.44l55-129.86A14.82,14.82,0,0,0,1200.32,473.91Z\"/>\n    <path class=\"cls-13\" d=\"M1202.18,606.34h0a14,14,0,0,0-16.18-11.8l-48.83,9c-7.59,1.4-12.66,9-11.31,16.89h0a14,14,0,0,0,16.18,11.8l48.83-9C1198.46,621.82,1203.53,614.26,1202.18,606.34Z\"/>\n    </g>\n    <path class=\"cls-8\" d=\"M1300.86,603l-122.93,22.74-15.44-90.91c-5.75-33.86,15.89-66.17,48.34-72.18l11.58-2.08c32.45-6,57.26,17.66,63,51.51Z\"/>\n    <path class=\"cls-1\" d=\"M1307,601.91l-112.32,20.78-15.9-93.61c-5.5-32.36,15.19-63.25,46.2-69h0c31-5.74,60.62,15.85,66.12,48.21Z\"/>\n    <path class=\"cls-8\" d=\"M1296.76,603.8,1215,618.92l-4.89-28.77c-2.11-12.42,5.83-24.27,17.73-26.47l38.67-7.15c11.9-2.2,23.26,6.08,25.37,18.5Z\"/>\n    <path class=\"cls-5\" d=\"M1296.76,603.8l-73.41,13.58-4.92-29c-2-11.62,5.45-22.72,16.6-24.78l33.07-6.12c11.14-2.06,21.77,5.69,23.75,17.32Z\"/>\n    <path class=\"cls-4\" d=\"M1231.77,469.69l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1231.77,469.69Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19l-1.48-8.73a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z\"/>\n    <path class=\"cls-14\" d=\"M1233.74,471.13l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1233.74,471.13Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19L1219,487a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z\"/>\n  </g>\n  <g id=\"bike\" data-name=\"Layer 5\">\n    <path class=\"cls-8 wheel\" d=\"M1139.82,780.44a76.59,76.59,0,1,0-57.9,91.53A76.59,76.59,0,0,0,1139.82,780.44Zm-28.12,6.33a47.59,47.59,0,0,1,.83,15.8c-30.14-6.28-47.68-21.65-54.39-52.52A47.73,47.73,0,0,1,1111.69,786.77Zm-70.46-30.9c10.35,26.88,10.14,50.4-13.73,70.77a47.67,47.67,0,0,1,13.73-70.77Zm34.35,88a47.55,47.55,0,0,1-34.94-5.62c16.8-20.36,41.71-25.94,67.09-19.46A47.66,47.66,0,0,1,1075.58,843.85Z\"/>\n    <path class=\"cls-8 wheel\" d=\"M864.89,789.69a76.59,76.59,0,1,0-66.13,85.78A76.59,76.59,0,0,0,864.89,789.69Zm-28.59,3.7a47.59,47.59,0,0,1-.64,15.81c-29.43-9-45.47-26-49.3-57.33A47.73,47.73,0,0,1,836.3,793.39ZM769,756.1c7.82,27.72,5.43,51.12-20.22,69.2A47.67,47.67,0,0,1,769,756.1Zm26.06,90.78a47.55,47.55,0,0,1-34.27-8.83c18.61-18.72,43.93-22,68.6-13.16A47.66,47.66,0,0,1,795.06,846.88Z\"/>\n    <g>\n      <rect class=\"cls-1\" x=\"871.39\" y=\"693.37\" width=\"12.87\" height=\"53.21\" transform=\"translate(-165.97 273.38) rotate(-16.19)\"/>\n      <path class=\"cls-5\" d=\"M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z\"/>\n      <path class=\"cls-7\" d=\"M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z\"/>\n      <path class=\"cls-5\" d=\"M817.15,680.06c-3.59-5,1.69-16.51,8.37-14.22,32.3,11.09,71.41,7.83,71.41,7.83,8.54.14,17.45,9.94,7.43,15.88-13.87,8.51-32,16.44-54.44,9.44C832.84,693.67,822.85,688,817.15,680.06Z\"/>\n    </g>\n    <g>\n      <circle class=\"cls-9\" cx=\"1022.66\" cy=\"599.55\" r=\"11.57\" transform=\"translate(-4.86 8.38) rotate(-0.47)\"/>\n      <path class=\"cls-1\" d=\"M1069.76,792.37l-34.89-96.74,1.93-.8-1.71-4.15-1.74.72-13.26-36.76,1.27-.42-2.25-6.76,5.94-2-2.57-7.72-9.7,3.22c-11.55-22.55,2-36.33,15-41.86l-5.57-8.81c-23,10.29-29.61,28.75-19.53,54l-9.38,3.12,2.56,7.72,5.47-1.82,2.25,6.76,2.36-.78,13.62,37.76-2.35,1,1.71,4.15,2.16-.89,34.65,96.09a7.47,7.47,0,0,0,9.56,4.49h0A7.47,7.47,0,0,0,1069.76,792.37Z\"/>\n      <circle class=\"cls-11\" cx=\"1027.9\" cy=\"587.94\" r=\"12.99\" transform=\"translate(-4.77 8.42) rotate(-0.47)\"/>\n    </g>\n    <path class=\"cls-5\" d=\"M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z\"/>\n    <path class=\"cls-7\" d=\"M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z\"/>\n  </g>\n</svg>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-page/single-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-page/single-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>single-page works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_browser_page_browser_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/browser-page/browser-page.component */ "./src/app/pages/browser-page/browser-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_movies_page_movies_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/movies-page/movies-page.component */ "./src/app/pages/movies-page/movies-page.component.ts");



// Services

// Component






const routes = [
    { path: '', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"] },
    { path: 'index', redirectTo: '', pathMatch: 'full' },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
    {
        path: 'browser',
        component: _pages_browser_page_browser_page_component__WEBPACK_IMPORTED_MODULE_7__["BrowserPageComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'movies',
        component: _pages_movies_page_movies_page_component__WEBPACK_IMPORTED_MODULE_9__["MoviesPageComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'about',
        component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'movies-website-client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_browser_page_browser_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/browser-page/browser-page.component */ "./src/app/pages/browser-page/browser-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_movies_page_movies_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/movies-page/movies-page.component */ "./src/app/pages/movies-page/movies-page.component.ts");
/* harmony import */ var _pages_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/single-page/single-page.component */ "./src/app/pages/single-page/single-page.component.ts");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
            _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
            _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _pages_browser_page_browser_page_component__WEBPACK_IMPORTED_MODULE_11__["BrowserPageComponent"],
            _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_12__["AboutPageComponent"],
            _pages_movies_page_movies_page_component__WEBPACK_IMPORTED_MODULE_13__["MoviesPageComponent"],
            _pages_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_14__["SinglePageComponent"],
            _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_15__["ContactPageComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__["NavBarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-box {\n  opacity: 0.75;\n  height: 2em;\n  border-radius: 1.5em;\n  background: white;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raG9hbmd1eWVuL0Rvd25sb2Fkcy9TY2hvb2wvY29kZS9Qcm9qZWN0cy9tb3ZpZXMtd2Vic2l0ZS9tb3ZpZXMtd2Vic2l0ZS1jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYm94IHtcbiAgb3BhY2l0eTogMC43NTtcbiAgaGVpZ2h0OiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIiwiLnNlYXJjaC1ib3gge1xuICBvcGFjaXR5OiAwLjc1O1xuICBoZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let NavBarComponent = class NavBarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = this.authService.isLoggedIn();
        this.currentURL = this.router.url;
        this.search = null;
    }
    ngOnInit() {
        console.log(this.currentURL);
    }
    logout() {
        this.authService.logOut();
    }
    onSubmit(data) {
        // console.log(data);
        if (data.title) {
            this.router.navigate(['/movies'], { queryParams: { search: true, title: data.title } });
        }
    }
};
NavBarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/components/nav-bar/nav-bar.component.scss")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutPageComponent = class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-page/about-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-page.component.scss */ "./src/app/pages/about-page/about-page.component.scss")).default]
    })
], AboutPageComponent);



/***/ }),

/***/ "./src/app/pages/browser-page/browser-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/browser-page/browser-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jyb3dzZXItcGFnZS9icm93c2VyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/browser-page/browser-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/browser-page/browser-page.component.ts ***!
  \**************************************************************/
/*! exports provided: BrowserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPageComponent", function() { return BrowserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");



// Services

let BrowserPageComponent = class BrowserPageComponent {
    constructor(moviesService, router) {
        this.moviesService = moviesService;
        this.router = router;
        this.genres = null;
    }
    ngOnInit() {
        this.moviesService.getGenres().then(data => {
            console.log(data.data);
            this.genres = data.data;
        });
    }
    getMoviesFromGenre(id) {
        this.router.navigate(['/movies'], { queryParams: { search: false, genreId: id } });
    }
};
BrowserPageComponent.ctorParameters = () => [
    { type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BrowserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-browser-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./browser-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/browser-page/browser-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./browser-page.component.scss */ "./src/app/pages/browser-page/browser-page.component.scss")).default]
    })
], BrowserPageComponent);



/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactPageComponent = class ContactPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/pages/contact-page/contact-page.component.scss")).default]
    })
], ContactPageComponent);



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let LoginPageComponent = class LoginPageComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        if (sessionStorage.getItem("token")) {
            this.router.navigate([this.authService.redirectUrl || "\index"]);
        }
    }
    login(data) {
        if (!data.email || !data.password) {
            this.error = "Please enter all valid information!";
            return;
        }
        else {
            this.error = null;
        }
        this.email = data.email;
        this.password = data.password;
        // console.log("Login", this.email, this.password);
        this.authService.logIn(this.email, this.password).then(data => {
            // console.log(data);
            if (!data.success) {
                throw data.error;
            }
        }).catch(err => {
            console.log(err);
            this.error = err.error;
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");


// Services


let MainPageComponent = class MainPageComponent {
    constructor(moviesService, authService) {
        this.moviesService = moviesService;
        this.authService = authService;
        this.movieData = null;
        this.isLoggedIn = this.authService.isLoggedIn();
    }
    ngOnInit() {
        // TODO: fix pagination! one request with 9 items and only display 3
        this.moviesService.getRecentMovies('?limit=9').then(data => {
            this.movieData = data.data;
        });
    }
};
MainPageComponent.ctorParameters = () => [
    { type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.scss */ "./src/app/pages/main-page/main-page.component.scss")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/pages/movies-page/movies-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/movies-page/movies-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllcy1wYWdlL21vdmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/movies-page/movies-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/movies-page/movies-page.component.ts ***!
  \************************************************************/
/*! exports provided: MoviesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesPageComponent", function() { return MoviesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");



// Services

let MoviesPageComponent = class MoviesPageComponent {
    constructor(activatedRoute, moviesService) {
        this.activatedRoute = activatedRoute;
        this.moviesService = moviesService;
        this.movies = null;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((data) => {
            console.log(data);
            if (data.genreId) {
                this.getMoviesByGenre(data.genreId);
            }
            if (data.search) {
                this.getMovies(data);
            }
        });
    }
    getMoviesByGenre(id) {
        this.moviesService.getMoviesFromGenre(id).then((movies) => {
            console.log(movies);
            this.movies = movies.data;
        });
    }
    getMovies(data) {
        this.moviesService.getMovies(data).then(movies => {
            console.log(movies);
            this.movies = movies.data;
        });
    }
};
MoviesPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }
];
MoviesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-movies-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movies-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-page/movies-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies-page.component.scss */ "./src/app/pages/movies-page/movies-page.component.scss")).default]
    })
], MoviesPageComponent);



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cls-1 {\n  fill: #ffc541;\n}\n\n.cls-2 {\n  fill: #4e4066;\n}\n\n.cls-3 {\n  fill: #6f5b92;\n}\n\n.cls-4 {\n  fill: #f78d5e;\n}\n\n.cls-5 {\n  fill: #fa976c;\n}\n\n.cls-6,\n.cls-7,\n.cls-8 {\n  fill: #b65c32;\n}\n\n.cls-10,\n.cls-6 {\n  opacity: 0.6;\n}\n\n.cls-7 {\n  opacity: 0.4;\n}\n\n.cls-9 {\n  fill: #f4b73b;\n}\n\n.cls-11 {\n  fill: #f9c358;\n}\n\n.cls-12 {\n  fill: #9b462c;\n}\n\n.cls-13 {\n  fill: #aa512e;\n}\n\n.cls-14 {\n  fill: #7d6aa5;\n}\n\n/* animations */\n\n.wheel {\n  -webkit-animation: wheel-rotate 6s ease infinite;\n          animation: wheel-rotate 6s ease infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes wheel-rotate {\n  50% {\n    transform: rotate(360deg);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n            animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  }\n  100% {\n    transform: rotate(960deg);\n  }\n}\n\n@keyframes wheel-rotate {\n  50% {\n    transform: rotate(360deg);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n            animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  }\n  100% {\n    transform: rotate(960deg);\n  }\n}\n\n.clock-hand-1 {\n  -webkit-animation: clock-rotate 3s linear infinite;\n          animation: clock-rotate 3s linear infinite;\n  transform-origin: bottom;\n  transform-box: fill-box;\n}\n\n.clock-hand-2 {\n  -webkit-animation: clock-rotate 6s linear infinite;\n          animation: clock-rotate 6s linear infinite;\n  transform-origin: bottom;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes clock-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes clock-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#box-top {\n  -webkit-animation: box-top-anim 2s linear infinite;\n          animation: box-top-anim 2s linear infinite;\n  transform-origin: right top;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes box-top-anim {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n\n@keyframes box-top-anim {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n\n#umbrella {\n  -webkit-animation: umbrella-anim 6s linear infinite;\n          animation: umbrella-anim 6s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes umbrella-anim {\n  25% {\n    transform: translateY(10px) rotate(5deg);\n  }\n  75% {\n    transform: rotate(-5deg);\n  }\n}\n\n@keyframes umbrella-anim {\n  25% {\n    transform: translateY(10px) rotate(5deg);\n  }\n  75% {\n    transform: rotate(-5deg);\n  }\n}\n\n#cup {\n  -webkit-animation: cup-rotate 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;\n          animation: cup-rotate 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;\n  transform-origin: top left;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes cup-rotate {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n\n@keyframes cup-rotate {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n\n#pillow {\n  -webkit-animation: pillow-anim 3s linear infinite;\n          animation: pillow-anim 3s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes pillow-anim {\n  25% {\n    transform: rotate(10deg) translateY(5px);\n  }\n  75% {\n    transform: rotate(-10deg);\n  }\n}\n\n@keyframes pillow-anim {\n  25% {\n    transform: rotate(10deg) translateY(5px);\n  }\n  75% {\n    transform: rotate(-10deg);\n  }\n}\n\n#stripe {\n  -webkit-animation: stripe-anim 3s linear infinite;\n          animation: stripe-anim 3s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes stripe-anim {\n  25% {\n    transform: translate(10px, 0) rotate(-10deg);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n\n@keyframes stripe-anim {\n  25% {\n    transform: translate(10px, 0) rotate(-10deg);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n\n#bike {\n  -webkit-animation: bike-anim 6s ease infinite;\n          animation: bike-anim 6s ease infinite;\n}\n\n@-webkit-keyframes bike-anim {\n  0% {\n    transform: translateX(-1300px);\n  }\n  50% {\n    transform: translateX(0);\n    -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n            animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n  }\n  100% {\n    transform: translateX(1300px);\n  }\n}\n\n@keyframes bike-anim {\n  0% {\n    transform: translateX(-1300px);\n  }\n  50% {\n    transform: translateX(0);\n    -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n            animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n  }\n  100% {\n    transform: translateX(1300px);\n  }\n}\n\n#rucksack {\n  -webkit-animation: ruck-anim 3s linear infinite;\n          animation: ruck-anim 3s linear infinite;\n  transform-origin: top;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes ruck-anim {\n  50% {\n    transform: rotate(5deg);\n  }\n}\n\n@keyframes ruck-anim {\n  50% {\n    transform: rotate(5deg);\n  }\n}\n\n.circle {\n  -webkit-animation: circle-anim ease infinite;\n          animation: circle-anim ease infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n  perspective: 0px;\n}\n\n.circle.c1 {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.circle.c2 {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n}\n\n.circle.c3 {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n.circle.c4 {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n.circle.c5 {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.circle.c6 {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n}\n\n@-webkit-keyframes circle-anim {\n  50% {\n    transform: scale(0.2) rotateX(360deg) rotateY(360deg);\n  }\n}\n\n@keyframes circle-anim {\n  50% {\n    transform: scale(0.2) rotateX(360deg) rotateY(360deg);\n  }\n}\n\n.four,\n#ou {\n  -webkit-animation: four-anim cubic-bezier(0.39, 0.575, 0.565, 1) infinite;\n          animation: four-anim cubic-bezier(0.39, 0.575, 0.565, 1) infinite;\n}\n\n.four.a {\n  transform-origin: bottom left;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  transform-box: fill-box;\n}\n\n.four.b {\n  transform-origin: bottom right;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  transform-box: fill-box;\n}\n\n#ou {\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes four-anim {\n  50% {\n    transform: scale(0.98);\n  }\n}\n\n@keyframes four-anim {\n  50% {\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raG9hbmd1eWVuL0Rvd25sb2Fkcy9TY2hvb2wvY29kZS9Qcm9qZWN0cy9tb3ZpZXMtd2Vic2l0ZS9tb3ZpZXMtd2Vic2l0ZS1jbGllbnQvc3JjL2FwcC9wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGFBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FER0EsZUFBQTs7QUFFQTtFQUNFLGdEQUFBO1VBQUEsd0NBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLHlCQUFBO0lBQ0Esd0VBQUE7WUFBQSxnRUFBQTtFQ0RGO0VER0E7SUFDRSx5QkFBQTtFQ0RGO0FBQ0Y7O0FETkE7RUFDRTtJQUNFLHlCQUFBO0lBQ0Esd0VBQUE7WUFBQSxnRUFBQTtFQ0RGO0VER0E7SUFDRSx5QkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0RBQUE7VUFBQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFO0lBQ0UseUJBQUE7RUNGRjtBQUNGOztBRERBO0VBQ0U7SUFDRSx5QkFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0U7SUFDRSx3QkFBQTtFQ0hGO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLHdCQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDSkY7O0FET0E7RUFDRTtJQUNFLHdDQUFBO0VDSkY7RURNQTtJQUNFLHdCQUFBO0VDSkY7QUFDRjs7QURGQTtFQUNFO0lBQ0Usd0NBQUE7RUNKRjtFRE1BO0lBQ0Usd0JBQUE7RUNKRjtBQUNGOztBRE9BO0VBQ0UsaUZBQUE7VUFBQSx5RUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUNMRjs7QURRQTtFQUNFO0lBQ0Usd0JBQUE7RUNMRjtBQUNGOztBREVBO0VBQ0U7SUFDRSx3QkFBQTtFQ0xGO0FBQ0Y7O0FEUUE7RUFDRSxpREFBQTtVQUFBLHlDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ05GOztBRFNBO0VBQ0U7SUFDRSx3Q0FBQTtFQ05GO0VEUUE7SUFDRSx5QkFBQTtFQ05GO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLHdDQUFBO0VDTkY7RURRQTtJQUNFLHlCQUFBO0VDTkY7QUFDRjs7QURTQTtFQUNFLGlEQUFBO1VBQUEseUNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDUEY7O0FEVUE7RUFDRTtJQUNFLDRDQUFBO0VDUEY7RURTQTtJQUNFLDJCQUFBO0VDUEY7QUFDRjs7QURDQTtFQUNFO0lBQ0UsNENBQUE7RUNQRjtFRFNBO0lBQ0UsMkJBQUE7RUNQRjtBQUNGOztBRFVBO0VBQ0UsNkNBQUE7VUFBQSxxQ0FBQTtBQ1JGOztBRFdBO0VBQ0U7SUFDRSw4QkFBQTtFQ1JGO0VEVUE7SUFDRSx3QkFBQTtJQUNBLHNFQUFBO1lBQUEsOERBQUE7RUNSRjtFRFVBO0lBQ0UsNkJBQUE7RUNSRjtBQUNGOztBREZBO0VBQ0U7SUFDRSw4QkFBQTtFQ1JGO0VEVUE7SUFDRSx3QkFBQTtJQUNBLHNFQUFBO1lBQUEsOERBQUE7RUNSRjtFRFVBO0lBQ0UsNkJBQUE7RUNSRjtBQUNGOztBRFdBO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNURjs7QURZQTtFQUNFO0lBQ0UsdUJBQUE7RUNURjtBQUNGOztBRE1BO0VBQ0U7SUFDRSx1QkFBQTtFQ1RGO0FBQ0Y7O0FEWUE7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVkY7O0FEYUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVkY7O0FEYUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVkY7O0FEYUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVkY7O0FEYUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVkY7O0FEYUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVkY7O0FEYUE7RUFDRTtJQUNFLHFEQUFBO0VDVkY7QUFDRjs7QURPQTtFQUNFO0lBQ0UscURBQUE7RUNWRjtBQUNGOztBRGFBOztFQUVFLHlFQUFBO1VBQUEsaUVBQUE7QUNYRjs7QURjQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHVCQUFBO0FDWEY7O0FEY0E7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSx1QkFBQTtBQ1hGOztBRGNBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNYRjs7QURjQTtFQUNFO0lBQ0Usc0JBQUE7RUNYRjtBQUNGOztBRFFBO0VBQ0U7SUFDRSxzQkFBQTtFQ1hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHMtMSB7XG4gIGZpbGw6ICNmZmM1NDE7XG59XG5cbi5jbHMtMiB7XG4gIGZpbGw6ICM0ZTQwNjY7XG59XG5cbi5jbHMtMyB7XG4gIGZpbGw6ICM2ZjViOTI7XG59XG5cbi5jbHMtNCB7XG4gIGZpbGw6ICNmNzhkNWU7XG59XG5cbi5jbHMtNSB7XG4gIGZpbGw6ICNmYTk3NmM7XG59XG5cbi5jbHMtNixcbi5jbHMtNyxcbi5jbHMtOCB7XG4gIGZpbGw6ICNiNjVjMzI7XG59XG5cbi5jbHMtMTAsXG4uY2xzLTYge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5jbHMtNyB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmNscy05IHtcbiAgZmlsbDogI2Y0YjczYjtcbn1cblxuLmNscy0xMSB7XG4gIGZpbGw6ICNmOWMzNTg7XG59XG5cbi5jbHMtMTIge1xuICBmaWxsOiAjOWI0NjJjO1xufVxuXG4uY2xzLTEzIHtcbiAgZmlsbDogI2FhNTEyZTtcbn1cblxuLmNscy0xNCB7XG4gIGZpbGw6ICM3ZDZhYTU7XG59XG5cblxuLyogYW5pbWF0aW9ucyAqL1xuXG4ud2hlZWwge1xuICBhbmltYXRpb246IHdoZWVsLXJvdGF0ZSA2cyBlYXNlIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIHdoZWVsLXJvdGF0ZSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDk2MGRlZylcbiAgfVxufVxuXG4uY2xvY2staGFuZC0xIHtcbiAgYW5pbWF0aW9uOiBjbG9jay1yb3RhdGUgM3MgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG4uY2xvY2staGFuZC0yIHtcbiAgYW5pbWF0aW9uOiBjbG9jay1yb3RhdGUgNnMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIGNsb2NrLXJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgfVxufVxuXG4jYm94LXRvcCB7XG4gIGFuaW1hdGlvbjogYm94LXRvcC1hbmltIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBib3gtdG9wLWFuaW0ge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKVxuICB9XG59XG5cbiN1bWJyZWxsYSB7XG4gIGFuaW1hdGlvbjogdW1icmVsbGEtYW5pbSA2cyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgdW1icmVsbGEtYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg1ZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxufVxuXG4jY3VwIHtcbiAgYW5pbWF0aW9uOiBjdXAtcm90YXRlIDNzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIGN1cC1yb3RhdGUge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKVxuICB9XG59XG5cbiNwaWxsb3cge1xuICBhbmltYXRpb246IHBpbGxvdy1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBwaWxsb3ctYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpIHRyYW5zbGF0ZVkoNXB4KVxuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKVxuICB9XG59XG5cbiNzdHJpcGUge1xuICBhbmltYXRpb246IHN0cmlwZS1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBzdHJpcGUtYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCkgcm90YXRlKC0xMGRlZylcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KVxuICB9XG59XG5cbiNiaWtlIHtcbiAgYW5pbWF0aW9uOiBiaWtlLWFuaW0gNnMgZWFzZSBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBiaWtlLWFuaW0ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzAwcHgpXG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzMDBweClcbiAgfVxufVxuXG4jcnVja3NhY2sge1xuICBhbmltYXRpb246IHJ1Y2stYW5pbSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgcnVjay1hbmltIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKVxuICB9XG59XG5cbi5jaXJjbGUge1xuICBhbmltYXRpb246IGNpcmNsZS1hbmltIGVhc2UgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG4gIHBlcnNwZWN0aXZlOiAwcHg7XG59XG5cbi5jaXJjbGUuYzEge1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzXG59XG5cbi5jaXJjbGUuYzIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzXG59XG5cbi5jaXJjbGUuYzMge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzXG59XG5cbi5jaXJjbGUuYzQge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzXG59XG5cbi5jaXJjbGUuYzUge1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzXG59XG5cbi5jaXJjbGUuYzYge1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzXG59XG5cbkBrZXlmcmFtZXMgY2lyY2xlLWFuaW0ge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjIpIHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDM2MGRlZylcbiAgfVxufVxuXG4uZm91cixcbiNvdSB7XG4gIGFuaW1hdGlvbjogZm91ci1hbmltIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGluZmluaXRlO1xufVxuXG4uZm91ci5hIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG4uZm91ci5iIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuI291IHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBmb3VyLWFuaW0ge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk4KVxuICB9XG59XG4iLCIuY2xzLTEge1xuICBmaWxsOiAjZmZjNTQxO1xufVxuXG4uY2xzLTIge1xuICBmaWxsOiAjNGU0MDY2O1xufVxuXG4uY2xzLTMge1xuICBmaWxsOiAjNmY1YjkyO1xufVxuXG4uY2xzLTQge1xuICBmaWxsOiAjZjc4ZDVlO1xufVxuXG4uY2xzLTUge1xuICBmaWxsOiAjZmE5NzZjO1xufVxuXG4uY2xzLTYsXG4uY2xzLTcsXG4uY2xzLTgge1xuICBmaWxsOiAjYjY1YzMyO1xufVxuXG4uY2xzLTEwLFxuLmNscy02IHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uY2xzLTcge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5jbHMtOSB7XG4gIGZpbGw6ICNmNGI3M2I7XG59XG5cbi5jbHMtMTEge1xuICBmaWxsOiAjZjljMzU4O1xufVxuXG4uY2xzLTEyIHtcbiAgZmlsbDogIzliNDYyYztcbn1cblxuLmNscy0xMyB7XG4gIGZpbGw6ICNhYTUxMmU7XG59XG5cbi5jbHMtMTQge1xuICBmaWxsOiAjN2Q2YWE1O1xufVxuXG4vKiBhbmltYXRpb25zICovXG4ud2hlZWwge1xuICBhbmltYXRpb246IHdoZWVsLXJvdGF0ZSA2cyBlYXNlIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIHdoZWVsLXJvdGF0ZSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDk2MGRlZyk7XG4gIH1cbn1cbi5jbG9jay1oYW5kLTEge1xuICBhbmltYXRpb246IGNsb2NrLXJvdGF0ZSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbi5jbG9jay1oYW5kLTIge1xuICBhbmltYXRpb246IGNsb2NrLXJvdGF0ZSA2cyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgY2xvY2stcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuI2JveC10b3Age1xuICBhbmltYXRpb246IGJveC10b3AtYW5pbSAycyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgYm94LXRvcC1hbmltIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cbiN1bWJyZWxsYSB7XG4gIGFuaW1hdGlvbjogdW1icmVsbGEtYW5pbSA2cyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgdW1icmVsbGEtYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg1ZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxufVxuI2N1cCB7XG4gIGFuaW1hdGlvbjogY3VwLXJvdGF0ZSAzcyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSkgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBjdXAtcm90YXRlIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cbiNwaWxsb3cge1xuICBhbmltYXRpb246IHBpbGxvdy1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBwaWxsb3ctYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpIHRyYW5zbGF0ZVkoNXB4KTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cbn1cbiNzdHJpcGUge1xuICBhbmltYXRpb246IHN0cmlwZS1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBzdHJpcGUtYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCkgcm90YXRlKC0xMGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbn1cbiNiaWtlIHtcbiAgYW5pbWF0aW9uOiBiaWtlLWFuaW0gNnMgZWFzZSBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBiaWtlLWFuaW0ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzAwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMzAwcHgpO1xuICB9XG59XG4jcnVja3NhY2sge1xuICBhbmltYXRpb246IHJ1Y2stYW5pbSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgcnVjay1hbmltIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgfVxufVxuLmNpcmNsZSB7XG4gIGFuaW1hdGlvbjogY2lyY2xlLWFuaW0gZWFzZSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbiAgcGVyc3BlY3RpdmU6IDBweDtcbn1cblxuLmNpcmNsZS5jMSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG5cbi5jaXJjbGUuYzIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xufVxuXG4uY2lyY2xlLmMzIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLmNpcmNsZS5jNCB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5jaXJjbGUuYzUge1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG4uY2lyY2xlLmM2IHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbn1cblxuQGtleWZyYW1lcyBjaXJjbGUtYW5pbSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbi5mb3VyLFxuI291IHtcbiAgYW5pbWF0aW9uOiBmb3VyLWFuaW0gY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgaW5maW5pdGU7XG59XG5cbi5mb3VyLmEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbi5mb3VyLmIge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG4jb3Uge1xuICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIGZvdXItYW5pbSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/pages/single-page/single-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/single-page/single-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbmdsZS1wYWdlL3NpbmdsZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/single-page/single-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/single-page/single-page.component.ts ***!
  \************************************************************/
/*! exports provided: SinglePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageComponent", function() { return SinglePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SinglePageComponent = class SinglePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
SinglePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-page/single-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-page.component.scss */ "./src/app/pages/single-page/single-page.component.scss")).default]
    })
], SinglePageComponent);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        let url = state.url;
        // console.log(url);
        return this.checkLogin(url);
    }
    checkLogin(url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        console.log("Auth service initialized...");
    }
    sendPostRequest(endpoint, body) {
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].expressBaseUrl + endpoint);
        // this.http.post(environment.expressBaseUrl + endpoint, body).subscribe(res => {
        //   // console.log(res);
        // });
        return Promise.resolve(this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].expressBaseUrl + endpoint, body).toPromise());
    }
    logIn(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const body = { email, password };
            return yield this.sendPostRequest("/auth/login", body)
                .then((data) => {
                console.log(data.token, this.redirectUrl);
                sessionStorage.setItem("token", data.token);
                if (data.success) {
                    this.router.navigate([this.redirectUrl || "\index"]);
                    this.redirectUrl = null;
                }
                return data;
            })
                .catch((err) => {
                // console.log(err);
                return err;
            });
        });
    }
    logOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].expressBaseUrl + "/auth/logout")
                .toPromise()
                .then(data => {
                console.log(data);
                if (this.isLoggedIn()) {
                    sessionStorage.removeItem("token");
                }
                this.router.navigate(["/login"]);
                // this.isLoggedIn = data;
            });
        });
    }
    isLoggedIn() {
        if (sessionStorage.getItem("token")) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let MoviesService = class MoviesService {
    constructor(http) {
        this.http = http;
        this.opts = {
            headers: {
                authorization: "Bearer " + sessionStorage.getItem("token"),
            },
        };
        this.getGenres = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.sendGetRequest("/movies/genres").then((genres) => {
                // console.log(genres);
                return genres;
            });
        });
        this.getMoviesFromGenre = (genreId) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.sendGetRequest(`/movies/genre/${genreId}`).then((movies) => {
                return movies;
            });
        });
        this.getMovies = (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(data);
            if (data.search) {
                const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
                return yield this.sendGetRequest(`/movies/search?${queryString}`).then(movies => {
                    return movies;
                });
            }
        });
        console.log("Movies service initiated...");
    }
    sendGetRequest(endpoint) {
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].expressBaseUrl + endpoint);
        // this.http.get(environment.expressBaseUrl + endpoint).subscribe(res => {
        //   console.log(res);
        // });
        return Promise.resolve(this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].expressBaseUrl + endpoint, this.opts)
            .toPromise());
    }
    sendPostRequest(endpoint, body) {
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].expressBaseUrl + endpoint);
        // this.http.post(environment.expressBaseUrl + endpoint, body).subscribe(res => {
        //   // console.log(res);
        // });
        return Promise.resolve(this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].expressBaseUrl + endpoint, this.opts, body)
            .toPromise());
    }
    getRecentMovies(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.sendGetRequest(`/movies${query}`).then((data) => {
                // console.log(data);
                return data;
            });
        });
    }
};
MoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], MoviesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    expressBaseUrl: 'http://localhost:5000/api/v1'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/khoanguyen/Downloads/School/code/Projects/movies-website/movies-website-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map