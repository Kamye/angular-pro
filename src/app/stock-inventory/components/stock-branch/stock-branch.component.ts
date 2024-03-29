import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'stock-branch',
    styleUrls: ['./stock-branch.component.scss'],
    template: `
        <div
            class="stock-branch"
            [formGroup]="parent">
            <div formGroupName="store">
                <input
                    formControlName="branch"
                    type="text"
                    placeholder="Branch ID">
                <input
                    formControlName="code"
                    type="text"
                    placeholder="Manager Code">
            </div>
        </div>
    `
})
export class StockBranchComponent {
    @Input()
    parent!: FormGroup;
}
