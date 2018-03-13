import { Injectable } from '@angular/core';
var AngularPreflightInterceptor = (function () {
    function AngularPreflightInterceptor() {
    }
    AngularPreflightInterceptor.prototype.intercept = function (req, next) {
        var headers = {};
        var newReq = req.clone({
            setHeaders: headers
        });
        return next.handle(newReq);
    };
    AngularPreflightInterceptor.decorators = [
        { type: Injectable },
    ];
    AngularPreflightInterceptor.ctorParameters = function () { return []; };
    return AngularPreflightInterceptor;
}());
export { AngularPreflightInterceptor };
//# sourceMappingURL=angular-preflight.interceptor.js.map