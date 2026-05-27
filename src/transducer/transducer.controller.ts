import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TransducerService } from './transducer.service';

@Controller('transducer')
export class TransducerController {
  constructor(private readonly transducerService: TransducerService) {}

  @Post()
  create(@Body() data: {
    stock_code: string;
    serial_number: number;
    electrical_output?: string;
    pressure_range?: string;
    output_configuration?: string;
    final_cal_timestamp?: Date;
    model_number?: string;
  }) {
    return this.transducerService.create(data);
  }

  @Get()
  findAll() {
    return this.transducerService.findAll();
  }

  @Get(':stock_code')
  findByStockCode(@Param('stock_code') stock_code: string) {
    return this.transducerService.findByStockCode(stock_code);
  }

  @Get(':stock_code/:serial_number')
  findOne(
    @Param('stock_code') stock_code: string,
    @Param('serial_number') serial_number: string,
  ) {
    return this.transducerService.findOne(stock_code, +serial_number);
  }
}