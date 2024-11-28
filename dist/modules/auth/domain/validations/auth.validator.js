"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidator = void 0;
const validator_fields_1 = require("../../../../shared/application/validation/validator-fields");
const auth_rules_1 = require("./auth.rules");
class AuthValidator extends validator_fields_1.ClassValidatorFields {
    validate(data) {
        return super.validate(new auth_rules_1.AuthRules(data ?? {}));
    }
}
exports.AuthValidator = AuthValidator;
//# sourceMappingURL=auth.validator.js.map