import { IQuery } from '@nestjs/cqrs';
import { FindOneOptions } from 'typeorm';
import PostEntity from '../../core/entities/post.entity';

export default class GetPostQuery implements IQuery {
  options: FindOneOptions<PostEntity>;

  constructor(options: FindOneOptions<PostEntity>) {
    this.options = options;
  }
}
