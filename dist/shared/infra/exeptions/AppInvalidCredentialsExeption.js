"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInvalidCredentialsException = exports.AppValidationException = void 0;
class AppValidationException extends Error {
}
exports.AppValidationException = AppValidationException;
class AppInvalidCredentialsException extends Error {
    constructor(error) {
        super();
        this.error = error;
        this.name = 'InvalidCredentialsExeption';
    }
}
exports.AppInvalidCredentialsException = AppInvalidCredentialsException;
//# sourceMappingURL=AppInvalidCredentialsExeption.js.map