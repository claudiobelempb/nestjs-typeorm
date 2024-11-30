import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AppInvalidPasswordException } from '../AppInvalidPasswordException';

@Catch(AppInvalidPasswordException)
export class InvalidPasswordExceptionFilter implements ExceptionFilter {
  catch(exception: AppInvalidPasswordException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(422).send({
      statusCode: 422,
      error: 'Unprocessable Entity',
      message: exception.message,
    });
  }
}
