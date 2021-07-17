import { Module } from '@nestjs/common';
import { GardensService } from './gardens.service';
import { GardensController } from './gardens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Garden } from './entities/garden.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Garden])],
  exports: [TypeOrmModule],
  controllers: [GardensController],
  providers: [GardensService],
})
export class GardensModule {}
