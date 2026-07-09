import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CalibrationSessionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    session_id?: number;
    serial_number: number;
    timestamp?: Date;
    p_cntrlr_sn?: string;
    dmm_sn?: string;
    pressure_code?: string;
    calibration_units?: string;
    dac_test_codes?: string;
  }) {
    return this.prisma.calibration_sessions.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.calibration_sessions.findMany();
  }

  async findBySerialNumber(serial_number: number) {
    return this.prisma.calibration_sessions.findMany({
      where: { serial_number },
    });
  }
}