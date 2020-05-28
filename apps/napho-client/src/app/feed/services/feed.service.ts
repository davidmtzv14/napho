import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NAPHO_DATA_CONFIGURATION,
  NaphoDataConfiguration,
  Photo,
  Comment
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

  createPhoto(photo: Partial<Photo>): Observable<Photo> {
    const payload = { photo };
    return this.http.post<Photo>(`${this.config.apiUrl}/photos`, payload);
  }

  createComment(comment: {
    photoId: number;
    content: string;
  }): Observable<Comment> {
    const payload = { content: comment.content };
    return this.http.post<Comment>(
      `${this.config.apiUrl}/${comment.photoId}/comments`,
      payload
    );
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.config.apiUrl}/photos?`);
  }
}
