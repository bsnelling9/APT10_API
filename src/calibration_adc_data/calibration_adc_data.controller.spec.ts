import { Test, TestingModule } from '@nestjs/testing';
import { CalibrationAdcDataController } from './calibration_adc_data.controller';

describe('CalibrationAdcDataController', () => {
  let controller: CalibrationAdcDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalibrationAdcDataController],
    }).compile();

    controller = module.get<CalibrationAdcDataController>(CalibrationAdcDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
