import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm';
import { Photo } from '@napho/data';
import { PhotoEntity } from './photo.entity';

@Entity('tags')
export class TagEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag: string;

  @ManyToOne(
    type => PhotoEntity,
    photo => photo.tags,
    { eager: false }
  )
  photo: Photo;
}
