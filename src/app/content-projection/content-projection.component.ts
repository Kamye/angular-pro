import { Component } from '@angular/core';
import {User} from "./auth-form/auth-form.interface";

@Component({
  selector: 'app-content-projection',
  template: `
    <div style="display: flex">
      <app-auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
      </app-auth-form>
      <app-auth-form
        (submitted)="loginUser($event)">
        <h3>Login</h3>
      </app-auth-form>
    </div>
  `
})
export class ContentProjectionComponent {

  constructor() { }

  public createUser(user: User) {
    console.log('Create account', user);
  }

  public loginUser(user: User) {
    console.log('Login user', user);
  }

}
