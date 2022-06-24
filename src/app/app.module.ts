import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContentProjectionModule} from "./content-projection/content-projection.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContentProjectionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
