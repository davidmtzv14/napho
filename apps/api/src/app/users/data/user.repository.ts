import { EntityRepository, Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import { SignUpCredentialsDto } from '../../auth/dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from '@napho/data';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async signUp(signUpCredentialsDto: SignUpCredentialsDto): Promise<User> {
    const {
      username,
      password,
      email,
      firstName,
      lastName,
      gender
    } = signUpCredentialsDto;

    const user = new UserEntity();
    user.username = username;
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.gender = gender;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return user;
  }

  async getSearchUsers(search: string): Promise<UserEntity[]> {
    const query = this.createQueryBuilder('user');

    if (search) {
      query.where(
        '(user.username LIKE :search OR user.firstName LIKE :search OR user.lastName LIKE :search OR user.description LIKE :search)',
        { search: `%${search}%` }
      );
    }

    const users = await query.getMany();

    return users;
  }

  async getUserFollowers(id: number): Promise<UserEntity[]> {
    const query = this.createQueryBuilder('user');

    query
      .leftJoinAndSelect('user.following', 'following')
      .where('following.id = :userId', { userId: id });

    const users = await query.getMany();

    return users;
  }

  async getUserFollowing(id: number): Promise<Partial<User>[]> {
    const query = this.createQueryBuilder('user');

    query
      .where('user.id = :userId', { userId: id })
      .leftJoinAndSelect('user.following', 'following');

    const user = await query.getOne();

    return user.following;
  }

  async followUser(user: Partial<User>, id: number): Promise<UserEntity> {
    const query = this.createQueryBuilder('user');

    query
      .where('user.id = :userId', { userId: user.id })
      .leftJoinAndSelect('user.following', 'following');

    const userEntity = await query.getOne();
    const followingUser = await this.findOne(id);

    let found = false;
    for (let i = 0; i < userEntity.following.length; i++) {
      if (userEntity.following[i].id === followingUser.id) {
        found = true;
        break;
      }
    }

    if (found) {
      userEntity.following = userEntity.following.filter(
        following => following.id !== followingUser.id
      );
    } else {
      userEntity.following.push(followingUser);
    }
    await userEntity.save();

    return followingUser;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
