import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import PostEntity from '../core/entities/post.entity';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import AddPostCommand from '../applications/commands/add-post.command';
import UpdatePostCommand from '../applications/commands/update-post.command';
import DeletePostCommand from '../applications/commands/delete-post.command';
import GetAllPostsQuery from '../applications/queries/get-all-posts.query';
import GetPostQuery from '../applications/queries/get-post.query';
@Controller('posts')
export default class PostsController {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}
  @Post()
  async createPost(@Body() post: PostEntity) {
    return await this.commandBus.execute(
      new AddPostCommand(post.title, post.content),
    );
  }
  @Get()
  async getAllPosts(@Query('page') page: string, @Query('size') size: string) {
    return await this.queryBus.execute(new GetAllPostsQuery(page, size));
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return await this.queryBus.execute(
      new GetPostQuery({
        where: {
          id: id,
        },
      }),
    );
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() post: PostEntity) {
    return await this.commandBus.execute(
      new UpdatePostCommand(id, post.title, post.content),
    );
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return await this.commandBus.execute(new DeletePostCommand(id));
  }
}
