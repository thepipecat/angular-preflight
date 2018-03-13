import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularPreflightComponent } from './angular-preflight.component';
var AngularPreflightModule = (function () {
    function AngularPreflightModule() {
    }
    AngularPreflightModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        AngularPreflightComponent
                    ],
                    exports: [
                        AngularPreflightComponent
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];
    AngularPreflightModule.ctorParameters = function () { return []; };
    return AngularPreflightModule;
}());
export { AngularPreflightModule };
//# sourceMappingURL=angular-preflight.module.js.map