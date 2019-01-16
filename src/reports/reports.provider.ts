import { Connection } from 'mongoose';
import { ReportsSchema } from './schema/reports.schema';

export const reportsProviders = [
  {
    provide: 'ReportsModelToken',
    useFactory: (connection: Connection) => connection.model('Reports', ReportsSchema),
    inject: ['DbConnectionToken'],
  },
];