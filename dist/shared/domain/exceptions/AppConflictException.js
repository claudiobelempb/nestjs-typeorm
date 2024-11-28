"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConflictException = void 0;
class AppConflictException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'AppConflictException';
    }
}
exports.AppConflictException = AppConflictException;
//# sourceMappingURL=AppConflictException.js.map