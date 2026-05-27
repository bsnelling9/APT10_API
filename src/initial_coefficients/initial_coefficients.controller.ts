import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { InitialCoefficientsService } from './initial_coefficients.service';

@Controller('initial-coefficients')
export class InitialCoefficientsController {
  constructor(private readonly initialCoefficientsService: InitialCoefficientsService) {}

  @Post()
  create(@Body() data: {
    session_id: number;
    serial_number: number;
    h0?: number; h1?: number; h2?: number; h3?: number;
    g0?: number; g1?: number; g2?: number; g3?: number;
    m0?: number; m1?: number; m2?: number; m3?: number;
    n0?: number; n1?: number; n2?: number; n3?: number;
    padc_gain?: number;
    tadc_gain?: number;
    padc_offset?: number;
    tadc_offset?: number;
  }) {
    return this.initialCoefficientsService.create(data);
  }

  @Get()
  findAll() {
    return this.initialCoefficientsService.findAll();
  }

  @Get(':session_id/:serial_number')
  findBySession(
    @Param('session_id') session_id: string,
    @Param('serial_number') serial_number: string,
  ) {
    return this.initialCoefficientsService.findBySession(+session_id, +serial_number);
  }
}