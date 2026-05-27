import { Test, TestingModule } from '@nestjs/testing';
import { CalibrationDacDataController } from './calibration_dac_data.controller';

describe('CalibrationDacDataController', () => {
  let controller: CalibrationDacDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalibrationDacDataController],
    }).compile();

    controller = module.get<CalibrationDacDataController>(CalibrationDacDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
