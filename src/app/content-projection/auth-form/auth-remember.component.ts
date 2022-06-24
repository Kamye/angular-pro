import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'auth-remember',
    template: `
        <label>
            <input type="checkbox" (change)="onChecked($any($event.target).checked)" >
            Keep me logged in
        </label>
    `
})
export class AuthRememberComponent {
    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    public onChecked(value: boolean): void {
        this.checked.emit(value);
    }
}
