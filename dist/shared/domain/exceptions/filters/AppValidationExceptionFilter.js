"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppValidationExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const ConstantException_1 = require("../../../utils/constants/ConstantException");
const AppValidationException_1 = require("../AppValidationException");
let AppValidationExceptionFilter = class AppValidationExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = exception.status ? exception.status : 422;
        response.status(statusCode).send({
            timestamp: new Date().toISOString(),
            statusCode,
            error: ConstantException_1.ConstantException.UNPROCESSABLE_ENTITY,
            message: exception.message,
            path: request.url,
        });
    }
};
exports.AppValidationExceptionFilter = AppValidationExceptionFilter;
exports.AppValidationExceptionFilter = AppValidationExceptionFilter = __decorate([
    (0, common_1.Catch)(AppValidationException_1.AppValidationException)
], AppValidationExceptionFilter);
//# sourceMappingURL=AppValidationExceptionFilter.js.map