import { Test, TestingModule } from '@nestjs/testing';
import { TransducerService } from './transducer.service';

describe('TransducerService', () => {
  let service: TransducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransducerService],
    }).compile();

    service = module.get<TransducerService>(TransducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
