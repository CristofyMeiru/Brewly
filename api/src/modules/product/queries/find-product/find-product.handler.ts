import { NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Product } from '@src/generated/prisma/client';
import { PrismaService } from '@src/shared/services/prisma.service';
import { FindProductQuery } from './find-product.query';

@QueryHandler(FindProductQuery)
export class FindProductHandler implements IQueryHandler<FindProductQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: FindProductQuery): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id: query.id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }
}
