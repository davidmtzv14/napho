import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@napho/data';
import { fromAuth } from '../../state';

@Component({
  selector: 'napho-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.scss']
})
export class LoginFormContainerComponent {
  constructor(private store: Store<any>) {}

  submit(user: Partial<User>): void {
    this.store.dispatch(fromAuth.actions.signIn({ user }));
  }
}
