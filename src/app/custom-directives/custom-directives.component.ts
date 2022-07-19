import {Component} from '@angular/core';

@Component({
    selector: 'custom-directives',
    styles: [``],
    template: `
        <div>
            <label>
                Credit Card Number
                <input
                    name="credit-card"
                    placeholder="Enter your 16-digit card number"
                    type="text"
                    credit-card>
            </label>
        </div>
    `
})
export class CustomDirectivesComponent { }
