import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import GetPostQuery from '../queries/get-post.query';
import PostRepository from '../../infrastructure/repositories/post.repository';

@QueryHandler(GetPostQuery)
export default class GetPostHandler implements IQueryHandler<GetPostQuery> {
  constructor(private postRepository: PostRepository) {}

  async execute(query: GetPostQuery): Promise<object> {
    return await this.postRepository.find(query.options);
  }
}
