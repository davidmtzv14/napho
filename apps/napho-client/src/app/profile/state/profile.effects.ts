import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as ProfileActions from './profile.actions';
import { Store } from '@ngrx/store';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class ProfileEffects {
  getProfileUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getProfileUser),
      mergeMap(({ id }) =>
        this.profileService.getProfileUser(id).pipe(
          map(user => ProfileActions.getProfileUserSuccess({ user })),
          catchError(() => of(ProfileActions.getProfileUserFailed()))
        )
      )
    )
  );

  getProfilePhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getProfilePhotos),
      mergeMap(({ id }) =>
        this.profileService.getProfilePhotos(id).pipe(
          map(photos => ProfileActions.getProfilePhotosSuccess({ photos })),
          catchError(() => of(ProfileActions.getProfilePhotosFailed()))
        )
      )
    )
  );

  getFavPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getFavPhotos),
      mergeMap(({ id }) =>
        this.profileService.getFavPhotos(id).pipe(
          map(photos => ProfileActions.getFavPhotosSuccess({ photos })),
          catchError(() => of(ProfileActions.getFavPhotosFailed()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private profileService: ProfileService
  ) {}
}
