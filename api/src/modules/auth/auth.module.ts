import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { auth } from '@src/lib/auth';
import { AUTH_PROVIDER } from './auth.constants';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';

@Module({
  providers: [
    {
      provide: AUTH_PROVIDER,
      useValue: auth,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
