import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ConfigurationsService from '../configuration/configurations.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      expandVariables: true,
    }),
  ],
  providers: [
    {
      provide: ConfigurationsService,
      useClass: ConfigurationsService,
    },
  ],
  exports: [ConfigurationsService],
})
export class ConfigurationsModule {}
