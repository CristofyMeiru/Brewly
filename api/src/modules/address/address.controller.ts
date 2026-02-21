import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AddressEntity } from '@src/common/entities/address.entity';
import { plainToClass } from 'class-transformer';
import type { UserSession } from '../auth/auth.guard';
import { Session } from '../auth/decorators/auth.decorators';
import { CreateAddressCommand } from './commands/create-address/create-address.command';
import { CreateAddressBodyDto } from './commands/create-address/create-address.dto';
import { FindAddressParamsDto } from './queries/find-address/find-address.dto';
import { FindAddressQuery } from './queries/find-address/find-address.query';

@Controller({ path: 'addresses', version: '1' })
export class AddressController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @ApiCreatedResponse({ type: AddressEntity })
  @Post()
  create(@Body() body: CreateAddressBodyDto, @Session() session: UserSession) {
    const command = plainToClass(CreateAddressCommand, { ...body, userId: session.user.id });
    return this.commandBus.execute(command);
  }

  @ApiOkResponse({ type: AddressEntity })
  @Get(':id')
  findById(@Param() params: FindAddressParamsDto) {
    const query = plainToClass(FindAddressQuery, params);
    return this.queryBus.execute(query);
  }
}
