import { Controller, Post, Body } from '@nestjs/common';
import { ConvertOutputService } from './convert-output.service';

@Controller('convert-output')
export class ConvertOutputController {
  constructor(private readonly convertOutputService: ConvertOutputService) {}

  @Post()
  convert(@Body() data: {
    serial_number: number;
    v_min: number;
    v_max: number;
  }) {
    return this.convertOutputService.convert(data);
  }
}