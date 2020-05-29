import { createAction, props } from '@ngrx/store';
import { Comment, Photo, User } from '@napho/data';

export const createPhoto = createAction(
  '[Feed] Create post',
  props<{ photo: Partial<Photo> }>()
);

export const createPhotoSuccess = createAction(
  '[Feed] Create post success',
  props<{ photo: Partial<Photo> }>()
);

export const createPhotoFailed = createAction('[Feed] Create post failed');

export const createComment = createAction(
  '[Feed] Create comment',
  props<{ photoId: number; content: string }>()
);

export const createCommentSuccess = createAction(
  '[Feed] Create comment success',
  props<{ comment: Partial<Comment> }>()
);

export const createCommentFailed = createAction('[Feed] Create comment failed');

export const updatePhotoFavorite = createAction(
  '[Feed] Update photo favorite',
  props<{ id: number }>()
);

export const updatePhotoFavoriteSuccess = createAction(
  '[Feed] Update photo favorite success',
  props<{ photo: Partial<Photo> }>()
);

export const updatePhotoFavoriteFailed = createAction(
  '[Feed] Update photo favorite failed'
);

export const updateCommentStatus = createAction(
  '[Feed] Update comment status',
  props<{ comment: Partial<Comment> }>()
);

export const updateCommentStatusSuccess = createAction(
  '[Feed] Update comment status success',
  props<{ comment: Partial<Comment> }>()
);

export const updateCommentStatusFailed = createAction(
  '[Feed] Update comment status failed'
);

export const getFeedPhotos = createAction('[Feed] Get feed photos');

export const getFeedPhotosSuccess = createAction(
  '[Feed] Get feed photos success',
  props<{ photos: Partial<Photo>[] }>()
);

export const getFeedPhotosFailed = createAction(
  '[Feed] Get feed photos failed'
);

export const getSearchPhotos = createAction(
  '[Feed] Get search photos',
  props<{ search: string; field?: string }>()
);

export const getSearchPhotosSuccess = createAction(
  '[Feed] Get search photos success',
  props<{ photos: Partial<Photo>[] }>()
);

export const getSearchPhotosFailed = createAction(
  '[Feed] Get search photos failed'
);

export const getSearchUsers = createAction(
  '[Feed] Get search users',
  props<{ search: string }>()
);

export const getSearchUsersSuccess = createAction(
  '[Feed] Get search users success',
  props<{ users: Partial<User>[] }>()
);

export const getSearchUsersFailed = createAction(
  '[Feed] Get search users failed'
);
