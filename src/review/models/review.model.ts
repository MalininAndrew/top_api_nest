import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MSchema, Types } from "mongoose";


export type ReviewDocument = HydratedDocument<ReviewModel>

@Schema()
export class ReviewModel {

	@Prop({ required: true})
	name: string;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	rating: number;

	@Prop()
	createdAt: Date;	

	@Prop()
	productId: MSchema.Types.ObjectId;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel)