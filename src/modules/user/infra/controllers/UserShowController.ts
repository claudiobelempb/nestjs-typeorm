import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserShowService } from '../../application/services/UserShowService';

@Controller('admin/users')
export class UserShowController {
  constructor(private readonly userShowService: UserShowService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async handle(@Param('id') id: string) {
    return await this.userShowService.execute(id);
  }
}
