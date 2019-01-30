import { Document } from 'mongoose';
import { ObjectId } from "bson";

export interface SpecialtiesInterface extends Document {
  readonly _id: ObjectId;
  readonly name: string;
  readonly description: String;
}