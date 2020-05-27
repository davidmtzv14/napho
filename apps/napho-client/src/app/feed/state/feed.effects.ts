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
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.createPhoto),
      withLatestFrom(this.store.pipe(select(getAuthUserState))),
      mergeMap(([{ photo }, user]) =>
        this.feedService.createPhoto(photo, user).pipe(
          map(photoResponse =>
            FeedActions.createPhotoSuccess({ photo: photoResponse })
          ),
          catchError(() => of(FeedActions.createPhotoFailed()))
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
