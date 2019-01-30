import * as mongoose from 'mongoose';

export const DiseasesSchema = new mongoose.Schema({
    _id: Object,
    name: String,
    description: String,
});