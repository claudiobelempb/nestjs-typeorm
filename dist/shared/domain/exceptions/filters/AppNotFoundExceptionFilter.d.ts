import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AppNotFoundException } from '../AppNotFoundException';
export declare class AppNotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: AppNotFoundException, host: ArgumentsHost): void;
}
