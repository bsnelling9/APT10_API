import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { spawn } from 'child_process';

@Injectable()
export class ConvertOutputService {
  constructor(private prisma: PrismaService) {}

  async convert(data: { serial_number: number; v_min: number; v_max: number }) {
    const session = await this.prisma.calibration_sessions.findFirst({
      where: { serial_number: data.serial_number },
      orderBy: { timestamp: 'desc' },
    });
    if (!session) throw new Error('No calibration session found for serial number');

    const adcData = await this.prisma.calibration_adc_data.findMany({
      where: { session_id: session.session_id, serial_number: data.serial_number },
    });
    const dacData = await this.prisma.calibration_dac_data.findMany({
      where: { session_id: session.session_id, serial_number: data.serial_number },
    });

    const pythonInput = {
      adc_data: adcData,
      dac_data: dacData,
      v_min: data.v_min,
      v_max: data.v_max,
    };

    const coefficients = await this.runPython(pythonInput);

    return {
      session_id: session.session_id,
      serial_number: data.serial_number,
      ...coefficients,
    };
  }

  private runPython(input: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const proccess = spawn('python', ['M:\\Anfield Sensors\\Engineering\\Software\\Thin_Film\\PGA3-5_Convert_Output\\convert_output.py']);
      let stdout = '';
      let stderr = '';

      proccess.stdout.on('data', (chunk) => (stdout += chunk));
      proccess.stderr.on('data', (chunk) => (stderr += chunk));

      proccess.on('close', (code) => {
        if (code !== 0) return reject(new Error(`Python exited ${code}: ${stderr}`));
        try {
          resolve(JSON.parse(stdout));
        } catch (e) {
          reject(new Error(`Failed to parse Python output: ${stdout}`));
        }
      });

      proccess.stdin.write(JSON.stringify(input));
      proccess.stdin.end();
    });
  }
}