import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Product } from '@src/generated/prisma/client';
import { PrismaService } from '@src/shared/services/prisma.service';
import { CreateProductCommand } from './create-product.command';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    const product = await this.prisma.product.create({
      data: {
        name: command.name,
        description: command.description,
        price: command.price,
        image: command.image,
        isActive: command.isActive ?? true,
      },
    });

    return product;
  }
}
