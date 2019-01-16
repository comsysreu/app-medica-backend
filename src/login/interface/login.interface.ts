import { Document } from 'mongoose';

export interface LoginInterface extends Document {
  readonly _id: string;
  readonly name: string;
  // readonly lastName: number;
  // readonly gerder: boolean;
  // readonly user: string;
  // readonly email: string;
  // readonly password: string;
  // readonly type_user: boolean;
}