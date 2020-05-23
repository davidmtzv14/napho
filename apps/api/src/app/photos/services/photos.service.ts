import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoRepository } from '../data/photo.repository';
import { PhotoEntity } from '../data/photo.entity';
import { User } from '@napho/data';
import { GetPhotosFilterDto } from '../dto/get-photos-filter.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { UserEntity } from '../../users/user.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotoRepository)
    private photoRepository: PhotoRepository
  ) {}

  async getPhotos(filterDto: GetPhotosFilterDto, user): Promise<PhotoEntity[]> {
    return this.photoRepository.getPhotos(filterDto, user);
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
