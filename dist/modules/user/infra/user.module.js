"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const use_entity_1 = require("../domain/entities/use.entity");
const UserIndexController_1 = require("./controllers/UserIndexController");
const UserIndexService_1 = require("../application/services/UserIndexService");
const UserRepository_1 = require("../domain/repositories/UserRepository");
const UserCreateController_1 = require("./controllers/UserCreateController");
const UserCreateService_1 = require("../application/services/UserCreateService");
const BcryptjsHashProvider_1 = require("../../../shared/application/providers/BcryptjsHashProvider");
const UserDeleteController_1 = require("./controllers/UserDeleteController");
const UserDeleteService_1 = require("../application/services/UserDeleteService");
const UserShowService_1 = require("../application/services/UserShowService");
const UserShowController_1 = require("./controllers/UserShowController");
const UserUpdateService_1 = require("../application/services/UserUpdateService");
const UserUpdateController_1 = require("./controllers/UserUpdateController");
const UserActiveService_1 = require("../application/services/UserActiveService");
const UserDeactiveService_1 = require("../application/services/UserDeactiveService");
const UserActiveController_1 = require("./controllers/UserActiveController");
const UserDeactiveController_1 = require("./controllers/UserDeactiveController");
const UserUpdatePasswordService_1 = require("../application/services/UserUpdatePasswordService");
const UserUpdatePasswordController_1 = require("./controllers/UserUpdatePasswordController");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([use_entity_1.UserEntity])],
        controllers: [
            UserIndexController_1.UserIndexController,
            UserShowController_1.UserShowController,
            UserCreateController_1.UserCreateController,
            UserUpdateController_1.UserUpdateController,
            UserDeleteController_1.UserDeleteController,
            UserActiveController_1.UserActiveController,
            UserDeactiveController_1.UserDeactiveController,
            UserUpdatePasswordController_1.UserUpdatePasswordController,
        ],
        providers: [
            {
                provide: 'UserRepository',
                useClass: UserRepository_1.UserRepository,
            },
            {
                provide: 'HashProvider',
                useClass: BcryptjsHashProvider_1.BcryptjsHashProvider,
            },
            {
                provide: UserRepository_1.UserRepository,
                useFactory: (userRepository) => {
                    return new UserRepository_1.UserRepository(userRepository);
                },
                inject: ['UserRepository'],
            },
            {
                provide: UserIndexService_1.UserIndexService,
                useFactory: (userRepository) => {
                    return new UserIndexService_1.UserIndexService(userRepository);
                },
                inject: ['UserRepository'],
            },
            {
                provide: UserCreateService_1.UserCreateService,
                useFactory: (userRepository, hashProvider) => {
                    return new UserCreateService_1.UserCreateService(userRepository, hashProvider);
                },
                inject: ['UserRepository', 'HashProvider'],
            },
            {
                provide: UserShowService_1.UserShowService,
                useFactory: (userRepository) => {
                    return new UserShowService_1.UserShowService(userRepository);
                },
                inject: ['UserRepository'],
            },
            {
                provide: UserDeleteService_1.UserDeleteService,
                useFactory: (userRepository) => {
                    return new UserDeleteService_1.UserDeleteService(userRepository);
                },
                inject: ['UserRepository'],
            },
            {
                provide: UserUpdateService_1.UserUpdateService,
                useFactory: (userRepository) => {
                    return new UserUpdateService_1.UserUpdateService(userRepository);
                },
                inject: ['UserRepository'],
            },
            {
                provide: UserActiveService_1.UserActiveService,
                useFactory: (userRepository) => {
                    return new UserActiveService_1.UserActiveService(userRepository);
                },
                inject: ['UserRepository'],
            },
            {
                provide: UserDeactiveService_1.UserDeactiveService,
                useFactory: (userRepository) => {
                    return new UserDeactiveService_1.UserDeactiveService(userRepository);
                },
                inject: ['UserRepository'],
            },
            {
                provide: UserUpdatePasswordService_1.UserUpdatePasswordService,
                useFactory: (userRepository, hashProvider) => {
                    return new UserUpdatePasswordService_1.UserUpdatePasswordService(userRepository, hashProvider);
                },
                inject: ['UserRepository', 'HashProvider'],
            },
        ],
        exports: [UserShowService_1.UserShowService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map