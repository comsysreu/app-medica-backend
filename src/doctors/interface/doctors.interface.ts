import { Document } from 'mongoose';
import { ObjectId } from "bson";

export interface DoctorsInterface extends Document {
  readonly _id: ObjectId;
  readonly userId: ObjectId;
  readonly graduation: String;
  readonly collegiate: String;
  readonly specialtiesId: String;
  readonly description: String;
  readonly score: Number;
  readonly dateCreation: Date;
  readonly dateModification: Date;
}