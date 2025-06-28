import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

class HhDataDto {
	@IsNumber()
	count: number;
	
	@IsNumber()
	juniorSalary: number;
	
	@IsNumber()
	middleSalary: number;
	
	@IsNumber()
	seniorSalary: number;
}

class TopPageAdvantagesDto {
	@IsString()
	title: string;

	@IsString()
	description: string;
}


export class CreateTopPageModelDto {
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory;

	@IsString()
	secondCategory: string;

	@IsString()
	alias: string
	
	@IsString()
	title: string;
	
	@IsString()
	category: string;
	
	@IsOptional()
	@ValidateNested()
	@Type(() => HhDataDto)
	hh?: HhDataDto;
	
	@IsArray()
	@ValidateNested()
	@Type(() => TopPageAdvantagesDto)
	advantages: TopPageAdvantagesDto[];
	
	@IsString()
	seoText: string;
	
	@IsString()
	tagsTitle: string;
	
	@IsArray()
	@IsString({ each: true})
	tags: string[];
}