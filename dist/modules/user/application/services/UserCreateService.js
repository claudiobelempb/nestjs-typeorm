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
exports.UserCreateService = void 0;
const common_1 = require("@nestjs/common");
const AppBadRequestExeption_1 = require("../../../../shared/infra/exeptions/AppBadRequestExeption");
const ConstantException_1 = require("../../../../shared/utils/constants/ConstantException");
const use_entity_1 = require("../../domain/entities/use.entity");
const UserRepository_1 = require("../../domain/repositories/UserRepository");
let UserCreateService = class UserCreateService {
    constructor(userRepository, hashProvider) {
        this.userRepository = userRepository;
        this.hashProvider = hashProvider;
    }
    async execute(request) {
        const { firstName, lastName, email, password, passwordConfirm } = request;
        if (!firstName || !lastName || !email || !password || !passwordConfirm) {
            throw new AppBadRequestExeption_1.AppBadRequestExeption(ConstantException_1.ConstantException.FIELD_REQUIRED);
        }
        if (password !== passwordConfirm) {
            throw new AppBadRequestExeption_1.AppBadRequestExeption(ConstantException_1.ConstantException.PASSWORD_NOT_MATCH);
        }
        await this.userRepository.emailExists(email);
        const hashPassword = await this.hashProvider.generateHash(password);
        const entity = new use_entity_1.UserEntity();
        entity.firstName = firstName;
        entity.lastName = lastName;
        entity.email = email;
        entity.password = hashPassword;
        return await this.userRepository.create(entity);
    }
};
exports.UserCreateService = UserCreateService;
exports.UserCreateService = UserCreateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [UserRepository_1.UserRepository, Object])
], UserCreateService);
//# sourceMappingURL=UserCreateService.js.map