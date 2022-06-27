import {
    Component,
    EventEmitter,
    Output,
    ContentChildren,
    QueryList,
    AfterContentInit, ViewChild, AfterViewInit,
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
                <ng-content select="button"></ng-content>
            </form>
        </div>
    `,
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
    showMessage: boolean = false;

    @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent> | undefined;

    @ViewChild(AuthMessageComponent) message: AuthMessageComponent | undefined;

    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    ngAfterContentInit() {
        if (this.message) {
            this.message.days = 30;
        }

        if (this.remember) {
            this.remember.forEach((item: AuthRememberComponent) => {
                item.checked.subscribe((checked: boolean) => this.showMessage = checked);
            });
        }
    }

    ngAfterViewInit() {
        // this.message!.days = 30;
    }

    public onSubmit(value: User) {
        this.submitted.emit(value);
    }

}
