import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';
import { NodesModule } from './nodes/nodes.module';
import { GardensModule } from './gardens/gardens.module';
import { DataModule } from './data/data.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Smart Gardening API')
    .setDescription('RESTful API documentation for Smart Gardening')
    .setVersion('1.0')
    .build();
  // Add new modules to the include list to have them included in Swagger
  const document = SwaggerModule.createDocument(app, config, {
    include: [UsersModule, NodesModule, GardensModule, DataModule],
  });

  SwaggerModule.setup('/', app, document, {
    customSiteTitle: 'Smart Gardening API',
  });

  await app.listen(process.env.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
