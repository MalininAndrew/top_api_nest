import { HydratedDocument, Schema as MSchema, Types } from "mongoose";
export type TopPageDocument = HydratedDocument<TopPageModel>;
export declare enum TopLevelCategory {
    Courses = 0,
    Services = 1,
    Books = 2,
    Products = 3
}
export declare class HhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}
export declare class TopPageAdvantages {
    title: string;
    description: string;
}
export declare class TopPageModel {
    firstCategory: TopLevelCategory;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    hh?: HhData;
    advantages: TopPageAdvantages[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
export declare const TopPageModelSchema: MSchema<TopPageModel, import("mongoose").Model<TopPageModel, any, any, any, import("mongoose").Document<unknown, any, TopPageModel, any> & TopPageModel & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TopPageModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TopPageModel>, {}> & import("mongoose").FlatRecord<TopPageModel> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
