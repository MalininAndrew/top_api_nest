"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmail = void 0;
const common_1 = require("@nestjs/common");
exports.UserEmail = (0, common_1.createParamDecorator)((data, cxt) => {
    const request = cxt.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=user-email.decorator.js.map