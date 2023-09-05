import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import UpdatePostCommand from '../commands/update-post.command';
import PostRepository from '../../infrastructure/repositories/post.repository';

@CommandHandler(UpdatePostCommand)
export default class UpdatePostHandler
  implements ICommandHandler<UpdatePostCommand>
{
  constructor(private postRepository: PostRepository) {}
  async execute(command: UpdatePostCommand): Promise<object> {
    await this.postRepository.update(
      {
        id: command.id,
      },
      {
        title: command.title,
        content: command.content,
      },
    );

    return {
      success: true,
    };
  }
}
