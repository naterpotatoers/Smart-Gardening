import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';
import { NodesModule } from './nodes/nodes.module';
import { GardensModule } from './gardens/gardens.module';
import { PlantsModule } from './plants/plants.module';
import { DynamoModule } from './dynamo/dynamo.module';
import { ImageModule } from './image/image.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Smart Gardening API')
    .setDescription('RESTful API documentation for Smart Gardening')
    .setVersion('1.0')
    .build();
  // Add new modules to the include list to have them included in Swagger
  const swagger = SwaggerModule.createDocument(app, config, {
    include: [
      UsersModule,
      NodesModule,
      GardensModule,
      PlantsModule,
      ImageModule,
      DynamoModule,
    ],
  });

  SwaggerModule.setup('/', app, swagger, {
    customSiteTitle: 'Smart Gardening API',
  });

  await app.listen(5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
