// src/modules/product/queries/find-products/find-products.handler.ts

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '@src/shared/services/prisma.service';
import { FindProductsQuery } from './find-products.query';

@QueryHandler(FindProductsQuery)
export class FindProductsHandler implements IQueryHandler<FindProductsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: FindProductsQuery) {
    const { search, page = 1, limit = 10, orderBy = 'createdAt', order = 'desc' } = query;

    const skip = (page - 1) * limit;

    const where = search
      ? {
          name: {
            contains: search,
            mode: 'insensitive' as const,
          },
        }
      : undefined;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [orderBy]: order,
        },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      products: data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
