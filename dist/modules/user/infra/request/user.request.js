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
exports.UserRequest = void 0;
const class_validator_1 = require("class-validator");
const ConstantValidator_1 = require("../../../../shared/utils/constants/ConstantValidator");
var UserRequest;
(function (UserRequest) {
    class Create {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Create.prototype, "firstName", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Create.prototype, "lastName", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Create.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Create.prototype, "password", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Create.prototype, "passwordConfirm", void 0);
    UserRequest.Create = Create;
    class Update {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Update.prototype, "firstName", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], Update.prototype, "lastName", void 0);
    UserRequest.Update = Update;
    class UpdatePassword {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], UpdatePassword.prototype, "password", void 0);
    __decorate([
        (0, class_validator_1.IsString)({ message: ConstantValidator_1.ConstantValidator.INVALID }),
        (0, class_validator_1.IsNotEmpty)({ message: ConstantValidator_1.ConstantValidator.REQUIRED_FIELD }),
        __metadata("design:type", String)
    ], UpdatePassword.prototype, "oldPassword", void 0);
    UserRequest.UpdatePassword = UpdatePassword;
})(UserRequest || (exports.UserRequest = UserRequest = {}));
//# sourceMappingURL=user.request.js.map