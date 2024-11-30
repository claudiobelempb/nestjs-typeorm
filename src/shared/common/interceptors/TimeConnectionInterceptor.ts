import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { tap } from 'rxjs';

@Injectable()
export class TimeConnectionInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    const startime = Date.now();
    console.log('TimeConnectionInterceptor executando.');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return next.handle().pipe(
      tap((data) => {
        const finalTime = Date.now();
        const elapsedTime = finalTime - startime;
        console.log(`TimeConnectionInterceptor executando. ${elapsedTime}`);
        console.log(data);
      }),
    );
  }
}
