import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { fromFeed } from '@app/feed/state';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService {

  constructor(private store: Store<any>, private actions$: Actions) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Action> {
    const id = route.params.id;

    this.store.dispatch(fromFeed.actions.getUser({ id }));

    return this.actions$.pipe(
      ofType(fromFeed.actions.getUserSuccess),
      take(1)
    );
  }}
