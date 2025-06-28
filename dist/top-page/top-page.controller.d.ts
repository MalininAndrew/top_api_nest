import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { CreateTopPageModelDto } from './dto/create-top-page.dto';
import { TopPageService } from './top-page.service';
export declare class TopPageController {
    private readonly topPageService;
    constructor(topPageService: TopPageService);
    create(dto: CreateTopPageModelDto): Promise<import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getByAlias(alias: string): Promise<import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: CreateTopPageModelDto): Promise<import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    find(dto: FindTopPageDto): Promise<(import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    find1(dto: FindTopPageDto): Promise<any[]>;
    textSearch(text: string): Promise<(import("mongoose").Document<unknown, {}, TopPageModel, {}> & TopPageModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
