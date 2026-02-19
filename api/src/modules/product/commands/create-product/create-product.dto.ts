import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateProductBodyDto {
  @ApiProperty({
    example: 'Latte',
    description: 'Nome do produto',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: 'Café expresso com leite vaporizado',
    description: 'Descrição do produto',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 12.9,
    description: 'Preço do produto',
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiPropertyOptional({
    example: 'https://cdn.brewly.com/products/latte.png',
    description: 'URL da imagem do produto',
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Define se o produto está ativo',
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
