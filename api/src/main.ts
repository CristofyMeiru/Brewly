import { buildApp } from './bootstrap/app';

async function bootstrap() {
  const app = await buildApp();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
