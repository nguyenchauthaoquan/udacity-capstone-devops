import { Module } from '@nestjs/common';
import { ConfigurationsModule } from './configurations.module';
import PostsController from '../presentation/posts.controller';
import DatabaseModule from './database.module';
import HandlerModule from './handler.module';

@Module({
  imports: [ConfigurationsModule, DatabaseModule, HandlerModule],
  controllers: [PostsController],
  providers: [],
  exports: [DatabaseModule],
})
export class AppModule {}
