import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
} from '@nestjs/common';
import { UserUpdatePasswordService } from '../../application/services/UserUpdatePasswordService';
import { UserRequest } from '../request/user.request';

@Controller('admin/users')
export class UserUpdatePasswordController {
  constructor(
    private readonly userUpdateServiceService: UserUpdatePasswordService,
  ) {}

  @Patch('password/:id')
  @HttpCode(HttpStatus.OK)
  async handle(
    @Param('id') id: string,
    @Body() request: UserRequest.UpdatePassword,
  ) {
    await this.userUpdateServiceService.execute(id, request);
  }
}
