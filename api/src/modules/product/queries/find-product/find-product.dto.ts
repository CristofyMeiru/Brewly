import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class FindProductParamsDto {
  @ApiProperty({
    description: 'Product unique identifier (UUID v7)',
    example: '018f47a3-6c4d-7b12-9f4e-8c2d7e6a1234',
  })
  @IsUUID('7')
  id: string;
}
