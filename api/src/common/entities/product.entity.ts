import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductEntity {
  @ApiProperty({
    example: '018f7c7a-3c7b-7c3d-b1a2-9f3e8a6f4c21',
    description: 'Identificador único do produto',
  })
  id: string;

  @ApiProperty({
    example: 'Latte',
    description: 'Nome do produto',
  })
  name: string;

  @ApiPropertyOptional({
    example: 'Café expresso com leite vaporizado',
    description: 'Descrição opcional do produto',
  })
  description?: string;

  @ApiProperty({
    example: 12.9,
    description: 'Preço do produto',
    type: Number,
  })
  price: number;

  @ApiPropertyOptional({
    example: 'https://cdn.brewly.com/products/latte.png',
    description: 'URL da imagem do produto',
  })
  image?: string;

  @ApiProperty({
    example: true,
    description: 'Indica se o produto está ativo no cardápio',
  })
  isActive: boolean;

  @ApiProperty({
    example: '2024-01-01T12:00:00.000Z',
    description: 'Data de criação do produto',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-01-02T12:00:00.000Z',
    description: 'Data da última atualização',
  })
  updatedAt: Date;
}
