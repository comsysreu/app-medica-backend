import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
    _id: String,
    name: String,
    /*lastName: Number,
    gerder: Boolean,
    user: String,
    email: String,
    password: String,
    type_user: Boolean,*/
});