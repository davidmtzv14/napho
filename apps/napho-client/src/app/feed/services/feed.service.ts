import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NAPHO_DATA_CONFIGURATION,
  NaphoDataConfiguration,
  Photo,
  Comment,
  User,
  CommentStatus
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

  updatePhotoFavorite(id: number): Observable<Photo> {
    return this.http.patch<Photo>(
      `${this.config.apiUrl}/photos/${id}/favorite`,
      {}
    );
  }

  updateCommentStatus(comment: Partial<Comment>): Observable<Comment> {
    const payload = { status: comment.status };
    return this.http.patch<Comment>(
      `${this.config.apiUrl}/${comment.photoId}/comments/${comment.id}/status`,
      payload
    );
  }

  getFeedPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.config.apiUrl}/photos/feed`);
  }

  getSearchPhotos({search, field}): Observable<Photo[]> {
    const params = { search: search.search, field };
    return this.http.get<Photo[]>(`${this.config.apiUrl}/photos/search`, {
      params
    });
  }

  getSearchUsers({ search }): Observable<User[]> {
    const params = { search };
    return this.http.get<User[]>(`${this.config.apiUrl}/users/search`, {
      params
    });
  }
}
