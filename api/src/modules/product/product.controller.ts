import { Body, Controller, Get, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Storage } from '@src/@types/global';
import { SIZE_MB } from '@src/common/constants/size.constants';
import { ApiFile, Files } from '@src/common/decorators/files.decorator';
import { ProductEntity } from '@src/common/entities/product.entity';
import { MultipartInterceptor } from '@src/common/interceptors/files.interceptor';
import { plainToClass } from 'class-transformer';
import { Permissions } from '../auth/permissions.decorator';
import { CreateProductCommand } from './commands/create-product/create-product.command';
import { CreateProductBodyDto } from './commands/create-product/create-product.dto';
import { UploadProductImageCommand } from './commands/upload-product-image/upload-product-image.command';
import { UploadProductImageParamsDto } from './commands/upload-product-image/upload-product-image.dto';
import { FindProductParamsDto } from './queries/find-product/find-product.dto';
import { FindProductQuery } from './queries/find-product/find-product.query';
import { FindProductsQueryDto } from './queries/find-products/find-products.dto';
import { FindProductsQuery } from './queries/find-products/find-products.query';

@Controller({ path: 'products', version: '1' })
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

  @Permissions({ scope: 'admin', resource: 'product', action: ['update'] })
  @UseInterceptors(MultipartInterceptor({ fileType: /\/(jpg|jpeg|png)$/, maxFileSize: SIZE_MB * 2 }))
  @ApiOkResponse({ type: ProductEntity })
  @ApiFile('file')
  @Post(':id/image')
  uploadImage(@Files() { file }: Record<string, Storage.MultipartFile>, @Param() params: UploadProductImageParamsDto) {
    const command = plainToClass(UploadProductImageCommand, { image: file[0], ...params });
    return this.commandBus.execute(command);
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductEntity })
  findOne(@Param() params: FindProductParamsDto) {
    const query = plainToClass(FindProductQuery, params);
    return this.queryBus.execute(query);
  }

  @ApiOkResponse({ type: [ProductEntity] })
  @Get()
  find(@Query() queryString: FindProductsQueryDto) {
    const query = plainToClass(FindProductsQuery, queryString);
    return this.queryBus.execute(query);
  }
}
