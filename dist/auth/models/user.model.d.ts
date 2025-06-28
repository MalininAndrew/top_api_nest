import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<UserModel>;
export declare class UserModel {
    email: string;
    passwordHash: string;
}
export declare const UserModelSchema: import("mongoose").Schema<UserModel, import("mongoose").Model<UserModel, any, any, any, import("mongoose").Document<unknown, any, UserModel, any> & UserModel & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserModel>, {}> & import("mongoose").FlatRecord<UserModel> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
