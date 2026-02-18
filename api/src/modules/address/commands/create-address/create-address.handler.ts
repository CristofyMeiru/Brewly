import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from '@src/shared/services/prisma.service';
import { CreateAddressCommand } from './create-address.command';

@CommandHandler(CreateAddressCommand)
export class CreateAddressHandler implements ICommandHandler<CreateAddressCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateAddressCommand) {
    const { userId, isDefault = false, ...data } = command;

    return this.prisma.$transaction(async (tx) => {
      const existingAddressesCount = await tx.address.count({
        where: { userId },
      });

      const shouldBeDefault = existingAddressesCount === 0 || isDefault === true;

      if (shouldBeDefault) {
        await tx.address.updateMany({
          where: { userId, isDefault: true },
          data: { isDefault: false },
        });
      }

      const address = await tx.address.create({
        data: {
          userId,
          ...data,
          isDefault: shouldBeDefault,
        },
      });

      return address;
    });
  }
}
