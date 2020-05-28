import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { fromFeed } from '@app/feed/state';
import { take } from 'rxjs/operators';
import { fromProfile } from '../state';
import { getAuthUserState } from '@app/auth/state';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService {
  user$ = this.store.select(getAuthUserState);

  constructor(private store: Store<any>, private actions$: Actions) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params.id;

    const user$ = this.actions$.pipe(
      ofType(fromProfile.actions.getProfileUserSuccess),
      take(1)
    );

    const photos$ = this.actions$.pipe(
      ofType(fromProfile.actions.getProfilePhotosSuccess),
      take(1)
    );

    const favPhotos$ = this.actions$.pipe(
      ofType(fromProfile.actions.getFavPhotosSuccess),
      take(1)
    );

    const followers$ = this.actions$.pipe(
      ofType(fromProfile.actions.getUserFollowersSuccess),
      take(1)
    );
    const following$ = this.actions$.pipe(
      ofType(fromProfile.actions.getUserFollowingSuccess),
      take(1)
    );

    if (id) {
      this.store.dispatch(fromProfile.actions.getProfileUser({ id }));
      this.store.dispatch(fromProfile.actions.getProfilePhotos({ id }));
      this.store.dispatch(fromProfile.actions.getFavPhotos({ id }));
      this.store.dispatch(fromProfile.actions.getUserFollowers({ id }));
      this.store.dispatch(fromProfile.actions.getUserFollowing({ id }));
    } else {
      this.user$.subscribe(user => {
        this.store.dispatch(
          fromProfile.actions.getProfileUser({ id: user.id })
        );
        this.store.dispatch(
          fromProfile.actions.getProfilePhotos({ id: user.id })
        );
        this.store.dispatch(fromProfile.actions.getFavPhotos({ id: user.id }));
        this.store.dispatch(
          fromProfile.actions.getUserFollowers({ id: user.id })
        );
        this.store.dispatch(
          fromProfile.actions.getUserFollowing({ id: user.id })
        );
      });
    }

    return forkJoin([user$, photos$, favPhotos$, followers$, following$]);
  }
}
