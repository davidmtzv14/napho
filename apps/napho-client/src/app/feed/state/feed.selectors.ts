import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FeedState } from './feed.state';

const getFeedFeatureState = createFeatureSelector<FeedState>('feed');

export const getFeedState = createSelector(
  getFeedFeatureState,
  state => state
);

export const getFeedPhotosState = createSelector(
  getFeedFeatureState,
  state => state.photos
);

export const getSearchPhotosState = createSelector(
  getFeedFeatureState,
  state => state.searchPhotos
);

export const getSearchUsersState = createSelector(
  getFeedFeatureState,
  state => state.searchUsers
);

export const getProfileUserState = createSelector(
  getFeedFeatureState,
  state => state.profileUser
);
