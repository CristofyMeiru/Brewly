import { Command } from '@nestjs/cqrs';
import { Product } from '@src/generated/prisma/client';

export class FindProductQuery extends Command<Product> {
  constructor(public readonly id: string) {
    super();
  }
}
