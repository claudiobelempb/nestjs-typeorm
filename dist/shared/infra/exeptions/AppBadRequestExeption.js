"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBadRequestExeption = void 0;
class AppBadRequestExeption extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'BadRequestExeption';
    }
}
exports.AppBadRequestExeption = AppBadRequestExeption;
//# sourceMappingURL=AppBadRequestExeption.js.map