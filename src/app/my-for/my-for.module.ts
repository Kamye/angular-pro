import {NgModule} from '@angular/core';
import {MyForComponent} from './my-for.component';
import {MyForDirective} from './my-for.directive';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        MyForComponent,
        MyForDirective
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        MyForComponent,
        MyForDirective
    ]
})
export class MyForModule { }
