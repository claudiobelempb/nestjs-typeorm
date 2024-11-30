"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBadRequestException = void 0;
class AppBadRequestException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'BadRequestException';
    }
}
exports.AppBadRequestException = AppBadRequestException;
//# sourceMappingURL=AppBadRequestException.js.map