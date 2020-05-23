export interface Environment {
  production: boolean;
  databaseConfig: {
    type: 'postgres';
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    syncrhonize: boolean;
  };
  server: {
    port: number;
  };
  jwt: {
    secret: string;
    expiresIn: number
  };
}
