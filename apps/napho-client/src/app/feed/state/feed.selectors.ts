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
