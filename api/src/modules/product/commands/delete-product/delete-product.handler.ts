import { NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from '@src/shared/services/prisma.service';
import { UploadService } from '@src/shared/services/upload.service';
import { DeleteProductCommand } from './delete-product.command';

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler implements ICommandHandler<DeleteProductCommand> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly upload: UploadService,
  ) {}

  async execute(command: DeleteProductCommand): Promise<void> {
    const product = await this.prisma.product.findUnique({
      where: { id: command.id },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    const image = product.image;

    await this.prisma.product.delete({
      where: { id: command.id },
    });

    if (image) {
      try {
        await this.upload.deleteFile(image);
      } catch (error) {
        console.error('Erro ao deletar imagem:', error);
      }
    }
  }
}
