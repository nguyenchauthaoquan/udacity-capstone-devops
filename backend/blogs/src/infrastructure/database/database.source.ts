import { DataSource } from 'typeorm';

const PostgresDatasource: DataSource = new DataSource({
  type: 'postgres',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  entities: ['dist/core/**/*.entity.{js,ts}'],
  migrations: ['dist/infrastructure/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});

console.log(process.env.DB_NAME)

export default PostgresDatasource;
