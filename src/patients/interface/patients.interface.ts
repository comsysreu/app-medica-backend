import { Document } from 'mongoose';
import { ObjectId } from "bson";

export interface PatientsInterface extends Document {
  readonly _id: ObjectId;
  readonly userId: ObjectId;
  readonly bloodType: String;
  readonly height: String;
  readonly weight: String;
  readonly dateCreation: Date;
  readonly dateModification: Date;
}