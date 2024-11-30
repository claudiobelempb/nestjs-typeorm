"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyGloboConfig = applyGloboConfig;
const common_1 = require("@nestjs/common");
const AppConflictExceptionFilter_1 = require("./shared/domain/exceptions/filters/AppConflictExceptionFilter");
const AppNotFoundExceptionFilter_1 = require("./shared/domain/exceptions/filters/AppNotFoundExceptionFilter");
const AppInvalidPasswordExceptionFilter_1 = require("./shared/infra/exeptions/filters/AppInvalidPasswordExceptionFilter");
const AppInvalidCredentialsExceptioFilter_1 = require("./shared/infra/exeptions/filters/AppInvalidCredentialsExceptioFilter");
const AppBadRequestExceptionFilter_1 = require("./shared/infra/exeptions/filters/AppBadRequestExceptionFilter");
const AppValidationExceptionFilter_1 = require("./shared/domain/exceptions/filters/AppValidationExceptionFilter");
function applyGloboConfig(app) {
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        errorHttpStatusCode: 422,
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: false,
    })),
        app.useGlobalFilters(new AppConflictExceptionFilter_1.AppConflictExceptionFilter(), new AppNotFoundExceptionFilter_1.AppNotFoundExceptionFilter(), new AppInvalidPasswordExceptionFilter_1.InvalidPasswordExceptionFilter(), new AppInvalidCredentialsExceptioFilter_1.InvalidCredentialsExeptionFilter(), new AppBadRequestExceptionFilter_1.AppBadRequestExeptionFilter(), new AppValidationExceptionFilter_1.AppValidationExceptionFilter());
}
//# sourceMappingURL=GlobalConfig.js.map