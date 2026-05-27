import { Module } from '@nestjs/common';
import { InitialCoefficientsController } from './initial_coefficients.controller';
import { InitialCoefficientsService } from './initial_coefficients.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [InitialCoefficientsController],
  providers: [InitialCoefficientsService, PrismaService],
})
export class InitialCoefficientsModule {}