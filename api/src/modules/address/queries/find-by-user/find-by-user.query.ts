import { Command } from '@nestjs/cqrs';
import { Address } from '@src/generated/prisma/client';

export class FindAddressByUserQuery extends Command<Address[]> {
  constructor(public readonly userId: string) {
    super();
  }
}
