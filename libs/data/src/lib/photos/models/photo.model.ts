import { Comment } from '@napho/data';
import { User } from '@napho/data';

export interface Photo {
  id?: number;
  imageUrl: string;
  content: string;
  comments: Comment[];
  user: Partial<User>;
  favoriteOf: Partial<User>[];
  tags: string[];
}
