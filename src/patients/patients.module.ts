import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { PatientsProviders } from './patients.provider';
import { LoginModule } from '../login/login.module';

@Module({
  imports: [DatabaseModule, LoginModule],
  controllers: [PatientsController],
  providers: [PatientsService, ...PatientsProviders],
})
export class PatientsModule { }

