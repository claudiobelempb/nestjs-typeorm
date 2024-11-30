"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptjsHashProvider = void 0;
const bcryptjs_1 = require("bcryptjs");
class BcryptjsHashProvider {
    async generateHash(playload) {
        return (0, bcryptjs_1.hash)(playload, 6);
    }
    async compareHash(playload, hash) {
        return (0, bcryptjs_1.compare)(playload, hash);
    }
}
exports.BcryptjsHashProvider = BcryptjsHashProvider;
//# sourceMappingURL=BcryptjsHashProvider.js.map