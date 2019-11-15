(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componetname-componetname-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/componetname/componetname.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componetname/componetname.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>componetname</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"currentImage\" *ngIf=\"currentImage\">\n  <ion-fab vertical='bottom' horizontal='center' slot='fixed'>\n    <ion-fab-button (click)=\"takePhoto()\">\n      <ion-icon name='camera'></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/componetname/componetname.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/componetname/componetname.module.ts ***!
  \*****************************************************/
/*! exports provided: ComponetnamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponetnamePageModule", function() { return ComponetnamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _componetname_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componetname.page */ "./src/app/componetname/componetname.page.ts");







var routes = [
    {
        path: '',
        component: _componetname_page__WEBPACK_IMPORTED_MODULE_6__["ComponetnamePage"]
    }
];
var ComponetnamePageModule = /** @class */ (function () {
    function ComponetnamePageModule() {
    }
    ComponetnamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_componetname_page__WEBPACK_IMPORTED_MODULE_6__["ComponetnamePage"]]
        })
    ], ComponetnamePageModule);
    return ComponetnamePageModule;
}());



/***/ }),

/***/ "./src/app/componetname/componetname.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/componetname/componetname.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmV0bmFtZS9jb21wb25ldG5hbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/componetname/componetname.page.ts":
/*!***************************************************!*\
  !*** ./src/app/componetname/componetname.page.ts ***!
  \***************************************************/
/*! exports provided: ComponetnamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponetnamePage", function() { return ComponetnamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");



var ComponetnamePage = /** @class */ (function () {
    function ComponetnamePage(camera) {
        this.camera = camera;
    }
    ComponetnamePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.currentImage = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            console.log("Camera issue:" + err);
        });
    };
    ComponetnamePage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] }
    ]; };
    ComponetnamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-componetname',
            template: __webpack_require__(/*! raw-loader!./componetname.page.html */ "./node_modules/raw-loader/index.js!./src/app/componetname/componetname.page.html"),
            styles: [__webpack_require__(/*! ./componetname.page.scss */ "./src/app/componetname/componetname.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]])
    ], ComponetnamePage);
    return ComponetnamePage;
}());



/***/ })

}]);
//# sourceMappingURL=componetname-componetname-module-es5.js.map