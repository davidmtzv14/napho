import { Module } from '@nestjs/common';
import { PhotosController } from './controllers/photos.controller';
import { PhotosService } from './services/photos.service';
import { PhotoRepository } from './data/photo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@api/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoRepository]), AuthModule],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
