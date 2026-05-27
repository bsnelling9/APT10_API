import { Test, TestingModule } from '@nestjs/testing';
import { TransducerController } from './transducer.controller';

describe('TransducerController', () => {
  let controller: TransducerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransducerController],
    }).compile();

    controller = module.get<TransducerController>(TransducerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
