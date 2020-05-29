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

export const updateProfile = createAction(
  '[Profile] Update profile user',
  props<{ user: Partial<User>  }>()
);

export const updateProfileSuccess = createAction(
  '[Profile] Update profile user success',
  props<{ user: Partial<User> }>()
);

export const updateProfileFailed = createAction('[Profile] Update profile user failed');

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

export const getUserFollowers = createAction(
  '[Profile] Get user followers',
  props<{ id: number }>()
);

export const getUserFollowersSuccess = createAction(
  '[Profile] Get user followers success',
  props<{ followers: Partial<User>[] }>()
);

export const getUserFollowersFailed = createAction(
  '[Profile] Get user followers failed'
);

export const getUserFollowing = createAction(
  '[Profile] Get user following',
  props<{ id: number }>()
);

export const getUserFollowingSuccess = createAction(
  '[Profile] Get user following success',
  props<{ following: Partial<User>[] }>()
);

export const getUserFollowingFailed = createAction(
  '[Profile] Get user following failed'
);

export const followUser = createAction(
  '[Profile] Follow user',
  props<{ id: number }>()
);

export const followUserSuccess = createAction(
  '[Profile] Follow user success',
  props<{ user: Partial<User> }>()
);

export const followUserFailed = createAction(
  '[Profile] Follow user failed'
);
