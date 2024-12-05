"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlParam = void 0;
const common_1 = require("@nestjs/common");
exports.UrlParam = (0, common_1.createParamDecorator)((data, ctx) => {
    const context = ctx.switchToHttp();
    const request = context.getRequest();
    return request[data];
});
//# sourceMappingURL=UrlParam.decorator.js.map