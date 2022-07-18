import {Component} from '@angular/core';

@Component({
    selector: 'view-encapsulation',
    styles: [],
    template: `
        <div>
            <example-one></example-one>
            <example-two></example-two>
            <example-three></example-three>
        </div>
    `
})
export class ViewEncapsulationComponent { }
