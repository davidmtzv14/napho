import * as actions from './profile.actions';
import { initialState, reducer } from './profile.reducer';

export * from './profile.effects';
export * from './profile.selectors';
export * from './profile.state';
export const fromProfile = {
  actions,
  reducer,
  initialState
};
