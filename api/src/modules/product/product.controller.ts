import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ProductEntity } from '@src/common/entities/product.entity';
import { plainToClass } from 'class-transformer';
import { Permissions } from '../auth/permissions.decorator';
import { CreateProductCommand } from './commands/create-product/create-product.command';
import { CreateProductBodyDto } from './commands/create-product/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Permissions({ scope: 'admin', resource: 'product', action: ['create'] })
  @ApiCreatedResponse({ type: ProductEntity })
  @Post()
  create(@Body() body: CreateProductBodyDto) {
    const command = plainToClass(CreateProductCommand, body);
    return this.commandBus.execute(command);
  }
}
