import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppInvalidCredentialsException } from 'src/shared/infra/exeptions/AppInvalidCredentialsException';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token || token !== '123456') {
      throw new AppInvalidCredentialsException(ConstantException.UNAUTHORIZED);
    }
    console.log('Seu token é: ', token);
    return next.handle();
  }
}
