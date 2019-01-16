import { Document } from 'mongoose';

export interface Reports extends Document {
  readonly name: string;
  readonly age: number;
  readonly address: string;
}