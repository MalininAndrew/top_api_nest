import { TopLevelCategory, TopPageModel } from './top-page.model';
import { Model } from 'mongoose';
import { CreateTopPageModelDto } from './dto/create-top-page.dto';
export declare class TopPageService {
    private readonly topPageModel;
    constructor(topPageModel: Model<TopPageModel>);
    create(dto: CreateTopPageModelDto): Promise<import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    findByAlias(alias: string): Promise<(import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    findByCategory(firstCategory: TopLevelCategory): Promise<(import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    find1(firstCategory: TopLevelCategory): Promise<any[]>;
    findByText(text: string): Promise<(import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    deleteById(id: string): Promise<(import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateById(id: string, dto: CreateTopPageModelDto): Promise<(import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
