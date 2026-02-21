import { Command } from '@nestjs/cqrs';
import { Storage } from '@src/@types/global';
import { Product } from '@src/generated/prisma/client';

export class UploadProductImageCommand extends Command<Product> {
  constructor(
    public readonly id: string,
    public readonly image: Storage.MultipartFile,
  ) {
    super();
  }
}
