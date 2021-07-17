import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NodesModule } from './nodes/nodes.module';
import { GardensModule } from './gardens/gardens.module';
import { DataModule } from './data/data.module';
import { Garden } from './gardens/entities/garden.entity';
import { Node } from './nodes/entities/node.entity';
import { User } from './users/entities/user.entity';
import { PlantsModule } from './plants/plants.module';
import { Plant } from './plants/entities/plant.entity';
import { Datum } from './data/entities/datum.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    NodesModule,
    GardensModule,
    DataModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.AWS_RDS_HOST,
      port: 3306,
      username: process.env.AWS_RDS_USERNAME,
      password: process.env.AWS_RDS_PASSWORD,
      database: process.env.AWS_RDS_DATABASE,
      entities: [User, Garden, Node, Plant, Datum],
      synchronize: true,
    }),
    PlantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
