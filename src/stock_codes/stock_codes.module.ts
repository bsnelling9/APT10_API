import { Module } from '@nestjs/common';
import { StockCodesController } from './stock_codes.controller';
import { StockCodesService } from './stock_codes.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [StockCodesController],
  providers: [StockCodesService, PrismaService],
})
export class StockCodesModule {}