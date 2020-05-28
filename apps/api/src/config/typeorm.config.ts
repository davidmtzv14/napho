import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { environment } from '@env/environment';
import { UserEntity } from '@api/users/data/user.entity';
import { CommentEntity } from '@api/comments/data/comment.entity';
import { PhotoEntity } from '@api/photos/data/photo.entity';
import { TagEntity } from '@api/photos/data/tag.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  // type: 'postgres',
  // host: 'localhost',
  // port: 5432,
  // username: 'davidmartinez',
  // password: 'postgres',
  // database: 'napho_dev',
  // entities: [UserEntity, CommentEntity, PhotoEntity, TagEntity],
  // synchronize: true
  type: environment.databaseConfig.type,
  host: process.env.RDS_HOSTNAME || environment.databaseConfig.host,
  port: Number(process.env.RDS_PORT) || environment.databaseConfig.port,
  username: process.env.RDS_USERNAME || environment.databaseConfig.username,
  password: process.env.RDS_PASSWORD || environment.databaseConfig.password,
  database: process.env.RDS_DB_NAME || environment.databaseConfig.database,
  entities: [UserEntity, CommentEntity, PhotoEntity, TagEntity],
  synchronize:
    Boolean(process.env.TYPEORMSYNC) || environment.databaseConfig.synchronize
};
