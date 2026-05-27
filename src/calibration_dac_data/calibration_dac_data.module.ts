import { Module } from '@nestjs/common';
import { CalibrationDacDataController } from './calibration_dac_data.controller';
import { CalibrationDacDataService } from './calibration_dac_data.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CalibrationDacDataController],
  providers: [CalibrationDacDataService, PrismaService],
})
export class CalibrationDacDataModule {}