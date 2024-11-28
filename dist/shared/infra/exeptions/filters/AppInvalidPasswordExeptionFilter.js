"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const AppInvalidPasswordExeption_1 = require("../AppInvalidPasswordExeption");
let InvalidPasswordExceptionFilter = class InvalidPasswordExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(422).send({
            statusCode: 422,
            error: 'Unprocessable Entity',
            message: exception.message,
        });
    }
};
exports.InvalidPasswordExceptionFilter = InvalidPasswordExceptionFilter;
exports.InvalidPasswordExceptionFilter = InvalidPasswordExceptionFilter = __decorate([
    (0, common_1.Catch)(AppInvalidPasswordExeption_1.AppInvalidPasswordExeption)
], InvalidPasswordExceptionFilter);
//# sourceMappingURL=AppInvalidPasswordExeptionFilter.js.map