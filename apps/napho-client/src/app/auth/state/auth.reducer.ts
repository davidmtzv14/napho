import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  user: {
    id: Number(localStorage.getItem('id')),
    token: String(localStorage.getItem('token')),
    username: String(localStorage.getItem('username')),
    firstName: String(localStorage.getItem('firstName')),
    lastName: String(localStorage.getItem('lastName')),
    email: String(localStorage.getItem('email'))
  }
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signUpSuccess, AuthActions.signInSuccess, (state, action) => {
    localStorage.setItem('id', '' + action.user.id);
    localStorage.setItem('token', String(action.user.token));
    localStorage.setItem('username', String(action.user.username));
    localStorage.setItem('firstName', String(action.user.firstName));
    localStorage.setItem('lastName', String(action.user.lastName));
    localStorage.setItem('email', String(action.user.email));
    return {
      ...state,
      user: {
        ...state.user,
        ...action.user
      }
    };
  })
);

export function reducer(state: AuthState, action: Action): AuthState {
  return authReducer(state, action);
}
