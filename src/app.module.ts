import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClimateParametersModule } from './climate-parameters/climate-parameters.module';
import { configService } from './config/config.service';


@Module({
  imports: [ClimateParametersModule, 
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
