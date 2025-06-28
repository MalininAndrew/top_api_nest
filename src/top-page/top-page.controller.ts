import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';
import { CreateTopPageModelDto } from './dto/create-top-page.dto';
import { TopPageService } from './top-page.service';
import { PAGE_NOT_FOUND_ERROR } from './top-page.constants';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('top-page')
export class TopPageController {
	constructor(private readonly topPageService: TopPageService) {

	}
	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: CreateTopPageModelDto) {
		return this.topPageService.create(dto)
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const page = await this.topPageService.findById(id);
		if (!page) {
			throw new NotFoundException(PAGE_NOT_FOUND_ERROR)
		}
		return page;
	}

	@UseGuards(JwtAuthGuard)
	@Get('byAlias/:alias')
	async getByAlias(@Param('alias',) alias: string) {
		const page = await this.topPageService.findByAlias(alias);
		if (!page) {
			throw new NotFoundException(PAGE_NOT_FOUND_ERROR)
		}
		return page;
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedPage = await this.topPageService.deleteById(id);
		if (!deletedPage) {
			throw new NotFoundException(PAGE_NOT_FOUND_ERROR);
		}
	}
	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: CreateTopPageModelDto) {
		const updatedPage = await this.topPageService.updateById(id, dto);
		if (!updatedPage) {
			throw new NotFoundException(PAGE_NOT_FOUND_ERROR);
		}
		return updatedPage;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindTopPageDto) {
		return this.topPageService.findByCategory(dto.firstCategory);
	}

	@Post('findBycategory')
	async find1(@Body() dto: FindTopPageDto) {
		return this.topPageService.find1(dto.firstCategory);
	}

	@Get('textSearch/:text')
	async textSearch(@Param('text') text: string) {
		return this.topPageService.findByText(text);
	}
}
