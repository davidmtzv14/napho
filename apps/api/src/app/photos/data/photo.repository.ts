import { Repository, EntityRepository } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { GetPhotosFilterDto } from '../dto/get-photos-filter.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { User } from '@napho/data';

@EntityRepository(PhotoEntity)
export class PhotoRepository extends Repository<PhotoEntity> {
  async getPhotos(filterDto: GetPhotosFilterDto, user: Partial<User>): Promise<PhotoEntity[]> {
    const { search, field, order } = filterDto;
    const query = this.createQueryBuilder('photo');

    query.where('photo.userId = :userId', { userId: user.id });

    if (search) {
      query.andWhere(
        '(photo.content LIKE :search photo.user.username LIKE :search OR photo.tags LIKE :search)',
        { search: `%${search}%` }
      );
    }

    if (field) {
      if (order === 'ASC') {
        query.orderBy('photo.:field', 'ASC').setParameters({ field });
      } else {
        query.orderBy('photo.:field', 'DESC').setParameters({ field });
      }
    }

    const photos = await query.getMany();

    return photos;
  }

  async createPhoto(
    createPhotoDto: CreatePhotoDto,
    user: Partial<User>
  ): Promise<PhotoEntity> {
    const { imageUrl } = createPhotoDto;

    const photo = new PhotoEntity();
    photo.imageUrl = imageUrl;
    photo.user = user;
    await photo.save();
    delete photo.user;

    return photo;
  }
}
