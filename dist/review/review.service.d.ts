import { ReviewDocument, ReviewModel } from './models/review.model';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewService {
    private readonly reviewModel;
    constructor(reviewModel: Model<ReviewModel>);
    create(dto: CreateReviewDto): Promise<ReviewDocument>;
    delete(id: string): Promise<ReviewDocument | null>;
    findByProductId(productId: string): Promise<ReviewDocument[]>;
    deleteAllReviewsByProdId(productId: string): Promise<import("mongodb").DeleteResult>;
    findAllReviews(): Promise<(import("mongoose").Document<unknown, {}, ReviewModel, {}> & ReviewModel & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
