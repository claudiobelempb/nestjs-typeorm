"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotFoundException = void 0;
class AppNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'AppNotFoundException';
    }
}
exports.AppNotFoundException = AppNotFoundException;
//# sourceMappingURL=AppNotFoundException.js.map