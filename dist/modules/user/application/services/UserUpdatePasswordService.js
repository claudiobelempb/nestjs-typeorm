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
exports.UserUpdatePasswordService = void 0;
const common_1 = require("@nestjs/common");
const UserRepository_1 = require("../../domain/repositories/UserRepository");
const AppInvalidPasswordException_1 = require("../../../../shared/infra/exeptions/AppInvalidPasswordException");
const ConstantException_1 = require("../../../../shared/utils/constants/ConstantException");
let UserUpdatePasswordService = class UserUpdatePasswordService {
    constructor(userRepository, hashProvider) {
        this.userRepository = userRepository;
        this.hashProvider = hashProvider;
    }
    async execute(id, request) {
        const { password, oldPassword } = request;
        const entity = await this.userRepository.show(id);
        if (!password || !oldPassword) {
            throw new AppInvalidPasswordException_1.AppInvalidPasswordException(ConstantException_1.ConstantException.OLD_PASSWORD_AND_NEW_PASSWORD_REQUERID);
        }
        const checkOldPassword = await this.hashProvider.compareHash(oldPassword, entity.password);
        if (!checkOldPassword) {
            throw new AppInvalidPasswordException_1.AppInvalidPasswordException(ConstantException_1.ConstantException.OLD_PASSWORD_NOT_MATH);
        }
        const hashPassword = await this.hashProvider.generateHash(password);
        await this.userRepository.updatePassword(id, hashPassword);
    }
};
exports.UserUpdatePasswordService = UserUpdatePasswordService;
exports.UserUpdatePasswordService = UserUpdatePasswordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [UserRepository_1.UserRepository, Object])
], UserUpdatePasswordService);
//# sourceMappingURL=UserUpdatePasswordService.js.map