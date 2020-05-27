import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';

import * as FeedActions from './feed.actions';
import { FeedService } from '../services/feed.service';
import { select, Store } from '@ngrx/store';
import { getAuthUserState } from '@app/auth/state';

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
