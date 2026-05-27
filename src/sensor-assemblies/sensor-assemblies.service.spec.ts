import { Test, TestingModule } from '@nestjs/testing';
import { SensorAssembliesService } from './sensor-assemblies.service';

describe('SensorAssembliesService', () => {
  let service: SensorAssembliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorAssembliesService],
    }).compile();

    service = module.get<SensorAssembliesService>(SensorAssembliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
