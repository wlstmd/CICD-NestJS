import { Test, TestingModule } from '@nestjs/testing';
import { CicdController } from './cicd.controller';

describe('CicdController', () => {
  let controller: CicdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CicdController],
    }).compile();

    controller = module.get<CicdController>(CicdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
