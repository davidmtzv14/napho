import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '@napho/data';
import { Observable } from 'rxjs';
import { NaphoDataConfiguration, NAPHO_DATA_CONFIGURATION } from '@napho/data';

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
    return this.http.post<User>(`${this.config.apiUrl}/auth/signin`, user);
  }

  signUp(user: Partial<User>): Observable<User> {
    return this.http.post<User>(
      `${this.config.apiUrl}/auth/signup`,
      user
    );
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.clear();
  }
}
