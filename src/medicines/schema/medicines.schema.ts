import * as mongoose from 'mongoose';

export const MedicinesSchema = new mongoose.Schema({
    _id: Object,
    name: String,
    description: String
});