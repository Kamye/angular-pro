import {Component} from '@angular/core';

@Component({
    selector: 'content-projection',
    template: `
        <div>
            <ng-container
                [ngTemplateOutlet]="tmpl"
                [ngTemplateOutletContext]="ctx">
            </ng-container>
            <ng-template #tmpl let-name let-location="location">
                {{ name }} : {{ location }}
            </ng-template>
        </div>
    `
})
export class ContentProjectionComponent {
    public ctx = {
        $implicit: 'Andriy Hanzha',
        location: 'Dnipro, UA'
    }
}
