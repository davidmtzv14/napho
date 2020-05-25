import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  databaseConfig: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'napho_dev',
    username: 'davidmartinez',
    password: 'postgres',
    synchronize: true
  },
  server: {
    port: 3333
  },
  jwt: {
    secret: 'pqowieurytlaksjdhf',
    expiresIn: 3600
  }
};
