import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SensorAssembliesService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    sensor_serial_number?: string;
    pressure_code?: string;
  }) {
    return this.prisma.sensor_assemblies.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.sensor_assemblies.findMany();
  }

  async findOne(serial_number: number) {
    return this.prisma.sensor_assemblies.findUnique({
      where: { serial_number },
    });
  }

  async update(serial_number: number, data: {
    stock_code?: string;
    calibration_config_file?: string;
    ram_config_file?: string;
  }) {
    return this.prisma.sensor_assemblies.update({
      where: { serial_number },
      data,
    });
  }
}