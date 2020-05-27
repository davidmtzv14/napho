import { Action, createReducer, on } from '@ngrx/store';

import * as FeedActions from './feed.actions';
import { FeedState } from './feed.state';

export const initialState: FeedState = {
  photos: []
};

export const authReducer = createReducer(
  initialState,
  on(FeedActions.createPhotoSuccess, (state, action) => {
    return {
      ...state,
      photos: {
        ...state.photos,
        ...action.photo
      }
    };
  }),
  on(FeedActions.getFeedPhotosSuccess, (state, action) => {
    return {
      ...state,
      photos: {
        ...action.photos
      }
    }
  })
);

export function reducer(state: FeedState, action: Action): FeedState {
  return authReducer(state, action);
}
