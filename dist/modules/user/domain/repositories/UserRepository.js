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
exports.UserRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const AppConflictException_1 = require("../../../../shared/domain/exceptions/AppConflictException");
const AppNotFoundException_1 = require("../../../../shared/domain/exceptions/AppNotFoundException");
const ConstantException_1 = require("../../../../shared/utils/constants/ConstantException");
const typeorm_2 = require("typeorm");
const use_entity_1 = require("../entities/use.entity");
let UserRepository = class UserRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findByEmail(email) {
        try {
            const entity = await this.userRepository.findOneBy({
                email,
            });
            return entity;
        }
        catch (error) {
            throw new AppNotFoundException_1.AppNotFoundException(`${ConstantException_1.ConstantException.EMAIL_NOT_FOUND} ${email}`);
        }
    }
    async emailExists(email) {
        const emailExists = await this.userRepository.findOneBy({
            email,
        });
        if (emailExists) {
            throw new AppConflictException_1.AppConflictException(ConstantException_1.ConstantException.CONFICT_EMAIL);
        }
    }
    async create(request) {
        const entity = this.userRepository.create(request);
        return this.userRepository.save(entity);
    }
    async show(id) {
        try {
            const entity = await this.userRepository.findOneBy({
                id,
            });
            return entity;
        }
        catch (error) {
            throw new AppNotFoundException_1.AppNotFoundException(`${ConstantException_1.ConstantException.ENTITY_NOT_FOUND} ${id}`);
        }
    }
    async index() {
        const entity = await this.userRepository.find({
            order: {
                firstName: 'ASC',
            },
        });
        return entity;
    }
    async update(id, request) {
        try {
            const entity = await this.userRepository.preload({ id, ...request });
            return this.userRepository.save(entity);
        }
        catch (error) {
            throw new AppNotFoundException_1.AppNotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async delete(id) {
        try {
            const entity = await this.userRepository.findOne({ where: { id } });
            if (!entity) {
                throw new AppNotFoundException_1.AppNotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
            }
            await this.userRepository.remove(entity);
        }
        catch (error) {
            throw new AppNotFoundException_1.AppNotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async active(id) {
        try {
            const entity = await this.userRepository.preload({
                id,
                isActive: true,
            });
            await this.userRepository.save(entity);
        }
        catch (error) {
            throw new AppNotFoundException_1.AppNotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async deactive(id) {
        try {
            const entity = await this.userRepository.preload({
                id,
                isActive: false,
            });
            await this.userRepository.save(entity);
        }
        catch (error) {
            throw new AppNotFoundException_1.AppNotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async updatePassword(id, password) {
        try {
            const entity = await this.userRepository.preload({
                id,
                password,
            });
            await this.userRepository.save(entity);
        }
        catch (error) {
            throw new AppNotFoundException_1.AppNotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(use_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
//# sourceMappingURL=UserRepository.js.map