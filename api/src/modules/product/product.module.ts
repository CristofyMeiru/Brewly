import { Module } from '@nestjs/common';
import { PrismaService } from '@src/shared/services/prisma.service';
import { UploadService } from '@src/shared/services/upload.service';
import { productCommandHandlers } from './commands';
import { ProductController } from './product.controller';
import { productQueryHandlers } from './queries';

@Module({
  controllers: [ProductController],
  providers: [PrismaService, UploadService, ...productCommandHandlers, ...productQueryHandlers],
})
export class ProductModule {}
