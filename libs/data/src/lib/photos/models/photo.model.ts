import { Comment } from '@napho/data';
import { User } from '@napho/data';
import { Tag } from './tag.model';

export interface Photo {
  id?: number;
  imageUrl: string;
  description: string;
  comments: Comment[];
  user: Partial<User>;
  favoriteOf: Partial<User>[];
  tags: Tag[];
  favorite?: boolean;
}
