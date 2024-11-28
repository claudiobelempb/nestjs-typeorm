import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AppBadRequestExeption } from '../AppBadRequestExeption';

@Catch(AppBadRequestExeption)
export class AppBadRequestExeptionFilter implements ExceptionFilter {
  catch(exception: AppBadRequestExeption, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: exception.message,
    });
  }
}
