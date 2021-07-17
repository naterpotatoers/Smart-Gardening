import { Test, TestingModule } from '@nestjs/testing';
import { DataController } from './data.controller';
import { DataService } from './data.service';

describe('DataController', () => {
  let controller: DataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataController],
      providers: [DataService],
    }).compile();

    controller = module.get<DataController>(DataController);
  });

  it.skip('should be defined', () => {});
});
