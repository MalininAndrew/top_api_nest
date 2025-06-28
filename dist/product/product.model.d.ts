import { HydratedDocument, Schema as MSchema, Types } from "mongoose";
export type ProductDocument = HydratedDocument<ProductModel>;
declare class ProductCharacteristic {
    name: string;
    value: string;
}
export declare class ProductModel {
    image: string;
    title: string;
    price: number;
    oldPrice?: number;
    credit: number;
    calculatedRating: number;
    description: string;
    advantanges: string;
    disadvantanges: string;
    categories: string[];
    tags: string[];
    characteristics: ProductCharacteristic[];
}
export declare const ProductModelSchema: MSchema<ProductModel, import("mongoose").Model<ProductModel, any, any, any, import("mongoose").Document<unknown, any, ProductModel, any> & ProductModel & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ProductModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ProductModel>, {}> & import("mongoose").FlatRecord<ProductModel> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export {};
