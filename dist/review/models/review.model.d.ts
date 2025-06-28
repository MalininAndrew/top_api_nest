import { HydratedDocument, Schema as MSchema, Types } from "mongoose";
export type ReviewDocument = HydratedDocument<ReviewModel>;
export declare class ReviewModel {
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
    productId: MSchema.Types.ObjectId;
}
export declare const ReviewModelSchema: MSchema<ReviewModel, import("mongoose").Model<ReviewModel, any, any, any, import("mongoose").Document<unknown, any, ReviewModel, any> & ReviewModel & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReviewModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ReviewModel>, {}> & import("mongoose").FlatRecord<ReviewModel> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
