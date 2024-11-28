import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppConflictException } from '../AppConflictException';
export declare class AppConflictExceptionFilter implements ExceptionFilter {
    catch(exception: AppConflictException, host: ArgumentsHost): void;
}
