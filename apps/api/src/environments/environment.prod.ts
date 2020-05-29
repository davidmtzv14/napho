export const environment = {
  production: true,
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
    expiresIn: 86400
  }
};
