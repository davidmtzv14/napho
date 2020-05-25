import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '@napho/data';
// import { clear, get } from 'local-storage';
import { Observable } from 'rxjs';
import { NaphoDataConfiguration, NAPHO_DATA_CONFIGURATION } from '../../../../../../libs/data/src/lib/data.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(NAPHO_DATA_CONFIGURATION)
    public config: NaphoDataConfiguration
  ) {}

  signIn(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.config.apiUrl}/auth/log-in`, user);
  }

  signUp(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.config.apiUrl}/auth/create-account`, user);
  }

  // getToken(): string {
  //   return get('token');
  // }

  // logout(): void {
  //   clear();
  // }
}
