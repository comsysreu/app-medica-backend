import { ObjectId } from "bson";

export class MedicinesDto {
    _id: ObjectId;
    readonly name: string;
    readonly description: string;
}