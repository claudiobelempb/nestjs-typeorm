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
exports.UserCreateController = void 0;
const common_1 = require("@nestjs/common");
const UserCreateService_1 = require("../../application/services/UserCreateService");
const user_request_1 = require("../request/user.request");
const log_intercepto_1 = require("../../../../shared/common/interceptors/log.intercepto");
let UserCreateController = class UserCreateController {
    constructor(userCreateService) {
        this.userCreateService = userCreateService;
    }
    async handle(request) {
        return await this.userCreateService.execute(request);
    }
};
exports.UserCreateController = UserCreateController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_request_1.UserRequest.Create]),
    __metadata("design:returntype", Promise)
], UserCreateController.prototype, "handle", null);
exports.UserCreateController = UserCreateController = __decorate([
    (0, common_1.UseInterceptors)(log_intercepto_1.LogIntercepto),
    (0, common_1.Controller)('admin/users'),
    __metadata("design:paramtypes", [UserCreateService_1.UserCreateService])
], UserCreateController);
//# sourceMappingURL=UserCreateController.js.map