import { Action, createReducer, on } from '@ngrx/store';

import * as FeedActions from './feed.actions';
import { FeedState } from './feed.state';

export const initialState: FeedState = {
  photos: [],
  searchPhotos: [],
  searchUsers: [],
  profileUser: {}
};

export const feedReducer = createReducer(
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
    };
  }),
  on(FeedActions.getSearchPhotosSuccess, (state, action) => {
    return {
      ...state,
      searchPhotos: {
        ...action.photos
      }
    };
  }),
  on(FeedActions.getSearchUsersSuccess, (state, action) => {
    return {
      ...state,
      searchUsers: {
        ...action.users
      }
    };
  }),
);

export function reducer(state: FeedState, action: Action): FeedState {
  return feedReducer(state, action);
}
