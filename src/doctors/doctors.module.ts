import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { DoctorsProviders } from './doctors.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [DoctorsController],
  providers: [DoctorsService, ...DoctorsProviders],
})
export class DoctorsModule { }