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
            <button (click)="moveComponent()">
                Move
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
        this.entry.createComponent(authFormFactory);
        this.component = this.entry.createComponent(authFormFactory, 0);
        this.component.instance.title = 'Create account';
        this.component.instance.submitted.subscribe(this.loginUser);

        this.cdr.detectChanges();
    }

    public destroyComponent(): void {
        this.component.destroy();
    }

    public moveComponent(): void {
        this.entry.move(this.component.hostView, 1);
    }

    public loginUser(user: User) {
        console.log('Login user', user);
    }
}
