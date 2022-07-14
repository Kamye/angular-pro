import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver, ComponentRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import {AuthFormComponent} from './auth-form/auth-form.component';

import {User} from './auth-form/auth-form.interface';

@Component({
    selector: 'content-projection',
    template: `
        <div>
            <button (click)="destroyComponent()">
                Destroy
            </button>
            <div #entry></div>
        </div>
    `
})
export class ContentProjectionComponent implements AfterViewInit{

    private component!: ComponentRef<AuthFormComponent>;

    @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;

    constructor(
        private resolver:  ComponentFactoryResolver,
        private cdr: ChangeDetectorRef
    ) {
    }

    ngAfterViewInit() {
        const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
        this.component = this.entry.createComponent(authFormFactory);
        this.component.instance.title = 'Create account';
        this.component.instance.submitted.subscribe(this.loginUser);

        this.cdr.detectChanges();
    }

    public loginUser(user: User) {
        console.log('Login user', user);
    }

    public destroyComponent(): void {
        this.component.destroy();
    }
}
