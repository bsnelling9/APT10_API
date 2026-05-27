import { Test, TestingModule } from '@nestjs/testing';
import { InitialCoefficientsService } from './initial_coefficients.service';

describe('InitialCoefficientsService', () => {
  let service: InitialCoefficientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitialCoefficientsService],
    }).compile();

    service = module.get<InitialCoefficientsService>(InitialCoefficientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
