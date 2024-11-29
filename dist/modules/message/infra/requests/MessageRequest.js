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
exports.MessageRequest = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const ConstantValidator_1 = require("../../../../shared/utils/constants/ConstantValidator");
const MessageEntity_1 = require("../../domain/entities/MessageEntity");
const class_transformer_1 = require("class-transformer");
var MessageRequest;
(function (MessageRequest) {
    class Create {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Create.prototype, "text", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Create.prototype, "fromId", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Create.prototype, "toId", void 0);
    MessageRequest.Create = Create;
    class Update {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Update.prototype, "text", void 0);
    MessageRequest.Update = Update;
    class IsActive extends (0, mapped_types_1.OmitType)(MessageEntity_1.MessageEntity, [
        'id',
        'text',
        'to',
        'from',
        'isRead',
        'createdAt',
        'updatedAt',
    ]) {
    }
    __decorate([
        (0, class_validator_1.IsBoolean)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", Boolean)
    ], IsActive.prototype, "isActive", void 0);
    MessageRequest.IsActive = IsActive;
    class IsRead extends (0, mapped_types_1.OmitType)(MessageEntity_1.MessageEntity, [
        'id',
        'text',
        'to',
        'from',
        'isActive',
        'createdAt',
        'updatedAt',
    ]) {
    }
    __decorate([
        (0, class_validator_1.IsBoolean)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", Boolean)
    ], IsRead.prototype, "isRead", void 0);
    MessageRequest.IsRead = IsRead;
    class Pagination {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.Max)(50),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Pagination.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(0),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Pagination.prototype, "offset", void 0);
    MessageRequest.Pagination = Pagination;
})(MessageRequest || (exports.MessageRequest = MessageRequest = {}));
//# sourceMappingURL=MessageRequest.js.map