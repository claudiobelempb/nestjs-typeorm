import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserShowService } from '../../application/services/UserShowService';
import { UserResponse } from '../../application/response/user.response';

@Controller('admin/users')
export class UserShowController {
  constructor(private readonly userShowService: UserShowService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async handle(@Param('id') id: string): Promise<UserResponse.User> {
    return await this.userShowService.execute(id);
  }
}
