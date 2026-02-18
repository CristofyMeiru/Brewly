import { Command } from '@nestjs/cqrs';
import { Address } from '@src/generated/prisma/client';

export class FindAddressQuery extends Command<Address> {
  constructor(public readonly id: string) {
    super();
  }
}
