import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class FindAddressByUserParamsDto {
  @ApiProperty({
    description: 'Unique identifier of the address',
    example: '018f3e7a-6c2b-7f5a-b8b1-9f3a2e6d4c10',
    format: 'uuid',
  })
  @IsUUID('7')
  readonly userId: string;
}
