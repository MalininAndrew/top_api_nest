import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MSchema, Types } from "mongoose";

export type ProductDocument = HydratedDocument<ProductModel>


class ProductCharacteristic {
	@Prop()
	name: string;

	@Prop()
	value: string;
}

@Schema({ timestamps: true })
export class ProductModel {

	@Prop()
	image: string;

	@Prop()
	title: string;
	
	@Prop()
	price: number;
	
	@Prop()
	oldPrice?: number;

	@Prop()
	credit: number;

	@Prop()
	calculatedRating: number;

	@Prop()
	description: string;

	@Prop()
	advantanges: string;

	@Prop()
	disadvantanges: string;

	@Prop()
	categories: string[];

	@Prop()
	tags: string[];

	@Prop({ type: [ProductCharacteristic] })
	characteristics: ProductCharacteristic[];
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel)
