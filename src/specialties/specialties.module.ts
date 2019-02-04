import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { SpecialtiesController } from './specialties.controller';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesProviders } from './specialties.provider';

@Module({
  imports: [DatabaseModule],
  exports:  [SpecialtiesService, ...SpecialtiesProviders],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService, ...SpecialtiesProviders],
})
export class SpecialtiesModule { }