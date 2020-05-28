import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NAPHO_DATA_CONFIGURATION,
  NaphoDataConfiguration,
  User,
  Photo
} from '@napho/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private http: HttpClient,
    @Inject(NAPHO_DATA_CONFIGURATION)
    public config: NaphoDataConfiguration
  ) {}

  getProfileUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.config.apiUrl}/users/${id}`);
  }

  getProfilePhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.config.apiUrl}/photos/user/${id}`);
  }

  getFavPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `${this.config.apiUrl}/photos/user-fav/${id}`
    );
  }

  getUserFollowers(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `${this.config.apiUrl}/users/${id}/followers`
    );
  }

  getUserFollowing(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `${this.config.apiUrl}/users/${id}/following`
    );
  }

  followUser(id: number): Observable<User> {
    return this.http.put<User>(`${this.config.apiUrl}/users/follow/${id}`, {});
  }
}
