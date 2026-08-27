import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { spawn } from 'child_process';
import * as fs from 'fs';

export const OUTPUT_TYPES = ['ratiometric', 'voltage', 'current'] as const;
export type OutputType = (typeof OUTPUT_TYPES)[number];

export interface ConvertOutputRequest {
  serial_number: number;
  output_type: string;
  out_min: number;
  out_max: number;
  p_min: number;
  p_max: number;
  pressure_unit: string;
}

@Injectable()
export class ConvertOutputService {
  constructor(private prisma: PrismaService) {}

  async convert(data: ConvertOutputRequest) {
    const outputType = String(data.output_type ?? '').trim().toLowerCase();

    if (!OUTPUT_TYPES.includes(outputType as OutputType)) {
      throw new BadRequestException(
        `output_type must be one of ${OUTPUT_TYPES.join(', ')}, got '${data.output_type}'`,
      );
    }

    if (!(data.out_max > data.out_min)) {
      throw new BadRequestException(
        `out_max (${data.out_max}) must be greater than out_min (${data.out_min})`,
      );
    }

    const session = await this.prisma.calibration_sessions.findFirst({
      where: { serial_number: data.serial_number },
      orderBy: { session_id: 'desc' },
    });

    if (!session) {
      throw new NotFoundException(
        `No calibration session found for serial number ${data.serial_number}`,
      );
    }

    const adcData = await this.prisma.calibration_adc_data.findMany({
      where: { session_id: session.session_id, serial_number: data.serial_number },
    });

    if (adcData.length === 0) {
      throw new NotFoundException(
        `No ADC data for session ${session.session_id}, serial number ${data.serial_number}`,
      );
    }

    const dacData = await this.prisma.calibration_dac_data.findMany({
      where: { session_id: session.session_id, serial_number: data.serial_number },
    });

    if (dacData.length === 0 && outputType !== 'current') {
      throw new NotFoundException(
        `No DAC data for session ${session.session_id}, serial number ${data.serial_number}`,
      );
    }

    const pythonInput = {
      adc_data: adcData,
      dac_data: dacData,
      output_type: outputType,
      out_min: data.out_min,
      out_max: data.out_max,
      p_min: data.p_min,
      p_max: data.p_max,
      pressure_unit: data.pressure_unit,
      calibration_unit: session.calibration_units,
    };

    const coefficients = await this.runPython(pythonInput);

    return {
      session_id: session.session_id,
      serial_number: data.serial_number,
      output_type: coefficients.output_type,
      coefficients: coefficients.coefficients_hex,
      padc_gain: coefficients.padc_gain,
      tadc_gain: coefficients.tadc_gain,
      padc_offset: coefficients.padc_offset,
      tadc_offset: coefficients.tadc_offset,
    };
  }

  private runPython(input: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptPath = process.env.CONVERT_OUTPUT_SCRIPT_PATH;
      if (!scriptPath) {
        return reject(
          new InternalServerErrorException(
            'CONVERT_OUTPUT_SCRIPT_PATH is not set in environment',
          ),
        );
      }

      let pythonExe = process.env.CONVERT_OUTPUT_PYTHON_PATH;
      if (!pythonExe || !fs.existsSync(pythonExe)) {
        if (pythonExe) {
          console.warn(`CONVERT_OUTPUT_PYTHON_PATH "${pythonExe}" not found — falling back to system "python".`);
        }
        pythonExe = 'python';
      }

      const proccess = spawn(pythonExe, [scriptPath]);

      let stdout = '';
      let stderr = '';

      proccess.stdout.on('data', (chunk) => (stdout += chunk));
      proccess.stderr.on('data', (chunk) => (stderr += chunk));

      proccess.on('error', (err) => {
        reject(
          new InternalServerErrorException(
            `Failed to start Python process: ${err.message}`,
          ),
        );
      });

      proccess.on('close', (code) => {
        if (code !== 0) {
          const message =
            stderr.trim().split('\n').pop()?.trim() || `Python exited ${code}`;

          console.error(`convert-output failed:\n${stderr}`);

          return reject(
            message.startsWith('ValueError')
              ? new BadRequestException(message.replace(/^ValueError:\s*/, ''))
              : new InternalServerErrorException(message),
          );
        }

        try {
          resolve(JSON.parse(stdout));
        } catch (e) {
          reject(
            new InternalServerErrorException(
              `Failed to parse Python output: ${stdout}`,
            ),
          );
        }
      });

      proccess.stdin.write(JSON.stringify(input));
      proccess.stdin.end();
    });
  }
}