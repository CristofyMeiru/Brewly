import { Module } from '@nestjs/common';
import { PrismaService } from '@src/shared/services/prisma.service';
import { productCommandHandlers } from './commands';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  providers: [PrismaService, ...productCommandHandlers],
})
export class ProductModule {}
