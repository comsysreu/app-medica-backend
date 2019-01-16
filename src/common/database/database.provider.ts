import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
    //await mongoose.connect('mongodb://admin:admin@localhost:12701/bot-sites',{useNewUrlParser: true,auth:{authdb:'admin'}})
    await mongoose.connect('mongodb://root:JHLebCBz5eQO@ec2-34-204-23-3.compute-1.amazonaws.com:27017/bot-sites',{useNewUrlParser: true,auth:{authdb:'admin'}})
  },
];