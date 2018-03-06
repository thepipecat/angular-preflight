/**
 * @pipecat/angular-preflight - Angular - component and HTTP request interceptor for content preflight
 * @version v0.1.2
 * @author Pedro Xudre <xudre@me.com>
 * @link https://github.com/xudre/angular-preflight#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["angular-preflight"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["angular-preflight"] = factory(root["ng"]["core"], root["ng"]["common"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AngularPreflightComponent = /** @class */ (function () {
    function AngularPreflightComponent(el) {
        this.el = el;
        this.linesCount = 1;
        this.lineWidth = 160;
        this.lineSize = -1;
        this.lineDiff = 40;
        this.lineHeight = -1;
    }
    AngularPreflightComponent.prototype.ngOnInit = function () {
        this.linesCount = parseInt(this.linesCount);
        this.lineWidth = parseInt(this.lineWidth);
        this.lineDiff = parseInt(this.lineDiff);
        var element = this.el.nativeElement;
        var style = window.getComputedStyle(element);
        element.setAttribute('aria-hidden', 'true');
        this.lineSize = parseInt(style.fontSize);
        this.lineHeight = parseInt(style.lineHeight) - this.lineSize;
        this.canvasHeight = ((this.lineSize + this.lineHeight) * this.linesCount) - this.lineHeight;
        this.lines = new Array();
        for (var i = 0; i < this.linesCount; i++) {
            var width = this.lineWidth - (Math.random() * this.lineDiff);
            width -= Math.random() * this.lineDiff;
            width = Math.max(width, this.lineSize);
            this.lines.push(Math.round(width));
        }
    };
    __decorate([
        core_1.Input('lines'),
        __metadata("design:type", Object)
    ], AngularPreflightComponent.prototype, "linesCount", void 0);
    __decorate([
        core_1.Input('width'),
        __metadata("design:type", Object)
    ], AngularPreflightComponent.prototype, "lineWidth", void 0);
    __decorate([
        core_1.Input('height'),
        __metadata("design:type", Object)
    ], AngularPreflightComponent.prototype, "lineSize", void 0);
    __decorate([
        core_1.Input('diff'),
        __metadata("design:type", Object)
    ], AngularPreflightComponent.prototype, "lineDiff", void 0);
    __decorate([
        core_1.Input('space'),
        __metadata("design:type", Object)
    ], AngularPreflightComponent.prototype, "lineHeight", void 0);
    AngularPreflightComponent = __decorate([
        core_1.Component({
            selector: 'ui-preflight',
            template: __webpack_require__(5),
            styles: [__webpack_require__(6)]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], AngularPreflightComponent);
    return AngularPreflightComponent;
}());
exports.AngularPreflightComponent = AngularPreflightComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(1));
__export(__webpack_require__(9));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(4);
var angular_preflight_component_1 = __webpack_require__(1);
var AngularPreflightModule = /** @class */ (function () {
    function AngularPreflightModule() {
    }
    AngularPreflightModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                angular_preflight_component_1.AngularPreflightComponent
            ]
        })
    ], AngularPreflightModule);
    return AngularPreflightModule;
}());
exports.AngularPreflightModule = AngularPreflightModule;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" [attr.width]=\"lineWidth\" [attr.height]=\"canvasHeight\" [attr.viewBox]=\"'0 0 ' + lineWidth + ' ' + canvasHeight\">\n  <g>\n    <rect *ngFor=\"let line of lines; index as i\" x=\"0\" [attr.y]=\"((lineSize + lineHeight) * i) + 'px'\" [attr.width]=\"line + 'px'\"\n      [attr.height]=\"lineSize + 'px'\" [attr.rx]=\"(lineSize / 2) + 'px'\" [attr.ry]=\"(lineSize / 2) + 'px'\" />\n  </g>\n</svg>"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(7);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block;\n  clear: both; }\n  :host svg {\n    float: left;\n    fill: currentColor;\n    fill-rule: evenodd; }\n    :host svg rect {\n      animation-name: PreflightLinePulse;\n      animation-duration: 1s;\n      animation-timing-function: ease-in;\n      animation-iteration-count: infinite;\n      animation-direction: alternate;\n      fill-opacity: 0.06; }\n      :host svg rect:nth-child(n + 2) {\n        animation-delay: 0.3s; }\n      :host svg rect:nth-child(n + 3) {\n        animation-delay: 0.6s; }\n      :host svg rect:nth-child(n + 4) {\n        animation-delay: 0.9s; }\n      :host svg rect:nth-child(n + 5) {\n        animation-delay: 1.2s; }\n      :host svg rect:nth-child(n + 6) {\n        animation-delay: 1.5s; }\n      :host svg rect:nth-child(n + 7) {\n        animation-delay: 1.8s; }\n      :host svg rect:nth-child(n + 8) {\n        animation-delay: 2.1s; }\n      :host svg rect:nth-child(n + 9) {\n        animation-delay: 2.4s; }\n      :host svg rect:nth-child(n + 10) {\n        animation-delay: 2.7s; }\n      :host svg rect:nth-child(n + 11) {\n        animation-delay: 3s; }\n      :host svg rect:nth-child(n + 12) {\n        animation-delay: 3.3s; }\n      :host svg rect:nth-child(n + 13) {\n        animation-delay: 3.6s; }\n      :host svg rect:nth-child(n + 14) {\n        animation-delay: 3.9s; }\n      :host svg rect:nth-child(n + 15) {\n        animation-delay: 4.2s; }\n      :host svg rect:nth-child(n + 16) {\n        animation-delay: 4.5s; }\n      :host svg rect:nth-child(n + 17) {\n        animation-delay: 4.8s; }\n      :host svg rect:nth-child(n + 18) {\n        animation-delay: 5.1s; }\n      :host svg rect:nth-child(n + 19) {\n        animation-delay: 5.4s; }\n      :host svg rect:nth-child(n + 20) {\n        animation-delay: 5.7s; }\n      :host svg rect:nth-child(n + 21) {\n        animation-delay: 6s; }\n\n@keyframes PreflightLinePulse {\n  0% {\n    fill-opacity: 0.06; }\n  100% {\n    fill-opacity: 0.2; } }\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AngularPreflightInterceptor = /** @class */ (function () {
    function AngularPreflightInterceptor() {
    }
    AngularPreflightInterceptor.prototype.intercept = function (req, next) {
        var headers = {};
        var newReq = req.clone({
            setHeaders: headers
        });
        return next.handle(newReq);
    };
    AngularPreflightInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AngularPreflightInterceptor);
    return AngularPreflightInterceptor;
}());
exports.AngularPreflightInterceptor = AngularPreflightInterceptor;


/***/ })
/******/ ]);
});
//# sourceMappingURL=angular-preflight.js.map