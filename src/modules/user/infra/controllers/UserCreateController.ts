import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserCreateService } from '../../application/services/UserCreateService';
import { UserRequest } from '../request/user.request';
import { LogIntercepto } from 'src/shared/common/interceptors/log.intercepto';

@UseInterceptors(LogIntercepto)
@Controller('admin/users')
export class UserCreateController {
  constructor(private readonly userCreateService: UserCreateService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async handle(@Body() request: UserRequest.Create) {
    return await this.userCreateService.execute(request);
  }
}
