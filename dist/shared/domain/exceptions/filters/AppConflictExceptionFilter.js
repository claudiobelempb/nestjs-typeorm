"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConflictExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const ConstantException_1 = require("../../../utils/constants/ConstantException");
const AppConflictException_1 = require("../AppConflictException");
let AppConflictExceptionFilter = class AppConflictExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = exception.status ? exception.status : 409;
        response.status(statusCode).send({
            timestamp: new Date().toISOString(),
            statusCode,
            error: ConstantException_1.ConstantException.CONFICT_EMAIL,
            message: exception.message,
            path: request.url,
        });
    }
};
exports.AppConflictExceptionFilter = AppConflictExceptionFilter;
exports.AppConflictExceptionFilter = AppConflictExceptionFilter = __decorate([
    (0, common_1.Catch)(AppConflictException_1.AppConflictException)
], AppConflictExceptionFilter);
//# sourceMappingURL=AppConflictExceptionFilter.js.map