import { Command } from '@nestjs/cqrs';
import { Address } from '@src/generated/prisma/client';

export class CreateAddressCommand extends Command<Address> {
  constructor(
    public readonly street: string,
    public readonly number: string,
    public readonly city: string,
    public readonly state: string,
    public readonly zipCode: string,
    public readonly userId: string,
    public readonly isDefault?: boolean,
  ) {
    super();
  }
}
