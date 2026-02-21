import { InternalServerErrorException } from '@nestjs/common';
import { Storage } from '@src/@types/global';
import { unlink, writeFile } from 'fs/promises';
import { join } from 'path';

export class UploadService {
  private readonly uploadPath = join(process.cwd(), 'uploads');

  async saveFile(file: Storage.MultipartFile, opt?: { filename?: string }) {
    const filename = opt?.filename ?? file.filename;
    console.log("cu",file.filename);
    const path = join(this.uploadPath, filename);

    await writeFile(path, file.buffer);

    return { filename, path, mimetype: file.mimetype };
  }

  async deleteFile(filename: string) {
    const path = join(this.uploadPath, filename);
    try {
      await unlink(path);
    } catch (error) {
      throw new InternalServerErrorException('Não foi possível deletar o arquivo.');
    }
  }
}
