import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppBadRequestException } from '../AppBadRequestException';
export declare class AppBadRequestExeptionFilter implements ExceptionFilter {
    catch(exception: AppBadRequestException, host: ArgumentsHost): void;
}
