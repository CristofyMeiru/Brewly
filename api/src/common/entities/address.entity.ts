import { ApiProperty } from '@nestjs/swagger';

export class AddressEntity {
  @ApiProperty({
    example: '018f7c7a-3c7b-7c3d-b1a2-9f3e8a6f4c21',
    description: 'Identificador único do endereço',
  })
  id: string;

  @ApiProperty({
    example: 'user_abc123',
    description: 'Identificador do usuário proprietário do endereço',
  })
  userId: string;

  @ApiProperty({
    example: 'Rua das Flores',
    description: 'Nome da rua',
  })
  street: string;

  @ApiProperty({
    example: '123A',
    description: 'Número do endereço',
  })
  number: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Cidade',
  })
  city: string;

  @ApiProperty({
    example: 'SP',
    description: 'Estado (UF)',
  })
  state: string;

  @ApiProperty({
    example: '01234-567',
    description: 'CEP no formato 00000-000',
  })
  zipCode: string;

  @ApiProperty({
    example: true,
    description: 'Indica se o endereço é o padrão do usuário',
  })
  isDefault: boolean;

  @ApiProperty({
    example: '2024-01-01T12:00:00.000Z',
    description: 'Data de criação',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-01-02T12:00:00.000Z',
    description: 'Data da última atualização',
  })
  updatedAt: Date;
}
