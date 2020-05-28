import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, forkJoin } from 'rxjs';
import { fromFeed } from '../state';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchResolverService {
  constructor(private actions$: Actions) {}

  resolve(): Observable<any> {
    const users$ = this.actions$.pipe(
      ofType(fromFeed.actions.getSearchPhotosSuccess),
      take(1)
    );
    const photos$ = this.actions$.pipe(
      ofType(fromFeed.actions.getSearchUsers),
      take(1)
    );

    return forkJoin([users$, photos$]);
  }
}
