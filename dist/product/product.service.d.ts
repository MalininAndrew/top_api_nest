import { ProductModel } from './product.model';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ReviewModel } from 'src/review/review.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductModel>);
    create(dto: CreateProductDTO): Promise<import("mongoose").Document<unknown, {}, ProductModel, {}> & ProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, ProductModel, {}> & ProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteById(id: string): Promise<(import("mongoose").Document<unknown, {}, ProductModel, {}> & ProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateById(id: string, dto: CreateProductDTO): Promise<(import("mongoose").Document<unknown, {}, ProductModel, {}> & ProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    findWithReviews(dto: FindProductDto): Promise<(ProductModel & {
        review: ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
    })[]>;
}
