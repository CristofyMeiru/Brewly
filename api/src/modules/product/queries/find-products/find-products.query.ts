import { Query } from '@nestjs/cqrs';
import { Product } from '@src/generated/prisma/client';

type Meta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export class FindProductsQuery extends Query<{ products: Product[], meta: Meta }> {
  constructor(
    public readonly search?: string | undefined,
    public readonly page?: number | undefined,
    public readonly limit?: number | undefined,
    public readonly orderBy?: 'createdAt' | 'name' | 'price' | undefined,
    public readonly order?: 'asc' | 'desc' | undefined,
  ) {
    super();
  }
}
