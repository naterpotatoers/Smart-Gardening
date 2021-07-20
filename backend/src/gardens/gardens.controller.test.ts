import { Test, TestingModule } from '@nestjs/testing';
import { GardensController } from './gardens.controller';
import { GardensService } from './gardens.service';

describe('GardensController', () => {
  let controller: GardensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GardensController],
      providers: [GardensService],
    }).compile();

    controller = module.get<GardensController>(GardensController);
  });

  it.skip('should be defined', () => {});
});
