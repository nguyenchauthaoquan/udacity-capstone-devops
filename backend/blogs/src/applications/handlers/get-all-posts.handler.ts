import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import GetAllPostsQuery from '../queries/get-all-posts.query';
import PaginatedListResponseModel from '../../core/models/paginated-list-response.model';
import PostEntity from '../../core/entities/post.entity';
import PostRepository from '../../infrastructure/repositories/post.repository';

@QueryHandler(GetAllPostsQuery)
export default class GetAllPostsHandler
  implements IQueryHandler<GetAllPostsQuery>
{
  constructor(private postRepository: PostRepository) {}

  async execute(
    query: GetAllPostsQuery,
  ): Promise<PaginatedListResponseModel<PostEntity>> {
    return await this.postRepository.getAll(
      {
        page: query.page,
        size: query.size,
      },
      query.options,
    );
  }
}
