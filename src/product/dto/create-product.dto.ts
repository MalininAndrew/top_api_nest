import { Type } from "class-transformer";
import { IsNumber, IsString, IsOptional, IsArray, ValidateNested } from "class-validator";

class ProductCharacteristicDto {
	@IsString()
	name: string;

	@IsString()
	value: string;
}

export class CreateProductDTO {
	
	@IsString()
	image: string;

	@IsString()
	title: string;
	
	@IsNumber()
	price: number;
	
	@IsOptional()
	@IsNumber()
	oldPrice?: number;

	@IsNumber()
	credit: number;

	@IsNumber()
	calculatedRating: number;

	@IsString()
	description: string;

	@IsString()
	advantanges: string;

	@IsString()
	disadvantanges: string;

	@IsArray()
	@IsString({ each: true })
	categories: string[];

	@IsArray()
	@IsString({ each: true })
	tags: string[];

	@IsArray()
	@ValidateNested()
	@Type(() => ProductCharacteristicDto)
	characteristics: ProductCharacteristicDto[];
}