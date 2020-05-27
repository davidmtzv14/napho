import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { fromFeed } from '../state';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedResolverService {
  constructor(private store: Store<any>, private actions$: Actions) {}

  resolve(): Observable<Action> {
    this.store.dispatch(fromFeed.actions.getFeedPhotos());

    return this.actions$.pipe(
      ofType(fromFeed.actions.getFeedPhotosSuccess),
      take(1)
    );
  }
}
