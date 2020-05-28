import { User, Photo } from '@napho/data';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { PhotoEntity } from '../../photos/data/photo.entity';

@Entity('users')
@Unique(['username', 'email'])
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  profileImgUrl: string;

  @OneToMany(
    type => PhotoEntity,
    photo => photo.user,
    { eager: true }
  )
  photos: Photo[];

  @ManyToMany(
    type => PhotoEntity,
    favPhoto => favPhoto.user
  )
  favPhotos: Photo[];

  @ManyToMany(type => UserEntity, { cascade: true })
  @JoinTable({
    joinColumns: [{ name: 'followerId' }],
    inverseJoinColumns: [{ name: 'followingId' }]
  })
  following: Partial<User>[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
