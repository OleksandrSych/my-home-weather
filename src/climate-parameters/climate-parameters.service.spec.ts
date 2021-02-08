import { Test, TestingModule } from '@nestjs/testing';
import { ClimateParametersService } from './climate-parameters.service';

describe('ClimateParametersService', () => {
  let service: ClimateParametersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimateParametersService],
    }).compile();

    service = module.get<ClimateParametersService>(ClimateParametersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
