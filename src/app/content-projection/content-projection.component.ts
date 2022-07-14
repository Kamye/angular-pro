import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import {AuthFormComponent} from './auth-form/auth-form.component';

import {User} from './auth-form/auth-form.interface';

@Component({
    selector: 'content-projection',
    template: `
        <div style="display: flex">
            <div #entry></div>
        </div>
    `
})
export class ContentProjectionComponent implements AfterViewInit{

    @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;

    constructor(
        private resolver:  ComponentFactoryResolver,
        private cdr: ChangeDetectorRef
    ) {
    }

    ngAfterViewInit() {
        const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
        const component = this.entry.createComponent(authFormFactory);
        component.instance.title = 'Create account';
        component.instance.submitted.subscribe(this.loginUser);

        this.cdr.detectChanges();
    }

    public loginUser(user: User) {
        console.log('Login user', user);
    }
}
