import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TopLevelCategory, TopPageModel } from './top-page.model';
import { Model } from 'mongoose';
import { CreateTopPageModelDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Injectable()
export class TopPageService {
	constructor(@InjectModel(TopPageModel.name) private readonly topPageModel: Model<TopPageModel>) {}

	async create(dto: CreateTopPageModelDto) {
		return this.topPageModel.create(dto);
	}

	async findById(id: string) {
		return this.topPageModel.findById(id).exec();
	}	

	async findByAlias(alias: string) {
		return this.topPageModel.findOne({ alias }).exec();
	}	

	async findByCategory(firstCategory: TopLevelCategory) {
		return this.topPageModel.find({ firstCategory }, { alias: 1, secondCategory: 1, title: 1, category: 1}).exec();
	}

	async find1(firstCategory: TopLevelCategory) {
		return this.topPageModel
			.aggregate()
			.match(
				{
					firstCategory
				})
			.group({
					_id: { secondCategory: '$secondCategory' },
					pages: { $push: { alias: '$alias', title: '$title' } }
			})
			.exec();
	}

	async findByText(text: string) {
		return this.topPageModel.find({ $text: {$search: text, $caseSensitive: false}}).exec();
	}

	async deleteById(id: string) {
		return this.topPageModel.findByIdAndDelete(id).exec();
	}

	async updateById(id: string, dto: CreateTopPageModelDto) {
		return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec()
	}
}
