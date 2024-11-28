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
exports.UserActiveController = void 0;
const common_1 = require("@nestjs/common");
const UserActiveService_1 = require("../../application/services/UserActiveService");
let UserActiveController = class UserActiveController {
    constructor(userActiveService) {
        this.userActiveService = userActiveService;
    }
    async handle(id) {
        await this.userActiveService.execute(id);
    }
};
exports.UserActiveController = UserActiveController;
__decorate([
    (0, common_1.Patch)('active/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserActiveController.prototype, "handle", null);
exports.UserActiveController = UserActiveController = __decorate([
    (0, common_1.Controller)('admin/users'),
    __metadata("design:paramtypes", [UserActiveService_1.UserActiveService])
], UserActiveController);
//# sourceMappingURL=UserActiveController.js.map