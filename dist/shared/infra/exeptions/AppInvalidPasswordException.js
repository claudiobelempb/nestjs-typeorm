"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInvalidPasswordException = void 0;
class AppInvalidPasswordException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'InvalidPasswordExeption';
    }
}
exports.AppInvalidPasswordException = AppInvalidPasswordException;
//# sourceMappingURL=AppInvalidPasswordException.js.map