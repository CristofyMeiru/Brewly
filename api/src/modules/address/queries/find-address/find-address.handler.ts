import { NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '@src/shared/services/prisma.service';
import { FindAddressQuery } from './find-address.query';

@QueryHandler(FindAddressQuery)
export class FindAddressHandler implements IQueryHandler<FindAddressQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: FindAddressQuery) {
    const address = await this.prisma.address.findUnique({ where: { id: query.id } });

    if (!address) {
      throw new NotFoundException('Endereço não encontrado');
    }

    return address;
  }
}
