"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInvalidPasswordExeption = void 0;
class AppInvalidPasswordExeption extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'InvalidPasswordExeption';
    }
}
exports.AppInvalidPasswordExeption = AppInvalidPasswordExeption;
//# sourceMappingURL=AppInvalidPasswordExeption.js.map