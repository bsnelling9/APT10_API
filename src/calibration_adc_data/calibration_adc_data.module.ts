import { Module } from '@nestjs/common';
import { CalibrationAdcDataController } from './calibration_adc_data.controller';
import { CalibrationAdcDataService } from './calibration_adc_data.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CalibrationAdcDataController],
  providers: [CalibrationAdcDataService, PrismaService],
})
export class CalibrationAdcDataModule {}