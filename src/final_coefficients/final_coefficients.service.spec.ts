import { Test, TestingModule } from '@nestjs/testing';
import { FinalCoefficientsService } from './final_coefficients.service';

describe('FinalCoefficientsService', () => {
  let service: FinalCoefficientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinalCoefficientsService],
    }).compile();

    service = module.get<FinalCoefficientsService>(FinalCoefficientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
