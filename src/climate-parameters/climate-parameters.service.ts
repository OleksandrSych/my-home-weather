import { Injectable } from '@nestjs/common';
import { NewClimateParamsDTO } from './DTO/climateParams.dto';
import { weather } from '../model/weather.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClimateParametersService {
  constructor(
    @InjectRepository(weather) private readonly repo: Repository<weather>,
  ) {}
  async addNewParams(newClimatePatamsDTO: NewClimateParamsDTO) {
    let ww = {
      ...new weather(),
      temperature: newClimatePatamsDTO.t,
      humidity: newClimatePatamsDTO.h,
      ppm: newClimatePatamsDTO.ppm,
      createdBy: 'Alex',
    };

    return await this.repo.insert(ww);
  }
  async getAll(): Promise<weather[]> {
    return await this.repo.find();
  }
}
