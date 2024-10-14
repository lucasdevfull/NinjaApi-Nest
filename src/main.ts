import { config } from 'dotenv';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;
async function bootstrap() {
  const validationPipe = new ValidationPipe();
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('NinjaApi')
  .setDescription('Api for NinjaApp')
  .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    })
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(validationPipe);
    app.enableCors({
      origin: '*',
      credentials: true,
    });

    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
  }
  await app.listen(process.env.PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

config();