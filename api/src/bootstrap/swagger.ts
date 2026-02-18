import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { auth } from '@src/lib/auth';

export function swaggerSetup(app: NestFastifyApplication) {
  const config = new DocumentBuilder()
    .setTitle('Brewly')
    .setDescription('The coffe shop API documentation.')
    .setVersion('1.0')
    .addServer('api')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config, { ignoreGlobalPrefix: true });
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: 'openapi.json',
  });

  
}