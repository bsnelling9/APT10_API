import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CalibrationDacDataService } from './calibration_dac_data.service';

@Controller('calibration-dac-data')
export class CalibrationDacDataController {
  constructor(private readonly calibrationDacDataService: CalibrationDacDataService) {}

  @Post()
  create(@Body() data: {
    session_id: number;
    serial_number: number;
    temperature_index: number;
    dac_point_index: number;
    dac_output_code?: number;
    dmm_voltage?: number;
  }) {
    return this.calibrationDacDataService.create(data);
  }

  @Get()
  findAll() {
    return this.calibrationDacDataService.findAll();
  }

  @Get(':session_id/:serial_number')
  findBySession(
    @Param('session_id') session_id: string,
    @Param('serial_number') serial_number: string,
  ) {
    return this.calibrationDacDataService.findBySession(+session_id, +serial_number);
  }
}