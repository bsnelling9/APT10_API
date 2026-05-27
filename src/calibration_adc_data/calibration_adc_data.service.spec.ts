import { Test, TestingModule } from '@nestjs/testing';
import { CalibrationAdcDataService } from './calibration_adc_data.service';

describe('CalibrationAdcDataService', () => {
  let service: CalibrationAdcDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalibrationAdcDataService],
    }).compile();

    service = module.get<CalibrationAdcDataService>(CalibrationAdcDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
