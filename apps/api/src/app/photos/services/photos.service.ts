import { Injectable, NotFoundException } from '@nestjs/common';
import { PhotoRepository } from '../data/photo.repository';
import { PhotoEntity } from '../data/photo.entity';
import { User } from '@napho/data';
import { GetPhotosFilterDto } from '../dto/get-photos-filter.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { Connection } from 'typeorm';
import { UserRepository } from '@api/users/data/user.repository';

@Injectable()
export class PhotosService {
  private photoRepository: PhotoRepository;
  private userRepository: UserRepository;

  constructor(private readonly connection: Connection) {
    this.photoRepository = this.connection.getCustomRepository(PhotoRepository);
    this.userRepository = this.connection.getCustomRepository(UserRepository);
  }

  async getUserPhotos(id: number): Promise<PhotoEntity[]> {
    return this.photoRepository.getUserPhotos(id);
  }

  async getUserFavPhotos(id: number): Promise<PhotoEntity[]> {
    return this.photoRepository.getUserFavPhotos(id);
  }

  async getFeedPhotos(user: Partial<User>): Promise<PhotoEntity[]> {
    const photoQuery = this.photoRepository.createQueryBuilder('photo');
    const userQuery = this.userRepository.createQueryBuilder('user');

    userQuery
      .where('user.id = :userId', { userId: user.id })
      .leftJoinAndSelect('user.following', 'following');

    const userEntity = await userQuery.getOne();

    const following = userEntity.following.map(follow => follow.id);

    let photos = await photoQuery
      .leftJoinAndSelect('photo.user', 'user')
      .leftJoinAndSelect('photo.comments', 'comment')
      .leftJoinAndSelect('photo.tags', 'tag')
      .getMany();

    photos = photos.filter(photo => {
      if (following.includes(photo.user.id)) {
        return photo;
      }
    });

    return photos;
  }

  async getSearchPhotos(filterDto: GetPhotosFilterDto): Promise<PhotoEntity[]> {
    return this.photoRepository.getSearchPhotos(filterDto);
  }

  async getPhotoById(id: number, user: Partial<User>): Promise<PhotoEntity> {
    const found = await this.photoRepository.findOne({
      where: { id, userId: user.id }
    });

    if (!found) {
      throw new NotFoundException(`Photo with ID "${id}" not found`);
    }

    return found;
  }

  async createPhoto(
    createPhotoDto: CreatePhotoDto,
    user: Partial<User>
  ): Promise<PhotoEntity> {
    return this.photoRepository.createPhoto(createPhotoDto, user);
  }

  async deletePhoto(id: number, user: Partial<User>): Promise<void> {
    const result = await this.photoRepository.delete({ id, userId: user.id });

    if (!result.affected) {
      throw new NotFoundException(`Photo with ID "${id}" not found`);
    }
  }

  async updatePhotoFavorite(
    id: number,
    user: Partial<User>
  ): Promise<PhotoEntity> {
    const photo = await this.getPhotoById(id, user);
    if (photo.favoriteOf.includes(user)) {
      photo.favoriteOf.filter(favUser => favUser.id !== user.id);
    } else {
      photo.favoriteOf.push(user);
    }
    await photo.save();
    return photo;
  }
}
