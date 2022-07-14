import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver, TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

@Component({
    selector: 'content-projection',
    template: `
        <div>
            <div #entry></div>
            <ng-template #tmpl>
                Andriy Hanzha : Dnipro, UA
            </ng-template>
        </div>
    `
})
export class ContentProjectionComponent implements AfterViewInit{

    @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;
    @ViewChild('tmpl',) tmpl!: TemplateRef<any>

    constructor(
        private resolver:  ComponentFactoryResolver,
        private cdr: ChangeDetectorRef
    ) {
    }

    ngAfterViewInit() {
        this.entry.createEmbeddedView(this.tmpl);
        this.cdr.detectChanges();
    }

}
