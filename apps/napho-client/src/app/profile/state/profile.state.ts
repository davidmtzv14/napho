import { Photo, User } from '@napho/data';

export interface ProfileState {
  user: Partial<User>;
  photos: Partial<Photo>[];
  favPhotos: Partial<Photo>[];
  followers: Partial<User>[];
  following: Partial<User>[];
}
