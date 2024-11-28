import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppConflictExceptionFilter } from './shared/domain/exceptions/filters/AppConflictExceptionFilter';
import { AppNotFoundExceptionFilter } from './shared/domain/exceptions/filters/AppNotFoundExceptionFilter';
import { InvalidPasswordExceptionFilter } from './shared/infra/exeptions/filters/AppInvalidPasswordExeptionFilter';
import { InvalidCredentialsExeptionFilter } from './shared/infra/exeptions/filters/AppInvalidCredentialsExceptioFilter';
import { AppBadRequestExeptionFilter } from './shared/infra/exeptions/filters/AppBadRequestExeptionFilter';
import { AppValidationExceptionFilter } from './shared/domain/exceptions/filters/AppValidationExceptionFilter';

export function applyGloboConfig(app: INestApplication) {
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  ),
    // app.useGlobalInterceptors(
    //   new WrapperDataInterceptor(),
    //   new ClassSerializerInterceptor(app.get(Reflector)),
    // ),
    app.useGlobalFilters(
      new AppConflictExceptionFilter(),
      new AppNotFoundExceptionFilter(),
      new InvalidPasswordExceptionFilter(),
      new InvalidCredentialsExeptionFilter(),
      new AppBadRequestExeptionFilter(),
      new AppValidationExceptionFilter(),
    );
}
