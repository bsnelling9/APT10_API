import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CalibrationDacDataService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    session_id: number;
    serial_number: number;
    temperature_index: number;
    dac_point_index: number;
    dac_output_code?: number;
    dmm_voltage?: number;
  }) {
    return this.prisma.calibration_dac_data.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.calibration_dac_data.findMany();
  }

  async findBySession(session_id: number, serial_number: number) {
    return this.prisma.calibration_dac_data.findMany({
      where: { session_id, serial_number },
    });
  }
}