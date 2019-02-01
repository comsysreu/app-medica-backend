import { Document } from 'mongoose';
import { ObjectId } from "bson";

export interface LoginInterface extends Document {
  readonly _id: ObjectId;
  readonly name: String;
  readonly lastName: String;
  readonly gerder: Boolean;
  readonly userName: String;
  readonly email: String;
  readonly password: String;
  readonly type_user: Boolean;
  readonly age: Number;
  readonly mobile: Number;
  readonly dateCreation: Date;
  readonly dateModification: Date;
}