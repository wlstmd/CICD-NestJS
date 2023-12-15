import { Test, TestingModule } from '@nestjs/testing';
import { QwerController } from './qwer.controller';

describe('QwerController', () => {
  let controller: QwerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QwerController],
    }).compile();

    controller = module.get<QwerController>(QwerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
