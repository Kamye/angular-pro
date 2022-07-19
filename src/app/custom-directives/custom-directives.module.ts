import {NgModule} from '@angular/core';
import {CustomDirectivesComponent} from './custom-directives.component';
import {CreditCardDirective} from './credit-card/credit-card.directive';

@NgModule({
    declarations: [
        CustomDirectivesComponent,
        CreditCardDirective
    ],
    imports: [],
    exports: [
        CustomDirectivesComponent
    ]
})
export class CustomDirectivesModule { }
