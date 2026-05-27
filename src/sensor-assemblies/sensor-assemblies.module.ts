import { Module } from '@nestjs/common';
import { SensorAssembliesController } from './sensor-assemblies.controller';
import { SensorAssembliesService } from './sensor-assemblies.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SensorAssembliesController],
  providers: [SensorAssembliesService, PrismaService],
})
export class SensorAssembliesModule {}