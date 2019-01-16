import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
    //await mongoose.connect('mongodb://admin:admin@localhost:12701/bot-sites',{useNewUrlParser: true,auth:{authdb:'admin'}})
    await mongoose.connect('mongodb://127.0.0.1:27017/app-medica', { useNewUrlParser: true })
  },
];