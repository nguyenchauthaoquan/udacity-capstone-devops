import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import AddPostHandler from '../applications/handlers/add-post.handler';
import DatabaseModule from './database.module';
import UpdatePostHandler from '../applications/handlers/update-post.handler';
import DeletePostHandler from '../applications/handlers/delete-post.handler';
import GetAllPostsHandler from '../applications/handlers/get-all-posts.handler';
import GetPostHandler from '../applications/handlers/get-post.handler';

@Module({
  imports: [CqrsModule, DatabaseModule],
  providers: [
    AddPostHandler,
    UpdatePostHandler,
    DeletePostHandler,
    GetAllPostsHandler,
    GetPostHandler,
  ],
  exports: [CqrsModule],
})
export default class HandlerModule {}
