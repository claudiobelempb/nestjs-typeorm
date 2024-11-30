import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class TimeConnectionInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Promise<import("rxjs").Observable<any>>;
}
