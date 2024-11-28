import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppInvalidCredentialsException } from '../AppInvalidCredentialsExeption';
export declare class InvalidCredentialsExeptionFilter implements ExceptionFilter {
    catch(exception: AppInvalidCredentialsException, host: ArgumentsHost): void;
}
