import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm';
import { CommentStatus, Comment, Photo } from '@napho/data';
import { PhotoEntity } from '../../photos/data/photo.entity';

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
  content: string;

  @Column({ type: 'enum', enum: CommentStatus })
  status: CommentStatus;
}
