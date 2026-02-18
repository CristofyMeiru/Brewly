import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateAddressBodyDto {
  @ApiProperty({
    example: 'Rua das Flores',
    description: 'Nome da rua do endereço',
    maxLength: 120,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  street: string;

  @ApiProperty({
    example: '123A',
    description: 'Número do endereço',
    maxLength: 20,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  number: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Cidade do endereço',
    maxLength: 80,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  city: string;

  @ApiProperty({
    example: 'SP',
    description: 'Estado (UF)',
    maxLength: 2,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(2)
  state: string;

  @ApiProperty({
    example: '01234-567',
    description: 'CEP no formato 00000-000',
  })
  @IsString()
  @Matches(/^\d{5}-?\d{3}$/, {
    message: 'zipCode deve estar no formato 00000-000',
  })
  zipCode: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Define se o endereço é o padrão do usuário',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean = false;
}
