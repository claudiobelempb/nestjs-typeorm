import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AppInvalidPasswordExeption } from '../AppInvalidPasswordExeption';

@Catch(AppInvalidPasswordExeption)
export class InvalidPasswordExceptionFilter implements ExceptionFilter {
  catch(exception: AppInvalidPasswordExeption, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(422).send({
      statusCode: 422,
      error: 'Unprocessable Entity',
      message: exception.message,
    });
  }
}
