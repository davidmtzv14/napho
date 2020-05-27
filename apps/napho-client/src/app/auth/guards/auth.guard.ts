import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { getAuthUserState } from '../state';

/**
 * Auth guard that redirects the user to the login page if the user isn't authenticated
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  loginUrlTree = this.router.parseUrl('/auth/log-in');

  constructor(
    public store: Store<any>,
    public router: Router,
    public authService: AuthService
  ) {}

  canActivate() {
    return this.isAuthenticated().pipe(
      map(isAuthenticated => (!isAuthenticated ? this.loginUrlTree : true))
    );
  }

  canLoad() {
    return this.isAuthenticated().pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigateByUrl(this.loginUrlTree);
        }
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(getAuthUserState).pipe(
      map(user => {
        if (!user.token || user.token === "null") {
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
