"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInterceptor = void 0;
const common_1 = require("@nestjs/common");
const AppInvalidCredentialsException_1 = require("../../infra/exeptions/AppInvalidCredentialsException");
const ConstantException_1 = require("../../utils/constants/ConstantException");
let AuthInterceptor = class AuthInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
        if (!token || token !== '123456') {
            throw new AppInvalidCredentialsException_1.AppInvalidCredentialsException(ConstantException_1.ConstantException.UNAUTHORIZED);
        }
        console.log('Seu token é: ', token);
        return next.handle();
    }
};
exports.AuthInterceptor = AuthInterceptor;
exports.AuthInterceptor = AuthInterceptor = __decorate([
    (0, common_1.Injectable)()
], AuthInterceptor);
//# sourceMappingURL=AuthInterceptor.js.map