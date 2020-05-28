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
    mergeMap(( comment ) =>
      this.feedService.createComment(comment).pipe(
        map(commentResponse =>
          FeedActions.createCommentSuccess({ comment: commentResponse })
        ),
        catchError(() => of(FeedActions.createCommentFailed()))
      )
    )
  )
);

  getPhotos$ = createEffect(() =>
  this.actions$.pipe(
    ofType(FeedActions.getFeedPhotos),
    mergeMap(() =>
      this.feedService.getPhotos().pipe(
        map(photos =>
          FeedActions.getFeedPhotosSuccess({ photos })
        ),
        catchError(() => of(FeedActions.getFeedPhotosFailed()))
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
