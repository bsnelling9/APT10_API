import { Module } from '@nestjs/common';
import { TransducerController } from './transducer.controller';
import { TransducerService } from './transducer.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TransducerController],
  providers: [TransducerService, PrismaService],
})
export class TransducerModule {}