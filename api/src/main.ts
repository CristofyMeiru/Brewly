import { bootstrapApp } from './bootstrap/app';

async function bootstrap() {
  const app = await bootstrapApp();

  await app.listen({ port: Number(process.env.PORT), host: '0.0.0.0' });
}
bootstrap();
