import { ObjectId } from "bson";

export class LoginDto {
    _id: ObjectId;
    readonly name: string;
    readonly lastName: string;
    readonly gerder: boolean;
    readonly userName: string;
    readonly email: string;
    readonly password: string;
    readonly type_user: boolean;
}