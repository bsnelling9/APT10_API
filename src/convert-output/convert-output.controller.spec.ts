import { Test, TestingModule } from '@nestjs/testing';
import { ConvertOutputController } from './convert-output.controller';
import { ConvertOutputService } from './convert-output.service';

describe('ConvertOutputController', () => {
  let controller: ConvertOutputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertOutputController],
      providers: [ConvertOutputService],
    }).compile();

    controller = module.get<ConvertOutputController>(ConvertOutputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
