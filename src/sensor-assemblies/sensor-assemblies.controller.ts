import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { SensorAssembliesService } from './sensor-assemblies.service';

@Controller('sensor-assemblies')
export class SensorAssembliesController {
  constructor(private readonly sensorAssembliesService: SensorAssembliesService) {}

  @Post()
  create(@Body() data: { sensor_serial_number?: string; pressure_code?: string }) {
    return this.sensorAssembliesService.create(data);
  }

  @Get()
  findAll() {
    return this.sensorAssembliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensorAssembliesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: { stock_code?: string; calibration_config_file?: string; ram_config_file?: string }) {
    return this.sensorAssembliesService.update(+id, data);
  }
}