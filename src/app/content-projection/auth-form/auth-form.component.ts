import {Component, EventEmitter, Output} from '@angular/core';

import {User} from "./auth-form.interface";

@Component({
  selector: 'app-auth-form',
  template: `
    <div>
      <form (submit)="onSubmit(form.value)" #form="ngForm">
        <ng-content></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  `,
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  public onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
