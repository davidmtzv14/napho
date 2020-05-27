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

  createPhoto(photo: Partial<Photo>): Observable<User> {
    const payload = { photo };
    return this.http.post<User>(`${this.config.apiUrl}/photos`, payload);
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.config.apiUrl}/photos?`);
  }
}
