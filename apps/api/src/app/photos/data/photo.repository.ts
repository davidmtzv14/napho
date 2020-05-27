import { Repository, EntityRepository } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { GetPhotosFilterDto } from '../dto/get-photos-filter.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { User } from '@napho/data';
import { TagEntity } from './tag.entity';

@EntityRepository(PhotoEntity)
export class PhotoRepository extends Repository<PhotoEntity> {
  async getPhotos(
    filterDto: GetPhotosFilterDto,
    user: Partial<User>
  ): Promise<PhotoEntity[]> {
    const { search, field } = filterDto;
    const query = this.createQueryBuilder('photo');

    query.andWhere('photo.userId = :userId', { userId: user.id });

    if (search) {
      query.andWhere(
        '(photo.content LIKE :search OR photo.user.username LIKE :search OR photo.tags LIKE :search)',
        { search: `%${search}%` }
      );
    }

    if (field) {
      query.orderBy(':field', 'ASC').setParameters({ field });
    }

    const photos = await query
      .leftJoinAndSelect('photo.user', 'user')
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
