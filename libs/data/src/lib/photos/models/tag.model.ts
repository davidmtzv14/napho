import { Photo } from '@napho/data';

export interface Tag {
  id?: number;
  content: string;
  photo: Photo;
  photoId: number
}
