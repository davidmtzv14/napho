import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProfileState } from './profile.state';

const getFeedFeatureState = createFeatureSelector<ProfileState>('profile');

export const getProfileState = createSelector(
  getFeedFeatureState,
  state => state
);

export const getProfileUserState = createSelector(
  getFeedFeatureState,
  state => state.user
);

export const getProfilePhotosState = createSelector(
  getFeedFeatureState,
  state => state.photos
);

export const getProfileFavPhotosState = createSelector(
  getFeedFeatureState,
  state => state.favPhotos
);

export const getUserFollowersState = createSelector(
  getFeedFeatureState,
  state => state.followers
);
export const getUserFollowingState = createSelector(
  getFeedFeatureState,
  state => state.following
);
