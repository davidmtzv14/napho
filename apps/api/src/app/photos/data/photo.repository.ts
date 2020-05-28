import { Repository, EntityRepository } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { GetPhotosFilterDto } from '../dto/get-photos-filter.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { User } from '@napho/data';
import { TagEntity } from './tag.entity';
import { UserRepository } from '@api/users/data/user.repository';

@EntityRepository(PhotoEntity)
export class PhotoRepository extends Repository<PhotoEntity> {
  async getUserPhotos(id: number): Promise<PhotoEntity[]> {
    const query = this.createQueryBuilder('photo');

    query.andWhere('photo.userId = :userId', { userId: id });

    const photos = await query
      .leftJoinAndSelect('photo.user', 'user')
      .leftJoinAndSelect('photo.comments', 'comment')
      .leftJoinAndSelect('photo.tags', 'tag')
      .getMany();

    return photos;
  }

  async getUserFavPhotos(id: number): Promise<PhotoEntity[]> {
    const query = this.createQueryBuilder('photo');

    query.andWhere('photo.userId = :userId', { userId: id });

    const photos = await query
      .leftJoinAndSelect('photo.user', 'user')
      .leftJoinAndSelect('photo.comments', 'comment')
      .leftJoinAndSelect('photo.tags', 'tag')
      .getMany();

    return photos;
  }

  async getSearchPhotos(filterDto: GetPhotosFilterDto): Promise<PhotoEntity[]> {
    const { search, field } = filterDto;
    const query = this.createQueryBuilder('photo');
    query.leftJoinAndSelect('photo.user', 'user');

    if (search) {
      query.where(
        '(photo.description LIKE :search OR user.username LIKE :search)',
        { search: `%${search}%` }
      );
    }

    if (field) {
      if (field === 'favoriteOf') {
        query
          .leftJoin('photo.favoriteOf', 'favoriteOf')
          .addSelect('COUNT(favoriteOf.id) as favoriteCount')
          .orderBy('favoriteCount', 'ASC');
      } else if (field === 'comments') {
        query
          .leftJoin('photo.comments', 'comment')
          .addSelect('COUNT(comment.id) as commentCount')
          .orderBy('commentCount', 'ASC');
      }
    }

    const photos = await query
      .leftJoinAndSelect('photo.comments', 'comment')
      .leftJoinAndSelect('photo.tags', 'tag')
      .getMany();

    return photos;
  }

  async createPhoto(
    createPhotoDto: CreatePhotoDto,
    user: Partial<User>
  ): Promise<PhotoEntity> {
    const { description, tags, imageUrl } = createPhotoDto;
    const photoTags: TagEntity[] = [];

    const photo = new PhotoEntity();
    photo.description = description;
    photo.imageUrl = imageUrl;
    photo.user = user;
    photo.userId = user.id;
    tags.forEach(tag => {
      const photoTag = new TagEntity();
      photoTag.content = tag;
      photoTag.photoId = photo.id;
      photoTags.push(photoTag);
    });
    photo.tags = photoTags;
    await photo.save();
    delete photo.user;

    return photo;
  }
}
