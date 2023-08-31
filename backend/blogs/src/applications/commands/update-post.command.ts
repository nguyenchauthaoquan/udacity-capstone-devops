import { ICommand } from '@nestjs/cqrs';

export default class UpdatePostCommand implements ICommand {
  id: string;
  title: string;
  content?: string;

  constructor(id: string, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
