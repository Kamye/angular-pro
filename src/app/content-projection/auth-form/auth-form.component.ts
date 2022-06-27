import {
    Component,
    EventEmitter,
    Output,
    ContentChildren,
    QueryList,
    AfterContentInit, ViewChildren, AfterViewInit, ChangeDetectorRef,
} from '@angular/core';

import {AuthRememberComponent} from './auth-remember.component';
import {AuthMessageComponent} from './auth-message.component';

import {User} from './auth-form.interface';

@Component({
    selector: 'auth-form',
    template: `
        <div>
            <form (submit)="onSubmit(form.value)" #form="ngForm">
                <ng-content select="h3"></ng-content>
                <label>
                    Email address
                    <input autocomplete="off" type="email" name="email" ngModel>
                </label>
                <label>
                    Password
                    <input type="password" name="password" ngModel>
                </label>
                <ng-content select="auth-remember"></ng-content>
                <auth-message
                    [style.display]="(showMessage ? 'inherit' : 'none')">
                </auth-message>
                <auth-message
                    [style.display]="(showMessage ? 'inherit' : 'none')">
                </auth-message>
                <auth-message
                    [style.display]="(showMessage ? 'inherit' : 'none')">
                </auth-message>
                <ng-content select="button"></ng-content>
            </form>
        </div>
    `,
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
    showMessage: boolean = false;

    @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent> | undefined;

    @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent> | undefined;

    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    constructor(
        private cdr: ChangeDetectorRef
    ) {
    }

    ngAfterContentInit() {
        if (this.remember) {
            this.remember.forEach((item: AuthRememberComponent) => {
                item.checked.subscribe((checked: boolean) => this.showMessage = checked);
            });
        }
    }

    ngAfterViewInit() {
        if (this.message) {
            this.message.forEach((message: AuthMessageComponent) => {
                message.days = 30;
            });
            this.cdr.detectChanges();
        }
    }

    public onSubmit(value: User) {
        this.submitted.emit(value);
    }

}
