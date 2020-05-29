import { Repository, EntityRepository } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { GetPhotosFilterDto } from '../dto/get-photos-filter.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { User } from '@napho/data';
import { TagEntity } from './tag.entity';
import { UserRepository } from '@api/users/data/user.repository';

@EntityRepository(PhotoEntity)
export class PhotoRepository extends Repository<PhotoEntity> {

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

    return photo;
  }
}
