import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Datum } from './entities/datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Datum])],
  exports: [TypeOrmModule],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
