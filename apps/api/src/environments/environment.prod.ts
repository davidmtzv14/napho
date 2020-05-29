export const environment = {
  production: true,
  databaseConfig: {
    type: 'postgres',
    host: 'ec2-54-175-117-212.compute-1.amazonaws.com',
    port: 5432,
    database: 'drqg21iajeqfe',
    username: 'spazardonyzsqm',
    password: '89ed7d9c8c8a7f1e5bf007478cb3aa0bd3c3e56bd9ad8d6e0848140491438c8f',
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
