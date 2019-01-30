import { ObjectId } from "bson";

export class SpecialtiesDto {
    _id: ObjectId;
    readonly name: string;
    readonly description: string;
}