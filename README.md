# APT10 API

REST API for the APT10 thin film pressure sensor calibration database.

## Description

NestJS TypeScript API that handles all database communication for the APT10 calibration system. Built with NestJS, Prisma and PostgreSQL.

## Setup

```bash
npm install
```

Create a `.env` file in the root with:

## Running the API

```bash
# development
npm run start

# watch mode
npm run start:dev
```

## Endpoints

### sensor_assemblies
- `POST /sensor-assemblies` — create a new unit
- `GET /sensor-assemblies` — get all units
- `GET /sensor-assemblies/:id` — get one unit by serial number
- `PATCH /sensor-assemblies/:id` — update a unit

### calibration_sessions
- `POST /calibration-sessions` — create a new session
- `GET /calibration-sessions` — get all sessions
- `GET /calibration-sessions/:serial_number` — get all sessions for a unit

### calibration_adc_data
- `POST /calibration-adc-data` — create a new ADC data point
- `GET /calibration-adc-data` — get all ADC data
- `GET /calibration-adc-data/:session_id/:serial_number` — get all ADC data for a session

### calibration_dac_data
- `POST /calibration-dac-data` — create a new DAC data point
- `GET /calibration-dac-data` — get all DAC data
- `GET /calibration-dac-data/:session_id/:serial_number` — get all DAC data for a session

### initial_coefficients
- `POST /initial-coefficients` — create new coefficients
- `GET /initial-coefficients` — get all coefficients
- `GET /initial-coefficients/:session_id/:serial_number` — get coefficients for a session

### transducer
- `POST /transducer` — create a new transducer record
- `GET /transducer` — get all transducers
- `GET /transducer/:stock_code` — get all transducers by stock code
- `GET /transducer/:stock_code/:serial_number` — get one transducer

### final_coefficients
- `POST /final-coefficients` — create final coefficients
- `GET /final-coefficients` — get all final coefficients
- `GET /final-coefficients/:session_id/:serial_number` — get final coefficients for a session
- `GET /final-coefficients/stock/:stock_code` — get all final coefficients for a stock code

## Database

PostgreSQL database named APT10 with 7 tables:
- `sensor_assemblies`
- `transducer`
- `calibration_sessions`
- `calibration_adc_data`
- `calibration_dac_data`
- `initial_coefficients`
- `final_coefficients`

## Tech Stack
- NestJS
- TypeScript
- Prisma
- PostgreSQL