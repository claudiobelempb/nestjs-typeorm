import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AppConflictException } from '../AppConflictException';
import { Response } from 'express';

@Catch(AppConflictException)
export class AppConflictExceptionFilter implements ExceptionFilter {
  catch(exception: AppConflictException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(409).send({
      statusCode: 409,
      error: 'Conflict',
      message: exception.message,
    });
  }
}
