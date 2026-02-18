import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '@src/shared/services/prisma.service';
import { FindAddressByUserQuery } from './find-by-user.query';

@QueryHandler(FindAddressByUserQuery)
export class FindAddressByUserHandler implements IQueryHandler<FindAddressByUserQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: FindAddressByUserQuery) {
    return await this.prisma.address.findMany({ where: { userId: query.userId } });
  }
}
