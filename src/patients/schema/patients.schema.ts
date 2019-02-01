import * as mongoose from 'mongoose';

export const PatientsSchema = new mongoose.Schema({
    _id: Object,
    userId: Object,
    bloodType: String,
    height: String,
    weight: String,
    dateCreation: Date,
    dateModification: Date,
});