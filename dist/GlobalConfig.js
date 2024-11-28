"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyGloboConfig = applyGloboConfig;
const common_1 = require("@nestjs/common");
const AppConflictExceptionFilter_1 = require("./shared/domain/exceptions/filters/AppConflictExceptionFilter");
const AppNotFoundExceptionFilter_1 = require("./shared/domain/exceptions/filters/AppNotFoundExceptionFilter");
const AppInvalidPasswordExeptionFilter_1 = require("./shared/infra/exeptions/filters/AppInvalidPasswordExeptionFilter");
const AppInvalidCredentialsExceptioFilter_1 = require("./shared/infra/exeptions/filters/AppInvalidCredentialsExceptioFilter");
const AppBadRequestExeptionFilter_1 = require("./shared/infra/exeptions/filters/AppBadRequestExeptionFilter");
const AppValidationExceptionFilter_1 = require("./shared/domain/exceptions/filters/AppValidationExceptionFilter");
function applyGloboConfig(app) {
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        errorHttpStatusCode: 422,
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    })),
        app.useGlobalFilters(new AppConflictExceptionFilter_1.AppConflictExceptionFilter(), new AppNotFoundExceptionFilter_1.AppNotFoundExceptionFilter(), new AppInvalidPasswordExeptionFilter_1.InvalidPasswordExceptionFilter(), new AppInvalidCredentialsExceptioFilter_1.InvalidCredentialsExeptionFilter(), new AppBadRequestExeptionFilter_1.AppBadRequestExeptionFilter(), new AppValidationExceptionFilter_1.AppValidationExceptionFilter());
}
//# sourceMappingURL=GlobalConfig.js.map