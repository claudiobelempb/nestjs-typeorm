"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandarError = void 0;
class StandarError {
    constructor(timestamp, status, error, message, path) {
        this.timestamp = timestamp;
        this.status = status;
        this.error = error;
        this.message = message;
        this.path = path;
    }
}
exports.StandarError = StandarError;
//# sourceMappingURL=StandarError.js.map