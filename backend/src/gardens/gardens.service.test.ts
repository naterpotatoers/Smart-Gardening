import { Test, TestingModule } from '@nestjs/testing';
import { GardensService } from './gardens.service';

describe('GardensService', () => {
  let service: GardensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GardensService],
    }).compile();

    service = module.get<GardensService>(GardensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
