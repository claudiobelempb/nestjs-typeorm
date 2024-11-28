"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppValidationException = void 0;
class AppValidationException extends Error {
    constructor(error) {
        super('Entity validation Error');
        this.error = error;
        this.name = 'AppValidationException';
    }
}
exports.AppValidationException = AppValidationException;
//# sourceMappingURL=AppValidationException.js.map