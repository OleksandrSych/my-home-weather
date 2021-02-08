import { ApiProperty } from '@nestjs/swagger';

export class NewClimateParamsDTO {
  @ApiProperty({
    description: 'The Temperature',
    type: Number,
    default: -100,
  })
  t: number;
  @ApiProperty({
    description: 'The Humidity',
    type: Number,
    default: -100,
  })
  h: number;
  @ApiProperty({
    description: 'CO2 concentration',
    type: Number,
    default: 0,
  })
  ppm: number;
}
