import { Connection } from 'mongoose';
import { DiseasesSchema } from './schema/diseases.schema';

export const DiseasesProviders = [
  {
    provide: 'DiseasesModelToken',
    useFactory: (connection: Connection) => connection.model('diseases', DiseasesSchema),
    inject: ['DbConnectionToken'],
  },
];