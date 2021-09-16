import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NodesModule } from './nodes/nodes.module';
import { GardensModule } from './gardens/gardens.module';
import { Garden } from './gardens/entities/garden.entity';
import { Node } from './nodes/entities/node.entity';
import { User } from './users/entities/user.entity';
import { PlantsModule } from './plants/plants.module';
import { Plant } from './plants/entities/plant.entity';
import { DynamoModule } from './dynamo/dynamo.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    NodesModule,
    GardensModule,
    PlantsModule,
    DynamoModule,
    DynamooseModule.forRoot({
      aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_DEFAULT_REGION,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.AWS_RDS_HOST,
      port: 3306,
      username: process.env.AWS_RDS_USERNAME,
      password: process.env.AWS_RDS_PASSWORD,
      database: process.env.AWS_RDS_DATABASE,
      entities: [User, Garden, Node, Plant],
      synchronize: true,
    }),
    S3Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
