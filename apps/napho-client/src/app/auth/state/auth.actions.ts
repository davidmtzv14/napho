import { createAction, props } from '@ngrx/store';
import { User } from '@napho/data';

export const signUp = createAction(
  '[Auth] Sign up',
  props<{ user: Partial<User> }>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign up success',
  props<{ user: Partial<User> }>()
);

export const signUpFailed = createAction('[Auth] Sign up failed');

export const signIn = createAction(
  '[Auth] Sign in',
  props<{ user: Partial<User> }>()
);

export const signInSuccess = createAction(
  '[Auth] Sign in success',
  props<{ user: Partial<User> }>()
);

export const signInFailed = createAction('[Auth] Sign in failed');

export const logout = createAction('[Auth] Logout');
