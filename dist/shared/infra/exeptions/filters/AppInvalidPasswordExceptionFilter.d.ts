import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppInvalidPasswordException } from '../AppInvalidPasswordException';
export declare class InvalidPasswordExceptionFilter implements ExceptionFilter {
    catch(exception: AppInvalidPasswordException, host: ArgumentsHost): void;
}
