import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { PatientsProviders } from './patients.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientsController],
  providers: [PatientsService, ...PatientsProviders],
})
export class PatientsModule { }

