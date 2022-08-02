import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'stock-inventory',
    styleUrls: ['stock-inventory.component.scss'],
    template: `
        <div class="stock-inventory">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">

                <stock-branch
                    [parent]="form">
                </stock-branch>

                <stock-selector
                    [parent]="form">
                </stock-selector>

                <stock-product
                    [parent]="form">
                </stock-product>

                <div class="stock-inventory__buttons">
                    <button
                        [disabled]="form.invalid"
                        type="submit">
                        Order stock
                    </button>
                </div>

                <pre>{{ form.value | json }}</pre>
            </form>
        </div>
    `
})
export class StockInventoryComponent {
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl(''),
            code: new FormControl('')
        }),
        selector: new FormGroup(({
            product_id: new FormControl(''),
            quantity: new FormControl(10)
        })),
        stock: new FormArray([])
    });

    onSubmit() {
        console.log('Submit: ', this.form.value);
    }
}
