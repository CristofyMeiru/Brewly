import { buildApp } from './bootstrap/app';

async function bootstrap() {
  const app = await buildApp();

  await app.listen({ port: Number(process.env.PORT), host: '0.0.0.0' });
}
bootstrap();
