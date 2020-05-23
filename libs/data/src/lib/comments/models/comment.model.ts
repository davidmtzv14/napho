import { Photo } from '../../photos';

export interface Comment {
  id: number,
  photo: Partial<Photo>,
  content: string,
  status: CommentStatus
}

export enum CommentStatus {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected'
}

