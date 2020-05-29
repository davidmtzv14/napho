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

  updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updateProfile),
      mergeMap(({ user }) =>
        this.profileService.updateProfile(user).pipe(
          map(userResponse => ProfileActions.updateProfileSuccess({ user: userResponse })),
          catchError(() => of(ProfileActions.updateProfileFailed()))
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

  getUserFollowers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getUserFollowers),
      mergeMap(({ id }) =>
        this.profileService.getUserFollowers(id).pipe(
          map(followers =>
            ProfileActions.getUserFollowersSuccess({ followers })
          ),
          catchError(() => of(ProfileActions.getUserFollowersFailed()))
        )
      )
    )
  );

  getUserFollowing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getUserFollowing),
      mergeMap(({ id }) =>
        this.profileService.getUserFollowing(id).pipe(
          map(following =>
            ProfileActions.getUserFollowingSuccess({ following })
          ),
          catchError(() => of(ProfileActions.getUserFollowingFailed()))
        )
      )
    )
  );

  followUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.followUser),
      mergeMap(({ id }) =>
        this.profileService.followUser(id).pipe(
          map(user => ProfileActions.followUserSuccess({ user })),
          catchError(() => of(ProfileActions.followUserFailed()))
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
