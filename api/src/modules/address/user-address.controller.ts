import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AddressEntity } from '@src/common/entities/address.entity';
import { plainToClass } from 'class-transformer';
import { FindAddressByUserParamsDto } from './queries/find-by-user/find-by-user.dto';
import { FindAddressByUserQuery } from './queries/find-by-user/find-by-user.query';

@ApiTags('Address')
@Controller({ path: 'user', version: '1' })
export class UserAddressController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiOkResponse({ type: [AddressEntity] })
  @Get(':userId/address')
  findAddressByUser(@Param() params: FindAddressByUserParamsDto) {
    const query = plainToClass(FindAddressByUserQuery, params);
    return this.queryBus.execute(query);
  }
}
