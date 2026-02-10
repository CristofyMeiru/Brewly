import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { validate } from './config-env';
import { AuthModule } from './modules/auth/auth.module';
import { HasPermissionGuard } from './modules/auth/has-permission.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: HasPermissionGuard }],
})
export class AppModule {}
