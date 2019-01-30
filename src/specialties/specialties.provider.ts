import { Connection } from 'mongoose';
import { SpecialtiesSchema } from './schema/specialties.schema';

export const SpecialtiesProviders = [
  {
    provide: 'SpecialtiesModelToken',
    useFactory: (connection: Connection) => connection.model('specialties', SpecialtiesSchema),
    inject: ['DbConnectionToken'],
  },
];