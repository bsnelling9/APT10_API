import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CalibrationAdcDataService } from './calibration_adc_data.service';

@Controller('calibration-adc-data')
export class CalibrationAdcDataController {
  constructor(private readonly calibrationAdcDataService: CalibrationAdcDataService) {}

  @Post()
  create(@Body() data: {
    session_id: number;
    serial_number: number;
    temperature_index: number;
    pressure_index: number;
    temperature_value?: number;
    temperature_adc?: number;
    pressure_value?: number;
    pressure_adc?: number;
  }) {
    return this.calibrationAdcDataService.create(data);
  }

  @Get()
  findAll() {
    return this.calibrationAdcDataService.findAll();
  }

  @Get(':session_id/:serial_number')
  findBySession(
    @Param('session_id') session_id: string,
    @Param('serial_number') serial_number: string,
  ) {
    return this.calibrationAdcDataService.findBySession(+session_id, +serial_number);
  }
}