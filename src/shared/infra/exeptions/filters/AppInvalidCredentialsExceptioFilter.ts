import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AppInvalidCredentialsException } from '../AppInvalidCredentialsExeption';

@Catch(AppInvalidCredentialsException)
export class InvalidCredentialsExeptionFilter implements ExceptionFilter {
  catch(exception: AppInvalidCredentialsException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: exception.message,
    });
  }
}
