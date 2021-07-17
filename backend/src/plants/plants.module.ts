import { Module } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantsController } from './plants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plant])],
  exports: [TypeOrmModule],
  controllers: [PlantsController],
  providers: [PlantsService],
})
export class PlantsModule {}
