"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigGuard = void 0;
const core_1 = require("@nestjs/core");
const Admin_guard_1 = require("./shared/common/guards/Admin.guard");
exports.ConfigGuard = {
    provide: core_1.APP_GUARD,
    useClass: Admin_guard_1.AdminGuard,
};
//# sourceMappingURL=Config.guard.js.map