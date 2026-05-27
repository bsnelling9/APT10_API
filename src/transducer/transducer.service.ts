import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransducerService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    stock_code: string;
    serial_number: number;
    electrical_output?: string;
    pressure_range?: string;
    output_configuration?: string;
    final_cal_timestamp?: Date;
    model_number?: string;
  }) {
    return this.prisma.transducer.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.transducer.findMany();
  }

  async findByStockCode(stock_code: string) {
    return this.prisma.transducer.findMany({
      where: { stock_code },
    });
  }

  async findOne(stock_code: string, serial_number: number) {
    return this.prisma.transducer.findUnique({
      where: {
        stock_code_serial_number: { stock_code, serial_number },
      },
    });
  }
}