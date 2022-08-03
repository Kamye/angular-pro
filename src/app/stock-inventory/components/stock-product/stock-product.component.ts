import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
    selector: 'stock-product',
    styleUrls: ['./stock-product.component.scss'],
    template: `
        <div class="stock-product" [formGroup]="parent">
            <div formArrayName="stock">
                <div *ngFor="let item of stocks; let i = index;">

                    <div class="stock-product__content" [formGroupName]="i">
                        <div class="stock-product__name">
                            {{ item.value.product_id }}
                        </div>
                        <input
                            type="number"
                            step="10"
                            min="10"
                            max="1000"
                            formControlName="quantity">
                        <button
                            type="button"
                            (click)="onRemove(item, i)">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class StockProductComponent {
    @Input()
    parent!: FormGroup;

    @Output()
    removed = new EventEmitter<any>();

    get stocks() {
        return (this.parent.get('stock') as FormArray).controls;
    }

    onRemove(group: any, index: any) {
        this.removed.emit({ group, index });
    }
}
