import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { DiseasesModule } from './diseases/diseases.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { MedicinesModule } from './medicines/medicines.module';

@Module({
  imports: [LoginModule, SpecialtiesModule, DiseasesModule, MedicinesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
