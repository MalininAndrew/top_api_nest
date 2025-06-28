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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopPageModelDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var TopLevelCategory;
(function (TopLevelCategory) {
    TopLevelCategory[TopLevelCategory["Courses"] = 0] = "Courses";
    TopLevelCategory[TopLevelCategory["Services"] = 1] = "Services";
    TopLevelCategory[TopLevelCategory["Books"] = 2] = "Books";
    TopLevelCategory[TopLevelCategory["Products"] = 3] = "Products";
})(TopLevelCategory || (TopLevelCategory = {}));
class HhDataDto {
    count;
    juniorSalary;
    middleSalary;
    seniorSalary;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDataDto.prototype, "count", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDataDto.prototype, "juniorSalary", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDataDto.prototype, "middleSalary", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDataDto.prototype, "seniorSalary", void 0);
class TopPageAdvantagesDto {
    title;
    description;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TopPageAdvantagesDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TopPageAdvantagesDto.prototype, "description", void 0);
class CreateTopPageModelDto {
    firstCategory;
    secondCategory;
    alias;
    title;
    category;
    hh;
    advantages;
    seoText;
    tagsTitle;
    tags;
}
exports.CreateTopPageModelDto = CreateTopPageModelDto;
__decorate([
    (0, class_validator_1.IsEnum)(TopLevelCategory),
    __metadata("design:type", Number)
], CreateTopPageModelDto.prototype, "firstCategory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageModelDto.prototype, "secondCategory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageModelDto.prototype, "alias", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageModelDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageModelDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => HhDataDto),
    __metadata("design:type", HhDataDto)
], CreateTopPageModelDto.prototype, "hh", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TopPageAdvantagesDto),
    __metadata("design:type", Array)
], CreateTopPageModelDto.prototype, "advantages", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageModelDto.prototype, "seoText", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageModelDto.prototype, "tagsTitle", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateTopPageModelDto.prototype, "tags", void 0);
//# sourceMappingURL=create-top-page.dto.js.map