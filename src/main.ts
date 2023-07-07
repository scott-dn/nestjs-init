import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(RootModule);

  SwaggerModule.setup(
    '/api',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Demo Service')
        .setDescription('Demo Service API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build()
    )
  );

  await app.listen(5000);
}

bootstrap().catch(error => {
  throw error;
});
