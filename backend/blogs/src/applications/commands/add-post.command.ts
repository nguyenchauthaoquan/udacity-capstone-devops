import { ICommand } from '@nestjs/cqrs';

export default class AddPostCommand implements ICommand {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
