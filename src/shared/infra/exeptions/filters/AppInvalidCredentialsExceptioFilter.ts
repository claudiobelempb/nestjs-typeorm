import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AppInvalidCredentialsException } from '../AppInvalidCredentialsException';

@Catch(AppInvalidCredentialsException)
export class InvalidCredentialsExeptionFilter implements ExceptionFilter {
  catch(exception: AppInvalidCredentialsException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(422).send({
      statusCode: 422,
      error: 'Unprocessable Entity',
      message: exception.message,
    });
  }
}
