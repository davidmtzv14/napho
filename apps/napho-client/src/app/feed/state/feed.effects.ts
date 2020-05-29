import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as FeedActions from './feed.actions';
import { FeedService } from '../services/feed.service';
import { Store } from '@ngrx/store';

@Injectable()
export class FeedEffects {
  createPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.createPhoto),
      mergeMap(({ photo }) =>
        this.feedService.createPhoto(photo).pipe(
          map(photoResponse =>
            FeedActions.createPhotoSuccess({ photo: photoResponse })
          ),
          catchError(() => of(FeedActions.createPhotoFailed()))
        )
      )
    )
  );

  createComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.createComment),
      mergeMap(comment =>
        this.feedService.createComment(comment).pipe(
          map(commentResponse =>
            FeedActions.createCommentSuccess({ comment: commentResponse })
          ),
          catchError(() => of(FeedActions.createCommentFailed()))
        )
      )
    )
  );

  updatePhotoFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.updatePhotoFavorite),
      mergeMap(({ id }) =>
        this.feedService.updatePhotoFavorite(id).pipe(
          map(photo =>
            FeedActions.updatePhotoFavoriteSuccess({ photo })
          ),
          catchError(() => of(FeedActions.updatePhotoFavoriteFailed()))
        )
      )
    )
  );

  updateCommentStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.updateCommentStatus),
      mergeMap(({ comment }) =>
        this.feedService.updateCommentStatus(comment).pipe(
          map(commentResponse =>
            FeedActions.updateCommentStatusSuccess({ comment: commentResponse })
          ),
          catchError(() => of(FeedActions.updateCommentStatusFailed()))
        )
      )
    )
  );

  getFeedPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.getFeedPhotos),
      mergeMap(() =>
        this.feedService.getFeedPhotos().pipe(
          map(photos => FeedActions.getFeedPhotosSuccess({ photos })),
          catchError(() => of(FeedActions.getFeedPhotosFailed()))
        )
      )
    )
  );

  getSearchPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.getSearchPhotos),
      mergeMap(({ search }) =>
        this.feedService.getSearchPhotos(search).pipe(
          map(photos => FeedActions.getSearchPhotosSuccess({ photos })),
          catchError(() => of(FeedActions.getSearchPhotosFailed()))
        )
      )
    )
  );

  getSearchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.getSearchUsers),
      mergeMap(({ search }) =>
        this.feedService.getSearchUsers(search).pipe(
          map(users => FeedActions.getSearchUsersSuccess({ users })),
          catchError(() => of(FeedActions.getSearchUsersFailed()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private feedService: FeedService
  ) {}
}
