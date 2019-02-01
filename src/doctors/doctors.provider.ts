import { Connection } from 'mongoose';
import { DoctorsSchema } from './schema/doctors.schema';

export const DoctorsProviders = [
  {
    provide: 'DoctorsModelToken',
    useFactory: (connection: Connection) => connection.model('doctors', DoctorsSchema),
    inject: ['DbConnectionToken'],
  },
];