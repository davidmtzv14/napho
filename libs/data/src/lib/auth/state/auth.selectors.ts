import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getAuthState = createSelector(
  getAuthFeatureState,
  state => state
);

export const getAuthUserState = createSelector(
  getAuthFeatureState,
  state => state.user
);
