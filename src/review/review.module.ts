import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModel } from './review.model';
import { ReviewModelSchema } from './models/review.model';
import { ReviewService } from './review.service';
import { TelegramModule } from 'src/telegram/telegram.module';
import { TelegramService } from 'src/telegram/telegram.service';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([{name: ReviewModel.name, schema: ReviewModelSchema}]),
    TelegramModule
  ],
  providers: [ReviewService]
})
export class ReviewModule {}
