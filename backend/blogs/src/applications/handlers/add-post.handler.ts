import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import AddPostCommand from '../commands/add-post.command';
import PostRepository from '../../infrastructure/repositories/post.repository';
import PostEntity from '../../core/entities/post.entity';

@CommandHandler(AddPostCommand)
export default class AddPostHandler implements ICommandHandler<AddPostCommand> {
  constructor(private postRepository: PostRepository) {}
  async execute(command: AddPostCommand): Promise<object> {
    const post = new PostEntity(command);

    await this.postRepository.add(post);
    return {
      id: post.id,
    };
  }
}
