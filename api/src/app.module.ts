import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';
import { validate } from './config-env';
import { AddressModule } from './modules/address/address.module';
import { AuthModule } from './modules/auth/auth.module';
import { HasPermissionGuard } from './modules/auth/has-permission.guard';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
    CqrsModule.forRoot(),
    AuthModule,
    AddressModule,
    ProductModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: HasPermissionGuard }],
})
export class AppModule {}
