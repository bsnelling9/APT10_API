import { Test, TestingModule } from '@nestjs/testing';
import { CalibrationDacDataService } from './calibration_dac_data.service';

describe('CalibrationDacDataService', () => {
  let service: CalibrationDacDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalibrationDacDataService],
    }).compile();

    service = module.get<CalibrationDacDataService>(CalibrationDacDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
