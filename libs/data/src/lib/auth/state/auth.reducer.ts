import { Action, createReducer, on } from '@ngrx/store';
// import { get, set } from 'local-storage';

import * as AuthActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  user: {
    // id: Number(get('id')),
    // token: String(get('token')),
    // firstName: String(get('firstName')),
    // lastName: String(get('lastName')),
    // email: String(get('email'))
  }
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signUpSuccess, AuthActions.signInSuccess, (state, action) => {
    // set('id', '' + action.user.id);
    // set('token', String(action.user.token));
    // set('firstName', String(action.user.firstName));
    // set('lastName', String(action.user.lastName));
    // set('email', String(action.user.email));
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
