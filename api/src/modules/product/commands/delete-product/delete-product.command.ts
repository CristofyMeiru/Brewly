import { Command } from '@nestjs/cqrs';

export class DeleteProductCommand extends Command<unknown> {
  constructor(public readonly id: string) {
    super();
  }
}
