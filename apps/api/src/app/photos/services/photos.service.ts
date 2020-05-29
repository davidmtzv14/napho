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

  async getUserPhotos(id: number, user: Partial<User>): Promise<PhotoEntity[]> {
    const query = this.photoRepository.createQueryBuilder('photo');
    const userQuery = this.userRepository.createQueryBuilder('user');
    userQuery
      .where('user.id = :userId', { userId: user.id })
      .leftJoinAndSelect('user.favPhotos', 'favPhotos');

    const userEntity = await userQuery.getOne();

    query.andWhere('photo.userId = :userId', { userId: id });

    let photos = await query
      .leftJoinAndSelect('photo.user', 'user')
      .leftJoinAndSelect('photo.comments', 'comment')
      .leftJoinAndSelect('photo.tags', 'tag')
      .leftJoinAndSelect('photo.favoriteOf', 'favoriteOf')
      .getMany();

    photos = photos.map(photo => {
      let found = false;
      for (let i = 0; i < userEntity.favPhotos.length; i++) {
        if (userEntity.favPhotos[i].id === photo.id) {
          found = true;
          break;
        }
      }

      if (found) {
        photo['favorite'] = true;
      } else {
        photo['favorite'] = false;
      }
      return photo;
    });

    return photos;
  }

  async getUserFavPhotos(
    id: number,
    user: Partial<User>
  ): Promise<PhotoEntity[]> {
    const query = this.photoRepository.createQueryBuilder('photo');
    const userQuery = this.userRepository.createQueryBuilder('user');
    userQuery
      .where('user.id = :userId', { userId: user.id })
      .leftJoinAndSelect('user.favPhotos', 'favPhotos');

    const userEntity = await userQuery.getOne();
    const favPhotos = userEntity.favPhotos.map(favPhoto => favPhoto.id);

    let photos = await query
      .leftJoinAndSelect('photo.user', 'user')
      .leftJoinAndSelect('photo.comments', 'comment')
      .leftJoinAndSelect('photo.tags', 'tag')
      .leftJoinAndSelect('photo.favoriteOf', 'favoriteOf')
      .getMany();

    photos = photos.filter(photo => {
      if (favPhotos.includes(photo.id)) {
        return photo;
      }
    });

    photos = photos.filter(photo => {
      const favoriteOf = photo.favoriteOf.map(favOf => favOf.id);
      if (favoriteOf.includes(id)) {
        return photo;
      }
    });

    photos = photos.map(photo => {
      let found = false;
      for (let i = 0; i < userEntity.favPhotos.length; i++) {
        if (userEntity.favPhotos[i].id === photo.id) {
          found = true;
          break;
        }
      }

      if (found) {
        photo['favorite'] = true;
      } else {
        photo['favorite'] = false;
      }
      return photo;
    });

    return photos;
  }

  async getFeedPhotos(user: Partial<User>): Promise<PhotoEntity[]> {
    const photoQuery = this.photoRepository.createQueryBuilder('photo');
    const userQuery = this.userRepository.createQueryBuilder('user');

    userQuery
      .where('user.id = :userId', { userId: user.id })
      .leftJoinAndSelect('user.following', 'following')
      .leftJoinAndSelect('user.favPhotos', 'favPhotos');

    const userEntity = await userQuery.getOne();

    const following = userEntity.following.map(follow => follow.id);

    let photos = await photoQuery
      .leftJoinAndSelect('photo.user', 'user')
      .leftJoinAndSelect('photo.comments', 'comment')
      .leftJoinAndSelect('photo.tags', 'tag')
      .leftJoinAndSelect('photo.favoriteOf', 'favoriteOf')
      .getMany();

    photos = photos.filter(photo => {
      if (following.includes(photo.user.id)) {
        return photo;
      }
    });

    photos = photos.map(photo => {
      let found = false;
      for (let i = 0; i < userEntity.favPhotos.length; i++) {
        if (userEntity.favPhotos[i].id === photo.id) {
          found = true;
          break;
        }
      }

      if (found) {
        photo['favorite'] = true;
      } else {
        photo['favorite'] = false;
      }
      return photo;
    });

    return photos;
  }

  async getSearchPhotos(
    filterDto: GetPhotosFilterDto,
    user: Partial<User>
  ): Promise<PhotoEntity[]> {
    const { search, field } = filterDto;
    const query = this.photoRepository.createQueryBuilder('photo');
    const userQuery = this.userRepository.createQueryBuilder('user');

    userQuery
      .where('user.id = :userId', { userId: user.id })
      .leftJoinAndSelect('user.favPhotos', 'favPhotos');

    const userEntity = await userQuery.getOne();

    query
      .leftJoinAndSelect('photo.user', 'user')
      .leftJoinAndSelect('photo.comments', 'comment')
      .leftJoinAndSelect('photo.tags', 'tag')
      .leftJoinAndSelect('photo.favoriteOf', 'favoriteOf');
    // let photos = await query.getMany();
    // const tags = [];
    // photos.forEach(photo => photo.tags.forEach(tag => {
    //   tags.push(tag.content)
    // }));

    // console.log(search, tags)

    if (search) {
      query.where(
        '(photo.description LIKE :search OR user.username LIKE :search OR user.firstName LIKE :search OR user.lastName LIKE :search)',
        { search: `%${search}%` }
      );
    }

    if (field) {
      if (field === 'favoriteOf') {
        query
          .addSelect('COUNT(favoriteOf.id) as favoriteCount')
          .orderBy('favoriteCount', 'DESC');
      } else if (field === 'comments') {
        query
          .addSelect('COUNT(comment.id) as commentCount')
          .orderBy('commentCount', 'DESC');
      }
    }

    let photos = await query
      .groupBy('photo.id')
      .addGroupBy('user.id')
      .addGroupBy('comment.id')
      .addGroupBy('tag.id')
      .addGroupBy('favoriteOf.id')
      .getMany();


    photos = photos.map(photo => {
      let found = false;
      for (let i = 0; i < userEntity.favPhotos.length; i++) {
        if (userEntity.favPhotos[i].id === photo.id) {
          found = true;
          break;
        }
      }

      if (found) {
        photo['favorite'] = true;
      } else {
        photo['favorite'] = false;
      }
      return photo;
    });

    this.photoRepository.findAndCount()

    return photos;
  }

  async getPhotoById(id: number): Promise<PhotoEntity> {
    const found = await this.photoRepository.findOne({
      where: { id }
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
    const query = this.userRepository.createQueryBuilder('user');

    query
      .where('user.id = :userId', { userId: user.id })
      .leftJoinAndSelect('user.favPhotos', 'favPhotos');

    const userEntity = await query.getOne();
    const photo = await this.getPhotoById(id);

    let found = false;
    for (let i = 0; i < userEntity.favPhotos.length; i++) {
      if (userEntity.favPhotos[i].id === photo.id) {
        found = true;
        break;
      }
    }

    if (found) {
      userEntity.favPhotos = userEntity.favPhotos.filter(
        favPhoto => favPhoto.id !== photo.id
      );
    } else {
      userEntity.favPhotos.push(photo);
    }

    await userEntity.save();
    await photo.save();

    return photo;
  }
}
