import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { StockCodesService } from './stock_codes.service';

@Controller('stock-codes')
export class StockCodesController {
  constructor(private readonly stockCodesService: StockCodesService) {}

  @Post()
  create(@Body() data: {
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
    return this.stockCodesService.create(data);
  }

  @Get()
  findAll() {
    return this.stockCodesService.findAll();
  }

  @Get(':stock_code')
  findByStockCode(@Param('stock_code') stock_code: string) {
    return this.stockCodesService.findByStockCode(stock_code);
  }

  @Patch(':stock_code')
  update(
    @Param('stock_code') stock_code: string,
    @Body() data: {
      output_type?: string;
      output_min?: number;
      output_max?: number;
      pressure_reference?: string;
      pressure_units?: string;
      pressure_min?: number;
      pressure_max?: number;
      pressure_code?: string;
      accuracy?: string;
    },
  ) {
    return this.stockCodesService.update(stock_code, data);
  }

  @Delete(':stock_code')
  remove(@Param('stock_code') stock_code: string) {
    return this.stockCodesService.remove(stock_code);
  }
}