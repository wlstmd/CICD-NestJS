import { Test, TestingModule } from '@nestjs/testing';
import { CicdService } from './cicd.service';

describe('CicdService', () => {
  let service: CicdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CicdService],
    }).compile();

    service = module.get<CicdService>(CicdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
