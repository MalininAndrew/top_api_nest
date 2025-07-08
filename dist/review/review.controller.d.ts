import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { TelegramService } from 'src/telegram/telegram.service';
export declare class ReviewController {
    private readonly reviewService;
    private readonly telegramService;
    constructor(reviewService: ReviewService, telegramService: TelegramService);
    create(dto: CreateReviewDto): Promise<import("mongoose").Document<unknown, {}, import("./models/review.model").ReviewModel, {}> & import("./models/review.model").ReviewModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    notify(dto: CreateReviewDto): Promise<void>;
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
