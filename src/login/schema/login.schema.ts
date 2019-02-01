import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
    _id: Object,
    name: String,
    lastName: String,
    gerder: Boolean,
    userName: String,
    email: String,
    password: String,
    type_user: Boolean,
    age: Number,
    mobile: Number,
    dateCreation: Date,
    dateModification: Date,
});