import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StockCodesService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    stock_code: string;
    output_type: string;
    output_min: number;
    output_max: number;
    pressure_reference?: string;
    pressure_units: string;
    pressure_min: number;
    pressure_max: number;
    pressure_code?: string;
    accuracy?: string;
  }) {
    return this.prisma.stock_codes.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.stock_codes.findMany();
  }

  async findByStockCode(stock_code: string) {
    return this.prisma.stock_codes.findUnique({
      where: { stock_code },
    });
  }

  async update(stock_code: string, data: {
    output_type?: string;
    output_min?: number;
    output_max?: number;
    pressure_reference?: string;
    pressure_units?: string;
    pressure_min?: number;
    pressure_max?: number;
    pressure_code?: string;
    accuracy?: string;
  }) {
    return this.prisma.stock_codes.update({
      where: { stock_code },
      data,
    });
  }

  async remove(stock_code: string) {
    return this.prisma.stock_codes.delete({
      where: { stock_code },
    });
  }
}