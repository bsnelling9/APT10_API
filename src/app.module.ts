import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { SensorAssembliesModule } from './sensor-assemblies/sensor-assemblies.module';
import { CalibrationSessionsModule } from './calibration_sessions/calibration_sessions.module';
import { CalibrationAdcDataModule } from './calibration_adc_data/calibration_adc_data.module';
import { CalibrationDacDataModule } from './calibration_dac_data/calibration_dac_data.module';
import { InitialCoefficientsModule } from './initial_coefficients/initial_coefficients.module';
import { TransducerModule } from './transducer/transducer.module';
import { FinalCoefficientsModule } from './final_coefficients/final_coefficients.module';
import { ConvertOutputModule } from './convert-output/convert-output.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SensorAssembliesModule,
    CalibrationSessionsModule,
    CalibrationAdcDataModule,
    CalibrationDacDataModule,
    InitialCoefficientsModule,
    TransducerModule,
    FinalCoefficientsModule,
    ConvertOutputModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}