import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('address')
@Controller({ path: 'user' })
export class UserAddressController {
  constructor(
      private readonly commandBus: CommandBus,
      private readonly queryBus: QueryBus,
    ) {}
  
    
    
}
