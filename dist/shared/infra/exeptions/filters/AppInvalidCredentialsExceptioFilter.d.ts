import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppInvalidCredentialsException } from '../AppInvalidCredentialsException';
export declare class InvalidCredentialsExeptionFilter implements ExceptionFilter {
    catch(exception: AppInvalidCredentialsException, host: ArgumentsHost): void;
}
