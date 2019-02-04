import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { DoctorsProviders } from './doctors.provider';
import { LoginModule } from '../login/login.module';
import { SpecialtiesModule } from '../specialties/specialties.module';

@Module({
  imports: [DatabaseModule, LoginModule, SpecialtiesModule],
  controllers: [DoctorsController],
  providers: [DoctorsService, ...DoctorsProviders]
})
export class DoctorsModule { }