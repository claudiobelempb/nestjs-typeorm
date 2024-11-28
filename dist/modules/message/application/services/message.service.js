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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ConstantException_1 = require("../../../../shared/utils/constants/ConstantException");
const typeorm_2 = require("typeorm");
const MessageEntity_1 = require("../../domain/entities/MessageEntity");
let MessageService = class MessageService {
    constructor(messageRepositoy) {
        this.messageRepositoy = messageRepositoy;
    }
    async findAll() {
        return await this.messageRepositoy.find();
    }
    async findOne(id) {
        try {
            const entity = await this.messageRepositoy.findOne({ where: { id } });
            return entity;
        }
        catch (error) {
            throw new common_1.NotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async create(request) {
        const newMessage = {
            ...request,
        };
        const entity = this.messageRepositoy.create(newMessage);
        return await this.messageRepositoy.save(entity);
    }
    async update(id, request) {
        try {
            const entity = await this.messageRepositoy.preload({ id, ...request });
            return await this.messageRepositoy.save(entity);
        }
        catch (error) {
            throw new common_1.NotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async updateIsActive(id) {
        try {
            const entity = await this.messageRepositoy.preload({
                id,
                isActive: true,
            });
            await this.messageRepositoy.save(entity);
        }
        catch (error) {
            throw new common_1.NotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async updateIsDeactive(id) {
        try {
            const entity = await this.messageRepositoy.preload({
                id,
                isActive: false,
            });
            await this.messageRepositoy.save(entity);
        }
        catch (error) {
            throw new common_1.NotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async updateIsRead(id) {
        try {
            const entity = await this.messageRepositoy.preload({
                id,
                isRead: true,
            });
            await this.messageRepositoy.save(entity);
        }
        catch (error) {
            throw new common_1.NotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async updateIsUnread(id) {
        try {
            const entity = await this.messageRepositoy.preload({
                id,
                isRead: false,
            });
            await this.messageRepositoy.save(entity);
        }
        catch (error) {
            throw new common_1.NotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
    async delete(id) {
        try {
            const entity = await this.messageRepositoy.findOneBy({ id });
            await this.messageRepositoy.remove(entity);
        }
        catch (error) {
            throw new common_1.NotFoundException(ConstantException_1.ConstantException.ENTITY_NOT_FOUND);
        }
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(MessageEntity_1.MessageEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessageService);
//# sourceMappingURL=message.service.js.map