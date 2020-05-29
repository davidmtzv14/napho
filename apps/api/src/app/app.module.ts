import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { PhotosModule } from './photos/photos.module';
import { AuthModule } from './auth/auth.module';

import { ServeStaticModule } from '@nestjs/serve-static'; // <- INSERT LINE
import { join } from 'path'; // <- INSERT LINE

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'napho-client'),
      exclude: ['/api*']
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    CommentsModule,
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
