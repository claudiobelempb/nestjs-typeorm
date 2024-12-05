import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { StandarError } from 'src/shared/utils/exceptions/StandarError';
export declare class AppConflictExceptionFilter implements ExceptionFilter {
    catch(exception: StandarError, host: ArgumentsHost): void;
}
