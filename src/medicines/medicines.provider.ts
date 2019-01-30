import { Connection } from 'mongoose';
import { MedicinesSchema } from './schema/medicines.schema';

export const MedicinesProviders = [
  {
    provide: 'MedicinesModelToken',
    useFactory: (connection: Connection) => connection.model('medicines', MedicinesSchema),
    inject: ['DbConnectionToken'],
  },
];