import { Module } from '@nestjs/common';
import { ConvertOutputService } from './convert-output.service';
import { ConvertOutputController } from './convert-output.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ConvertOutputController],
  providers: [ConvertOutputService, PrismaService],
})
export class ConvertOutputModule {}
