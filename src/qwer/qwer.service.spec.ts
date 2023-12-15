import { Test, TestingModule } from '@nestjs/testing';
import { QwerService } from './qwer.service';

describe('QwerService', () => {
  let service: QwerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QwerService],
    }).compile();

    service = module.get<QwerService>(QwerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
