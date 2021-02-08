import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClimateParametersService } from './climate-parameters.service';
import { NewClimateParamsDTO } from './DTO/climateParams.dto';

@ApiTags('Climate-parameters')
@Controller('climate-parameters')
export class ClimateParametersController {
  constructor(private readonly climateService: ClimateParametersService) {}
  @Get()
  async findAll() {
    return await this.climateService.getAll();
  }
  @Post()
  async create(@Body() newClimatePatamsDTO: NewClimateParamsDTO) {
    return await this.climateService.addNewParams(newClimatePatamsDTO);
  }
}
