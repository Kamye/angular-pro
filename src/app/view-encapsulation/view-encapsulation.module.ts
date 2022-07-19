import {NgModule} from '@angular/core';
import {ViewEncapsulationComponent} from './view-encapsulation.component';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './three/three.component';

@NgModule({
    declarations: [
        ViewEncapsulationComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent
    ],
    exports: [
        ViewEncapsulationComponent
    ],
    imports: [
    ]
})
export class ViewEncapsulationModule { }
