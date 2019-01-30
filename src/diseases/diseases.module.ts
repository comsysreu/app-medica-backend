import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { DiseasesController } from './diseases.controller';
import { DiseasesService } from './diseases.service';
import { DiseasesProviders } from './diseases.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [DiseasesController],
  providers: [DiseasesService, ...DiseasesProviders],
})
export class DiseasesModule { }