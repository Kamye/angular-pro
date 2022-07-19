import {NgModule} from '@angular/core';
import {CustomDirectivesComponent} from './custom-directives.component';
import {CreditCardDirective} from './credit-card/credit-card.directive';
import {TooltipDirective} from './tooltip/tooltip.directive';

@NgModule({
    declarations: [
        CustomDirectivesComponent,
        CreditCardDirective,
        TooltipDirective
    ],
    imports: [],
    exports: [
        CustomDirectivesComponent
    ]
})
export class CustomDirectivesModule { }
