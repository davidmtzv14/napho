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
export class FeedService {
  constructor(
    private http: HttpClient,
    @Inject(NAPHO_DATA_CONFIGURATION)
    public config: NaphoDataConfiguration
  ) {}

  createPhoto(photo: Partial<Photo>, user: Partial<User>): Observable<User> {
    const payload = { photo, user };
    return this.http.post<User>(`${this.config.apiUrl}/photos`, payload);
  }

  getPhotos(user: Partial<User>): Observable<User> {
    return this.http.get<User>(`${this.config.apiUrl}/photos?user=${user}`);
  }
}
