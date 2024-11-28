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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const use_entity_1 = require("../../../user/domain/entities/use.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AuthRepository = class AuthRepository {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    async signup(request) {
        return await this.authRepository.save(request);
    }
    findByEmail(email) {
        throw new Error('Method not implemented.');
    }
    emailExists(email) {
        throw new Error('Method not implemented.');
    }
    create(entity) {
        throw new Error('Method not implemented.');
    }
    show(id) {
        throw new Error('Method not implemented.');
    }
    index() {
        throw new Error('Method not implemented.');
    }
    update(id, entity) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    active(id) {
        throw new Error('Method not implemented.');
    }
    deactive(id) {
        throw new Error('Method not implemented.');
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(use_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthRepository);
//# sourceMappingURL=auth.repository.js.map