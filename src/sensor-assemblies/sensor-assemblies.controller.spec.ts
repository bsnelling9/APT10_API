import { Test, TestingModule } from '@nestjs/testing';
import { SensorAssembliesController } from './sensor-assemblies.controller';

describe('SensorAssembliesController', () => {
  let controller: SensorAssembliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorAssembliesController],
    }).compile();

    controller = module.get<SensorAssembliesController>(SensorAssembliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
