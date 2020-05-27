import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm';
import { Photo,Tag } from '@napho/data';
import { PhotoEntity } from './photo.entity';

@Entity('tags')
export class TagEntity extends BaseEntity implements Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(
    type => PhotoEntity,
    photo => photo.tags,
    { eager: false }
  )
  photo: Photo;

  @Column()
  photoId: number;
}
