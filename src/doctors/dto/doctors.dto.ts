import { ObjectId } from "bson";

export class DoctorsDto {
    _id: ObjectId;
    userId: ObjectId;
    readonly graduation: String;
    readonly collegiate: String;
    specialtiesId: ObjectId; 
    readonly description: String;
    readonly score: Number;
    readonly dateCreation: Date;
    readonly dateModification: Date;
}