import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AppNotFoundException } from '../AppNotFoundException';

@Catch(AppNotFoundException)
export class AppNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: AppNotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(404).send({
      statusCode: 404,
      error: 'Not Found',
      message: exception.message,
    });
  }
}
