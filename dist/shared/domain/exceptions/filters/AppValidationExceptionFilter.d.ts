import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppValidationException } from '../AppValidationException';
export declare class AppValidationExceptionFilter implements ExceptionFilter {
    catch(exception: AppValidationException, host: ArgumentsHost): void;
}
