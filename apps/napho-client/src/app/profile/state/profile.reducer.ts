import { Action, createReducer, on } from '@ngrx/store';

import * as ProfileActions from './profile.actions';
import { ProfileState } from './profile.state';

export const initialState: ProfileState = {
  user: {},
  photos: [],
  favPhotos:[]
};

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getProfileUserSuccess, (state, action) => {
    return {
      ...state,
      user: {
        ...action.user
      }
    };
  }),
  on(ProfileActions.getProfilePhotosSuccess, (state, action) => {
    return {
      ...state,
      photos: {
        ...action.photos
      }
    };
  }),
  on(ProfileActions.getFavPhotosSuccess, (state, action) => {
    return {
      ...state,
      favPhotos: {
        ...action.photos
      }
    };
  }),
);

export function reducer(state: ProfileState, action: Action): ProfileState {
  return profileReducer(state, action);
}
