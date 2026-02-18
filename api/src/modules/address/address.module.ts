import { Module } from '@nestjs/common';
import { PrismaService } from '@src/shared/services/prisma.service';
import { AddressController } from './address.controller';
import { addressCommandHandlers } from './commands';
import { addressQueryHandlers } from './queries';
import { UserAddressController } from './user-address.controller';

@Module({
  controllers: [AddressController, UserAddressController],
  providers: [PrismaService, ...addressCommandHandlers, ...addressQueryHandlers],
})
export class AddressModule {}
