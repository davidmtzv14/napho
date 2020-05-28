import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm';
import { CommentStatus, Comment, Photo, User } from '@napho/data';
import { PhotoEntity } from '../../photos/data/photo.entity';
import { UserEntity } from '@api/users/user.entity';

@Entity('comments')
export class CommentEntity extends BaseEntity implements Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => PhotoEntity,
    photo => photo.comments,
    { eager: false }
  )
  photo: Partial<Photo>;

  @Column()
  photoId: number;

  @Column()
  content: string;

  @Column({ type: 'enum', enum: CommentStatus })
  status: CommentStatus;

  @ManyToOne(type => UserEntity)
  user: Partial<User>;

  @Column()
  username: string;
}
