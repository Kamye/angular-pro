import {Component} from '@angular/core';
import {User} from "./auth-form/auth-form.interface";

@Component({
    selector: 'content-projection',
    template: `
        <div style="display: flex">
            <auth-form
                (submitted)="loginUser($event)">
                <h3>Login</h3>
                <auth-remember (checked)="rememberUser($event)"></auth-remember>
                <button type="submit">
                    Login
                </button>
            </auth-form>
        </div>
    `
})
export class ContentProjectionComponent {

    private rememberMe: boolean = false;


    public createUser(user: User) {
        console.log('Create account', user, this.rememberMe);
    }

    public loginUser(user: User) {
        console.log('Login user', user, this.rememberMe);
    }

    public rememberUser(remember: boolean) {
        this.rememberMe = remember;
    }
}
