import {
  Controller,
  UseGuards,
  Get,
  Query,
  ValidationPipe,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  Body,
  Delete,
  Patch
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PhotosService } from '../services/photos.service';
import { PhotoEntity } from '../data/photo.entity';
import { User } from '@napho/data';
import { GetPhotosFilterDto } from '../dto/get-photos-filter.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { GetUser } from '../../auth/decorators/get-user.decorator';
import { UserEntity } from '../../users/user.entity';

@Controller('photos')
@UseGuards(AuthGuard())
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Get()
  getPhotos(
    @Query(ValidationPipe) filterDto: GetPhotosFilterDto,
    @GetUser() user: Partial<User>
  ): Promise<PhotoEntity[]> {
    return this.photosService.getPhotos(filterDto, user);
  }

  @Get(':id')
  getPhotoById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: Partial<User>
  ): Promise<PhotoEntity> {
    return this.photosService.getPhotoById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPhoto(
    @Body() createPhotoDto: CreatePhotoDto,
    @GetUser() user: Partial<User>
  ): Promise<PhotoEntity> {
    return this.photosService.createPhoto(createPhotoDto, user);
  }

  @Delete(':id')
  deletePhoto(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: Partial<User>
  ): Promise<void> {
    return this.photosService.deletePhoto(id, user);
  }

  @Patch('/:id')
  updatePhotoFavorite(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: Partial<User>
  ): Promise<PhotoEntity> {
    return this.photosService.updatePhotoFavorite(id, user);
  }
}
