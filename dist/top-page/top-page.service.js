"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const top_page_model_1 = require("./top-page.model");
const mongoose_2 = require("mongoose");
let TopPageService = class TopPageService {
    topPageModel;
    constructor(topPageModel) {
        this.topPageModel = topPageModel;
    }
    async create(dto) {
        return this.topPageModel.create(dto);
    }
    async findById(id) {
        return this.topPageModel.findById(id).exec();
    }
    async findByAlias(alias) {
        return this.topPageModel.findOne({ alias }).exec();
    }
    async findByCategory(firstCategory) {
        return this.topPageModel.find({ firstCategory }, { alias: 1, secondCategory: 1, title: 1, category: 1 }).exec();
    }
    async find1(firstCategory) {
        return this.topPageModel
            .aggregate()
            .match({
            firstCategory
        })
            .group({
            _id: { secondCategory: '$secondCategory' },
            pages: { $push: { alias: '$alias', title: '$title' } }
        })
            .exec();
    }
    async findByText(text) {
        return this.topPageModel.find({ $text: { $search: text, $caseSensitive: false } }).exec();
    }
    async deleteById(id) {
        return this.topPageModel.findByIdAndDelete(id).exec();
    }
    async updateById(id, dto) {
        return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
};
exports.TopPageService = TopPageService;
exports.TopPageService = TopPageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(top_page_model_1.TopPageModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TopPageService);
//# sourceMappingURL=top-page.service.js.map