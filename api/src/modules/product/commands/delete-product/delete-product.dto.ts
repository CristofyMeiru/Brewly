import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class DeleteProductParamsDto {
  @ApiProperty({
    description: 'ID único do produto',
    example: 'b7f3c2a4-8f1e-4e6c-9a2f-1c0d2e3f4a5b',
  })
  @IsUUID('7')
  id: string;
}
