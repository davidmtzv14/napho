import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../data/user.repository';
import { UserEntity } from '../data/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from '@napho/data';

@Injectable()
export class UsersService {
  private userRepository: UserRepository;

  constructor(private readonly connection: Connection) {
    this.userRepository = this.connection.getCustomRepository(UserRepository);
  }

  async getSearchUsers(search: string): Promise<UserEntity[]> {
    return this.userRepository.getSearchUsers(search);
  }

  async getUserById(id: number): Promise<UserEntity> {
    const found = await this.userRepository.findOne({
      where: { id }
    });

    if (!found) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }

    return found;
  }

  async getUserFollowers(id: number): Promise<UserEntity[]> {
    return this.userRepository.getUserFollowers(id);
  }

  async getUserFollowing(id: number): Promise<Partial<User>[]> {
    return this.userRepository.getUserFollowing(id);
  }

  async followUser(user: Partial<User>, id: number): Promise<UserEntity> {
    return this.userRepository.followUser(user, id);
  }

  async updateUser(
    user: Partial<User>,
    userBody: Partial<User>
  ): Promise<UserEntity> {
    const userEntity = await this.getUserById(user.id);

    userEntity.firstName = userBody.firstName;
    userEntity.lastName = userBody.lastName;
    userEntity.gender = userBody.gender;
    userEntity.username = userBody.username;
    userEntity.description = userBody.description;
    userEntity.profileImgUrl = userBody.profileImgUrl;

    await userEntity.save();

    return userEntity;
  }
}
