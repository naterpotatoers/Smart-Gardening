import { Module } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { NodesController } from './nodes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Node } from './entities/node.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Node])],
  exports: [TypeOrmModule],
  controllers: [NodesController],
  providers: [NodesService],
})
export class NodesModule {}
