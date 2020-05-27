import * as actions from './feed.actions';
import { initialState, reducer } from './feed.reducer';

export * from './feed.effects';
export * from './feed.selectors';
export * from './feed.state';
export const fromFeed = {
  actions,
  reducer,
  initialState
};
