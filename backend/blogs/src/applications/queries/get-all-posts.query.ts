import { IQuery } from '@nestjs/cqrs';
import { FindManyOptions } from 'typeorm';
import PostEntity from '../../core/entities/post.entity';

export default class GetAllPostsQuery implements IQuery {
  page?: string;
  size?: string;
  options?: FindManyOptions<PostEntity>;

  constructor(
    page: string,
    size: string,
    options?: FindManyOptions<PostEntity>,
  ) {
    this.page = page;
    this.size = size;
    this.options = options;
  }
}
