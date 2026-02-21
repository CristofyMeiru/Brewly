import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from '../app.module';
import { setupCors } from './cors';
import { setupGlobalPipes } from './pipes';
import { setupScalar } from './scalar';
import { setupStaticView } from './static-view';
import { swaggerSetup } from './swagger';

export async function bootstrapApp(): Promise<NestFastifyApplication> {
  const NODE_ENV = process.env.NODE_ENV;

  const adapter = new FastifyAdapter({ bodyLimit: 1024 * 1024 * 5 /* 5 Mb */ });

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter, {
    bodyParser: false,
  });

  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });
  setupCors(app);
  setupGlobalPipes(app);
  setupStaticView(app);
  if (NODE_ENV == 'development') {
    swaggerSetup(app);
    setupScalar(app);
  }

  // if (NODE_ENV == 'production') {
  //   app.useLogger(app.get(CustomLogger));
  // }

  return app;
}
