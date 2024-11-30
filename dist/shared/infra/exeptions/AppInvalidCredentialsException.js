"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInvalidCredentialsException = void 0;
class AppInvalidCredentialsException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'InvalidCredentialsExeption';
    }
}
exports.AppInvalidCredentialsException = AppInvalidCredentialsException;
//# sourceMappingURL=AppInvalidCredentialsException.js.map