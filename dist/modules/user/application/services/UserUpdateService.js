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
exports.UserUpdateService = void 0;
const common_1 = require("@nestjs/common");
const UserRepository_1 = require("../../domain/repositories/UserRepository");
const use_entity_1 = require("../../domain/entities/use.entity");
let UserUpdateService = class UserUpdateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id, request) {
        const { firstName, lastName } = request;
        const entity = new use_entity_1.UserEntity();
        entity.firstName = firstName;
        entity.lastName = lastName;
        await this.userRepository.update(id, entity);
    }
};
exports.UserUpdateService = UserUpdateService;
exports.UserUpdateService = UserUpdateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [UserRepository_1.UserRepository])
], UserUpdateService);
//# sourceMappingURL=UserUpdateService.js.map