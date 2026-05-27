import { Test, TestingModule } from '@nestjs/testing';
import { FinalCoefficientsController } from './final_coefficients.controller';

describe('FinalCoefficientsController', () => {
  let controller: FinalCoefficientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinalCoefficientsController],
    }).compile();

    controller = module.get<FinalCoefficientsController>(FinalCoefficientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
