import * as actions from './auth.actions';
import { initialState, reducer } from './auth.reducer';

export * from './auth.effects';
export * from './auth.selectors';
export * from './auth.state';
export const fromAuth = {
  actions,
  reducer,
  initialState
};
