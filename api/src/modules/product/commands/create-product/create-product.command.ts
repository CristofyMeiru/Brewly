import { Command } from '@nestjs/cqrs';
import { Product } from '@src/generated/prisma/client';

export class CreateProductCommand extends Command<Product> {
  constructor(
    public readonly name: string,
    public readonly description: string | undefined,
    public readonly price: number,
    public readonly image: string | undefined,
    public readonly isActive: boolean | undefined,
  ) {
    super();
  }
}
