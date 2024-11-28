import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppBadRequestExeption } from '../AppBadRequestExeption';
export declare class AppBadRequestExeptionFilter implements ExceptionFilter {
    catch(exception: AppBadRequestExeption, host: ArgumentsHost): void;
}
