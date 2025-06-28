import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDTO): Promise<import("mongoose").Document<unknown, {}, ProductModel, {}> & ProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, ProductModel, {}> & ProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: ProductModel): Promise<import("mongoose").Document<unknown, {}, ProductModel, {}> & ProductModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    find(dto: FindProductDto): Promise<(ProductModel & {
        review: import("../review/review.model").ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
    })[]>;
}
