"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeactiveController = void 0;
const common_1 = require("@nestjs/common");
const UserDeactiveService_1 = require("../../application/services/UserDeactiveService");
let UserDeactiveController = class UserDeactiveController {
    constructor(userDeactiveService) {
        this.userDeactiveService = userDeactiveService;
    }
    async handle(id) {
        await this.userDeactiveService.execute(id);
    }
};
exports.UserDeactiveController = UserDeactiveController;
__decorate([
    (0, common_1.Patch)('deactive/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserDeactiveController.prototype, "handle", null);
exports.UserDeactiveController = UserDeactiveController = __decorate([
    (0, common_1.Controller)('admin/users'),
    __metadata("design:paramtypes", [UserDeactiveService_1.UserDeactiveService])
], UserDeactiveController);
//# sourceMappingURL=UserDeactiveController.js.map