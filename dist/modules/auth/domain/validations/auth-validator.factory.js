"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidatorFactory = void 0;
const auth_validator_1 = require("./auth.validator");
class UserValidatorFactory {
    static create() {
        return new auth_validator_1.AuthValidator();
    }
}
exports.UserValidatorFactory = UserValidatorFactory;
//# sourceMappingURL=auth-validator.factory.js.map