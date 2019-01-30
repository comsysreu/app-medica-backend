import { ObjectId } from "bson";

export class DiseasesDto {
    _id: ObjectId;
    readonly name: string;
    readonly description: string;
}