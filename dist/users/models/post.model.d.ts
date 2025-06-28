import { HydratedDocument, Schema as MSchema } from "mongoose";
import { User } from "./user.model";
export type PostDocument = HydratedDocument<Post>;
export declare class Post {
    title: string;
    text: string;
    images: string[];
    auhtor: User;
}
export declare const PostSchema: MSchema<Post, import("mongoose").Model<Post, any, any, any, import("mongoose").Document<unknown, any, Post, any> & Post & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Post, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Post>, {}> & import("mongoose").FlatRecord<Post> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
