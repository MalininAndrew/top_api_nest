import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(dto: CreateReviewDto): Promise<import("mongoose").Document<unknown, {}, import("./models/review.model").ReviewModel, {}> & import("./models/review.model").ReviewModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    delete(id: string): Promise<void>;
    getByProduct(productId: string, email: string): Promise<(import("mongoose").Document<unknown, {}, import("./models/review.model").ReviewModel, {}> & import("./models/review.model").ReviewModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getAllReviews(): Promise<(import("mongoose").Document<unknown, {}, import("./models/review.model").ReviewModel, {}> & import("./models/review.model").ReviewModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
