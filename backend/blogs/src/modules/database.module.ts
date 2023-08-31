import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import PostgresDatasource from '../infrastructure/database/database.source';
import Repositories from '../infrastructure/repositories/index.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return PostgresDatasource.options;
      },
    }),
  ],
  providers: [...Repositories],
  exports: [...Repositories],
})
export default class DatabaseModule {}
