import * as mongoose from 'mongoose';

export const DoctorsSchema = new mongoose.Schema({
    _id: Object,
    userId: Object,
    graduation: String,
    collegiate: String,
    specialtiesId: Object,
    description: String,
    score: Number,
    dateCreation: Date,
    dateModification: Date,
});