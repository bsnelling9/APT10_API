import { Test, TestingModule } from '@nestjs/testing';
import { InitialCoefficientsController } from './initial_coefficients.controller';

describe('InitialCoefficientsController', () => {
  let controller: InitialCoefficientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitialCoefficientsController],
    }).compile();

    controller = module.get<InitialCoefficientsController>(InitialCoefficientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
