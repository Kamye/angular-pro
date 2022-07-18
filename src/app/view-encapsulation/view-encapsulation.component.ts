import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'view-encapsulation',
    changeDetection: ChangeDetectionStrategy.Default,
    template: `
        <div>
            <button (click)="addProp()">Add Property</button>
            <button (click)="changeUser()">Change user object</button>
            <button (click)="changeName()">Change name property</button>
            <div class="users">
                <example-one [user]="user"></example-one>
                <example-two [user]="user"></example-two>
            </div>
        </div>
    `
})
export class ViewEncapsulationComponent {
    public user: any = {
        name: 'Mark Hoppus',
        age: 44,
        location: 'California'
    };

    public addProp(): void {
        this.user.email = 'some.email@mail.com';
    }

    public changeName(): void {
        this.user.name = 'Travis Barker'
    }

    public changeUser(): void {
        this.user = {
            name: 'Tom Delonge',
            age: 41,
            location: 'Californis'
        };
    }
}
