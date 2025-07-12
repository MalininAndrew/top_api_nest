"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HhModule = void 0;
const common_1 = require("@nestjs/common");
const hh_service_1 = require("./hh.service");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
let HhModule = class HhModule {
};
exports.HhModule = HhModule;
exports.HhModule = HhModule = __decorate([
    (0, common_1.Module)({
        providers: [hh_service_1.HhService],
        imports: [config_1.ConfigModule, axios_1.HttpModule]
    })
], HhModule);
//# sourceMappingURL=hh.module.js.map