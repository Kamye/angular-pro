import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionComponent } from './content-projection.component';
import {FormsModule} from "@angular/forms";
import {AuthFormModule} from "./auth-form/auth-form.module";



@NgModule({
  declarations: [
    ContentProjectionComponent
  ],
  exports: [
    ContentProjectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthFormModule
  ]
})
export class ContentProjectionModule { }
