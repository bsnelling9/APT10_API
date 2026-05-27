import { Test, TestingModule } from '@nestjs/testing';
import { CalibrationSessionsService } from './calibration_sessions.service';

describe('CalibrationSessionsService', () => {
  let service: CalibrationSessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalibrationSessionsService],
    }).compile();

    service = module.get<CalibrationSessionsService>(CalibrationSessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
