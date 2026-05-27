import { Module } from '@nestjs/common';
import { FinalCoefficientsController } from './final_coefficients.controller';
import { FinalCoefficientsService } from './final_coefficients.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [FinalCoefficientsController],
  providers: [FinalCoefficientsService, PrismaService],
})
export class FinalCoefficientsModule {}