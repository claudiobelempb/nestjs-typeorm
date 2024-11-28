import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { applyGloboConfig } from './GlobalConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  applyGloboConfig(app);
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
