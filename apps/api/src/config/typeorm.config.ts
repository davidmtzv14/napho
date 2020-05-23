import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { environment } from '@env/environment';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: environment.databaseConfig.type,
  host: process.env.RDS_HOSTNAME || environment.databaseConfig.host,
  port: Number(process.env.RDS_PORT) || environment.databaseConfig.port,
  username: process.env.RDS_USERNAME || environment.databaseConfig.username,
  password: process.env.RDS_PASSWORD || environment.databaseConfig.password,
  database: process.env.RDS_DB_NAME || environment.databaseConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize:
    Boolean(process.env.TYPEORMSYNC) || environment.databaseConfig.syncrhonize
};
