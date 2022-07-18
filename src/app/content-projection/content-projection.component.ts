import {Component} from '@angular/core';

@Component({
    selector: 'content-projection',
    template: `
        <div>
            <ng-container
                [ngTemplateOutlet]="tmpl">
            </ng-container>
            <ng-template #tmpl>
                Andriy Hanzha: Dnipro, UA
            </ng-template>
        </div>
    `
})
export class ContentProjectionComponent {

}
