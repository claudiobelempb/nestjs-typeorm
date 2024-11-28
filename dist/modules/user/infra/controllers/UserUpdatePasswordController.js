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
exports.UserUpdatePasswordController = void 0;
const common_1 = require("@nestjs/common");
const UserUpdatePasswordService_1 = require("../../application/services/UserUpdatePasswordService");
const user_request_1 = require("../request/user.request");
let UserUpdatePasswordController = class UserUpdatePasswordController {
    constructor(userUpdateServiceService) {
        this.userUpdateServiceService = userUpdateServiceService;
    }
    async handle(id, request) {
        await this.userUpdateServiceService.execute(id, request);
    }
};
exports.UserUpdatePasswordController = UserUpdatePasswordController;
__decorate([
    (0, common_1.Patch)('password/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_request_1.UserRequest.UpdatePassword]),
    __metadata("design:returntype", Promise)
], UserUpdatePasswordController.prototype, "handle", null);
exports.UserUpdatePasswordController = UserUpdatePasswordController = __decorate([
    (0, common_1.Controller)('admin/users'),
    __metadata("design:paramtypes", [UserUpdatePasswordService_1.UserUpdatePasswordService])
], UserUpdatePasswordController);
//# sourceMappingURL=UserUpdatePasswordController.js.map