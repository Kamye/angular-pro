import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContentProjectionModule} from "./content-projection/content-projection.module";
import {ViewEncapsulationModule} from './view-encapsulation/view-encapsulation.module';
import {CustomDirectivesModule} from './custom-directives/custom-directives.module';
import {MyForModule} from './my-for/my-for.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContentProjectionModule,
        ViewEncapsulationModule,
        CustomDirectivesModule,
        MyForModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
