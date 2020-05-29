import { Photo, User } from '@napho/data';

export interface FeedState {
  photos: Partial<Photo>[];
  searchPhotos: Partial<Photo>[];
  searchUsers: Partial<User>[];
  profileUser: Partial<User>;
  search: string;
}
