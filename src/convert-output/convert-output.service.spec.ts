import { Test, TestingModule } from '@nestjs/testing';
import { ConvertOutputService } from './convert-output.service';

describe('ConvertOutputService', () => {
  let service: ConvertOutputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertOutputService],
    }).compile();

    service = module.get<ConvertOutputService>(ConvertOutputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
