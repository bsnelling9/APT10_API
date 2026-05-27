import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FinalCoefficientsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    session_id: number;
    serial_number: number;
    stock_code?: string;
    h0?: number; h1?: number; h2?: number; h3?: number;
    g0?: number; g1?: number; g2?: number; g3?: number;
    m0?: number; m1?: number; m2?: number; m3?: number;
    n0?: number; n1?: number; n2?: number; n3?: number;
    padc_gain?: number;
    tadc_gain?: number;
    padc_offset?: number;
    tadc_offset?: number;
  }) {
    return this.prisma.final_coefficients.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.final_coefficients.findMany();
  }

  async findBySession(session_id: number, serial_number: number) {
    return this.prisma.final_coefficients.findUnique({
      where: {
        session_id_serial_number: { session_id, serial_number },
      },
    });
  }

  async findByStockCode(stock_code: string) {
    return this.prisma.final_coefficients.findMany({
      where: { stock_code },
    });
  }
}