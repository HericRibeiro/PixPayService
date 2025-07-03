import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  const frontendUrl = configService.get<string>('FRONTEND_URL') || '*';

  app.enableCors({
    origin: frontendUrl,
    credentials: true,
  });

  await app.listen(port);
  console.log(`🚀 Backend com TypeScript rodando em http://localhost:${port}`);
}
bootstrap();
