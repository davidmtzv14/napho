import { Action, createReducer, on } from '@ngrx/store';

import * as ProfileActions from './profile.actions';
import { ProfileState } from './profile.state';

export const initialState: ProfileState = {
  user: {},
  photos: [],
  favPhotos:[],
  followers:[],
  following:[]
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
  on(ProfileActions.getUserFollowersSuccess, (state, action) => {
    return {
      ...state,
      followers: {
        ...action.followers
      }
    };
  }),
  on(ProfileActions.getUserFollowingSuccess, (state, action) => {
    return {
      ...state,
      following: {
        ...action.following
      }
    };
  }),
  on(ProfileActions.followUserSuccess, (state, action) => {
    return {
      ...state,
      user: {
        ...action.user
      }
    };
  }),
);

export function reducer(state: ProfileState, action: Action): ProfileState {
  return profileReducer(state, action);
}
