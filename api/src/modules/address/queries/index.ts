import { FindAddressHandler } from './find-address/find-address.handler';
import { FindAddressByUserHandler } from './find-by-user/find-by-user.handler';

export const addressQueryHandlers = [FindAddressHandler, FindAddressByUserHandler];
