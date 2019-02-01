import { ObjectId } from "bson";

export class PatientsDto {
    _id: ObjectId;
    userId: ObjectId;
    readonly bloodType: String;
    readonly height: String;
    readonly weight: String;
    readonly dateCreation: Date;
    readonly dateModification: Date;
}