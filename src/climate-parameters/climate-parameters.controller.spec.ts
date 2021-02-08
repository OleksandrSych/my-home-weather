import { Test, TestingModule } from '@nestjs/testing';
import { ClimateParametersController } from './climate-parameters.controller';

describe('ClimateParametersController', () => {
  let controller: ClimateParametersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClimateParametersController],
    }).compile();

    controller = module.get<ClimateParametersController>(ClimateParametersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
