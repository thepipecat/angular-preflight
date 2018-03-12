import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularPreflightComponent } from './angular-preflight.component';

@NgModule({
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
})
export class AngularPreflightModule { }
