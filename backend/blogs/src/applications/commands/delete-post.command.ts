import { ICommand } from '@nestjs/cqrs';

export default class DeletePostCommand implements ICommand {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
