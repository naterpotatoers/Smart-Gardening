import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NodesModule } from './nodes/nodes.module';
import { GardensModule } from './gardens/gardens.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, NodesModule, GardensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
