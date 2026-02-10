import { NestFastifyApplication } from '@nestjs/platform-fastify';

export function setupCors(app: NestFastifyApplication) {
  app.enableCors();
}
