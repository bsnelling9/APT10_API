import { Test, TestingModule } from '@nestjs/testing';
import { CalibrationSessionsController } from './calibration_sessions.controller';

describe('CalibrationSessionsController', () => {
  let controller: CalibrationSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalibrationSessionsController],
    }).compile();

    controller = module.get<CalibrationSessionsController>(CalibrationSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
