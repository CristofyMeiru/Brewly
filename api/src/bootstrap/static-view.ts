import fastifyMultipart from '@fastify/multipart';
import { fastifyStatic } from '@fastify/static';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { join } from 'path';

export function setupStaticView(app: NestFastifyApplication) {
  app.register(fastifyMultipart);

  app.register(fastifyStatic, {
    root: join(process.cwd(), 'uploads'),
    prefix: '/public/',
  });
}
