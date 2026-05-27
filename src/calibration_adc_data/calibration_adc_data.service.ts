import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CalibrationAdcDataService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    session_id: number;
    serial_number: number;
    temperature_index: number;
    pressure_index: number;
    temperature_value?: number;
    temperature_adc?: number;
    pressure_value?: number;
    pressure_adc?: number;
  }) {
    return this.prisma.calibration_adc_data.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.calibration_adc_data.findMany();
  }

  async findBySession(session_id: number, serial_number: number) {
    return this.prisma.calibration_adc_data.findMany({
      where: { session_id, serial_number },
    });
  }
}