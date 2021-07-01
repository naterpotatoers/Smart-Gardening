import { Module } from '@nestjs/common';
import { GardensService } from './gardens.service';
import { GardensController } from './gardens.controller';

@Module({
  controllers: [GardensController],
  providers: [GardensService]
})
export class GardensModule {}
