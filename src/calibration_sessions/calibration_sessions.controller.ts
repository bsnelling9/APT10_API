import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CalibrationSessionsService } from './calibration_sessions.service';

@Controller('calibration-sessions')
export class CalibrationSessionsController {
  constructor(private readonly calibrationSessionsService: CalibrationSessionsService) {}

  @Post()
  create(@Body() data: {
    session_id?: number;
    serial_number: number;
    timestamp?: Date | string;
    p_cntrlr_sn?: string;
    dmm_sn?: string;
    pressure_code?: string;
    calibration_units?: string;
    dac_test_codes?: string;
  }) {
    return this.calibrationSessionsService.create(data);
  }

  @Get()
  findAll() {
    return this.calibrationSessionsService.findAll();
  }

  @Get(':serial_number')
  findBySerialNumber(@Param('serial_number') serial_number: string) {
    return this.calibrationSessionsService.findBySerialNumber(+serial_number);
  }
}