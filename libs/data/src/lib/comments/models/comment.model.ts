import { Photo } from '../../photos';
import { User } from '../../users';

export interface Comment {
  id: number,
  photo: Partial<Photo>,
  photoId: number;
  content: string,
  status: CommentStatus,
  user: Partial<User>,
  username: string
}

export enum CommentStatus {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected'
}

