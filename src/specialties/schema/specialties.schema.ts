import * as mongoose from 'mongoose';

export const SpecialtiesSchema = new mongoose.Schema({
    _id: Object,
    name: String,
    description: String
});