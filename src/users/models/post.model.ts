import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MSchema } from "mongoose";
import { User } from "./user.model";

export type PostDocument = HydratedDocument<Post>

@Schema()
export class Post {
	@Prop({ required: true})
	title: string;

	@Prop({ required: true})
	text: string;

	@Prop([String])
	images: string[];

	@Prop({ type: MSchema.Types.ObjectId, ref: User.name })
	auhtor: User;
}

export const PostSchema = SchemaFactory.createForClass(Post)