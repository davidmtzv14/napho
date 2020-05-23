import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUp),
      mergeMap(({ user }) =>
        this.authService.signUp(user).pipe(
          map(userResponse =>
            AuthActions.signUpSuccess({ user: userResponse })
          ),
          catchError(() => of(AuthActions.signUpFailed()))
        )
      )
    )
  );

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      mergeMap(({ user }) =>
        this.authService.signIn(user).pipe(
          map(userResponse =>
            AuthActions.signInSuccess({ user: userResponse })
          ),
          catchError(() => of(AuthActions.signInFailed()))
        )
      )
    )
  );

  userAuthenticated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signInSuccess, AuthActions.signUpSuccess),
        tap(() => this.router.navigate(['spa']))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          // this.authService.logout();
          this.router.navigate(['auth', 'sign-in']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
