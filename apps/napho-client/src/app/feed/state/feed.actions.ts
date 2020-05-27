import { createAction, props } from '@ngrx/store';
import { User, Photo } from '@napho/data';

export const createPhoto = createAction(
  '[Feed] Create post',
  props<{ photo: Partial<Photo> }>()
);

export const createPhotoSuccess = createAction(
  '[Feed] Create post success',
  props<{ photo: Partial<Photo> }>()
);

export const createPhotoFailed = createAction('[Feed] Create post failed');

export const getFeedPhotos = createAction(
  '[Feed] Get feed photos',
  props<{ user: Partial<User> }>()
);

export const getFeedPhotosSuccess = createAction(
  '[Feed] Get feed photos success',
  props<{ user: Partial<User> }>()
);

export const getFeedPhotosFailed = createAction('[Feed] Get feed photos failed');

export const getSearchPhotos = createAction(
  '[Feed] Get feed photos',
  props<{ user: Partial<User> }>()
);

export const getSearchPhotosSuccess = createAction(
  '[Feed] Get feed photos success',
  props<{ user: Partial<User> }>()
);

export const getSearchPhotosFailed = createAction('[Feed] Get feed photos failed');
