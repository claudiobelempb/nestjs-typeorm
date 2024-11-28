import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppInvalidPasswordExeption } from '../AppInvalidPasswordExeption';
export declare class InvalidPasswordExceptionFilter implements ExceptionFilter {
    catch(exception: AppInvalidPasswordExeption, host: ArgumentsHost): void;
}
