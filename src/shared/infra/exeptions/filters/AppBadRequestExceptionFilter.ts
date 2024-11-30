import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AppBadRequestException } from '../AppBadRequestException';

@Catch(AppBadRequestException)
export class AppBadRequestExeptionFilter implements ExceptionFilter {
  catch(exception: AppBadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: exception.message,
    });
  }
}
