import { NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Product } from '@src/generated/prisma/client';
import { PrismaService } from '@src/shared/services/prisma.service';
import { UploadService } from '@src/shared/services/upload.service';
import { UploadProductImageCommand } from './upload-product-image.command';

@CommandHandler(UploadProductImageCommand)
export class UploadProductImageHandler implements ICommandHandler<UploadProductImageCommand> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly upload: UploadService,
  ) {}

  async execute(command: UploadProductImageCommand): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id: command.id },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    const oldImage = product.image;

    const newImage = await this.upload.saveFile(command.image);

    const updatedProduct = await this.prisma.product.update({
      where: { id: command.id },
      data: { image: newImage.filename },
    });

    if (oldImage) {
      await this.upload.deleteFile(oldImage);
    }

    return updatedProduct;
  }
}
