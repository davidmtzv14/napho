import { createAction, props } from '@ngrx/store';
import { Photo, User } from '@napho/data';

export const getProfileUser = createAction(
  '[Profile] Get user',
  props<{ id: number }>()
);

export const getProfileUserSuccess = createAction(
  '[Profile] Get user success',
  props<{ user: Partial<User> }>()
);

export const getProfileUserFailed = createAction('[Profile] Get user failed');

export const getProfilePhotos = createAction(
  '[Profile] Get profile photos',
  props<{ id: number }>()
);

export const getProfilePhotosSuccess = createAction(
  '[Profile] Get profile photos success',
  props<{ photos: Partial<Photo>[] }>()
);

export const getProfilePhotosFailed = createAction(
  '[Profile] Get profile photos failed'
);

export const getFavPhotos = createAction(
  '[Profile] Get fav photos',
  props<{ id: number }>()
);

export const getFavPhotosSuccess = createAction(
  '[Profile] Get fav photos success',
  props<{ photos: Partial<Photo>[] }>()
);

export const getFavPhotosFailed = createAction(
  '[Profile] Get fav photos failed'
);
