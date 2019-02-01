import { Connection } from 'mongoose';
import { PatientsSchema } from './schema/patients.schema';

export const PatientsProviders = [
  {
    provide: 'PatientsModelToken',
    useFactory: (connection: Connection) => connection.model('patients', PatientsSchema),
    inject: ['DbConnectionToken'],
  },
];