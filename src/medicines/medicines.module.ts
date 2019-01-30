import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { MedicinesController } from './medicines.controller';
import { MedicinesService } from './medicines.service';
import { MedicinesProviders } from './medicines.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MedicinesController],
  providers: [MedicinesService, ...MedicinesProviders],
})
export class MedicinesModule { }