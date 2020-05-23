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
import { UserEntity } from '../../users/user.entity';
import { CommentEntity } from '../../comments/data/comment.entity';

@Entity()
export class PhotoEntity extends BaseEntity implements Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;

  @Column()
  content: string;

  @OneToMany(
    type => CommentEntity,
    comment => comment.photo,
    { eager: true }
  )
  comments: Partial<Comment[]>;

  @ManyToOne(
    type => UserEntity,
    user => user.photos,
    { eager: false }
  )
  user: Partial<User>;

  @Column()
  userId: number

  @ManyToMany(
    type => UserEntity,
    favOf => favOf.photos,
    { cascade: false }
  )
  @JoinTable()
  favoriteOf: Partial<User>[];

  @Column()
  tags: string[];
}
