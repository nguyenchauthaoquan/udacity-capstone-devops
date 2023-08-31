import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import DeletePostCommand from '../commands/delete-post.command';
import PostRepository from '../../infrastructure/repositories/post.repository';

@CommandHandler(DeletePostCommand)
export default class DeletePostHandler
  implements ICommandHandler<DeletePostCommand>
{
  constructor(private postRepository: PostRepository) {}

  async execute(command: DeletePostCommand): Promise<object> {
    await this.postRepository.delete({
      id: command.id,
    });
    return {
      success: true,
    };
  }
}
