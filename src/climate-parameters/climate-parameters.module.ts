import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { weather } from '../model/weather.entity';
import { ClimateParametersController } from './climate-parameters.controller';
import { ClimateParametersService } from './climate-parameters.service';

@Module({
  imports: [TypeOrmModule.forFeature([weather ])],
  controllers: [ClimateParametersController],
  providers: [ClimateParametersService]
})
export class ClimateParametersModule {}
