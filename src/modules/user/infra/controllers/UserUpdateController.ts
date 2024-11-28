import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { UserUpdateService } from '../../application/services/UserUpdateService';
import { UserRequest } from '../request/user.request';

@Controller('admin/users')
export class UserUpdateController {
  constructor(private readonly userUpdateService: UserUpdateService) {}

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async handle(@Param('id') id: string, @Body() request: UserRequest.Update) {
    return await this.userUpdateService.execute(id, request);
  }
}
