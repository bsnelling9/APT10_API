import { Module } from '@nestjs/common';
import { CalibrationSessionsController } from './calibration_sessions.controller';
import { CalibrationSessionsService } from './calibration_sessions.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CalibrationSessionsController],
  providers: [CalibrationSessionsService, PrismaService],
})
export class CalibrationSessionsModule {}