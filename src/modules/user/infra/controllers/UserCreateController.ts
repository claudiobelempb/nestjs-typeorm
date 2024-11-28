import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserCreateService } from '../../application/services/UserCreateService';
import { UserEntity } from '../../domain/entities/use.entity';
import { UserRequest } from '../request/user.request';

@Controller('admin/users')
export class UserCreateController {
  constructor(private readonly userCreateService: UserCreateService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async handle(@Body() request: UserRequest.Create) {
    return await this.userCreateService.execute(request);
  }
}
