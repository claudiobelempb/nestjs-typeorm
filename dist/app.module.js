"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const Config_guard_1 = require("./Config.guard");
const auth_module_1 = require("./modules/auth/infra/auth.module");
const MessageModule_1 = require("./modules/message/infra/MessageModule");
const user_module_1 = require("./modules/user/infra/user.module");
const type_orm_config_1 = require("./shared/infra/database/type-orm.config");
const Simple_middleware_1 = require("./shared/common/middlewares/Simple.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(Simple_middleware_1.Simplemiddleware).forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                ...type_orm_config_1.dataSourceOption,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            MessageModule_1.MessageModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, Config_guard_1.ConfigGuard],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map