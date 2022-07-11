import {
    AfterViewInit, ChangeDetectorRef,
    Component,
    ComponentRef, OnInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import {AuthFormComponent} from './auth-form/auth-form.component';

@Component({
    selector: 'content-projection',
    template: `
        <div style="display: flex">
            <div #entry></div>
        </div>
    `
})
export class ContentProjectionComponent implements OnInit, AfterViewInit {

    @ViewChild('entry', { read: ViewContainerRef })
    private entry!: ViewContainerRef;
    private componentRef!: ComponentRef<AuthFormComponent>;

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.entry.clear();
        this.componentRef = this.entry.createComponent(AuthFormComponent);
        this.cdr.detectChanges();
    }

    // public loginUser(user: User) {
    //     console.log('Login user', user, this.rememberMe);
    // }
}
