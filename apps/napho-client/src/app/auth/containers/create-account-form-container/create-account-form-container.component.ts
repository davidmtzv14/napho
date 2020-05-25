import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@napho/data';
import { fromAuth } from '../../state';

@Component({
  selector: 'napho-create-account-form-container',
  templateUrl: './create-account-form-container.component.html',
  styleUrls: ['./create-account-form-container.component.scss']
})
export class CreateAccountFormContainerComponent {
  constructor(private store: Store<any>) {}

  submit(user: Partial<User>): void {
    this.store.dispatch(fromAuth.actions.signIn({ user }));
  }

}
