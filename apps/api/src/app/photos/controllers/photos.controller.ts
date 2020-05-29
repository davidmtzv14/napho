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

@Controller('photos')
@UseGuards(AuthGuard())
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Get('user/:id')
  getUserPhotos(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: Partial<User>
  ): Promise<PhotoEntity[]> {
    return this.photosService.getUserPhotos(id, user);
  }

  @Get('user-fav/:id')
  getUserFavPhotos(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: Partial<User>
  ): Promise<PhotoEntity[]> {
    return this.photosService.getUserFavPhotos(id, user);
  }

  @Get('feed')
  getFeedPhotos(@GetUser() user: Partial<User>): Promise<PhotoEntity[]> {
    return this.photosService.getFeedPhotos(user);
  }

  @Get('search')
  getSearchPhotos(
    @Query(ValidationPipe) filterDto: GetPhotosFilterDto,
    @GetUser() user: Partial<User>
  ): Promise<PhotoEntity[]> {
    return this.photosService.getSearchPhotos(filterDto, user);
  }

  @Get(':id')
  getPhotoById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<PhotoEntity> {
    return this.photosService.getPhotoById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPhoto(
    @Body('photo') createPhotoDto: CreatePhotoDto,
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

  @Patch(':id/favorite')
  updatePhotoFavorite(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: Partial<User>
  ): Promise<PhotoEntity> {
    return this.photosService.updatePhotoFavorite(id, user);
  }
}
