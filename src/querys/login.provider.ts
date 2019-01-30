import { Connection } from 'mongoose';
import { LoginSchema } from './schema/login.schema';

export const LoginProviders = [
  {
    provide: 'LoginModelToken',
    useFactory: (connection: Connection) => connection.model('users', LoginSchema),
    inject: ['DbConnectionToken'],
  },
];