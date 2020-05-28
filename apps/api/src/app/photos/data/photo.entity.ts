import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { User, Photo, Comment } from '@napho/data';
import { UserEntity } from '../../users/data/user.entity';
import { CommentEntity } from '../../comments/data/comment.entity';
import { TagEntity } from './tag.entity';

@Entity('photos')
export class PhotoEntity extends BaseEntity implements Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;

  @Column()
  description: string;

  @OneToMany(
    type => CommentEntity,
    comment => comment.photo,
    { eager: true, cascade: true }
  )
  comments: Partial<Comment[]>;

  @ManyToOne(
    type => UserEntity,
    user => user.photos,
    { eager: false }
  )
  user: Partial<User>;

  @Column()
  userId: number;

  @ManyToMany(
    type => UserEntity,
    favOf => favOf.photos,
    { cascade: false }
  )
  @JoinTable()
  favoriteOf: Partial<User>[];

  @OneToMany(
    type => TagEntity,
    tag => tag.photo,
    { eager: true, cascade: true }
  )
  tags: TagEntity[];
}
