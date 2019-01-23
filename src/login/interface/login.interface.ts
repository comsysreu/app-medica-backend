import { Document } from 'mongoose';

export interface LoginInterface extends Document {
  readonly _id: Object;
  readonly name: string;
  readonly lastName: String;
  readonly gerder: boolean;
  readonly userName: string;
  readonly email: string;
  readonly password: string;
  readonly type_user: boolean;
}