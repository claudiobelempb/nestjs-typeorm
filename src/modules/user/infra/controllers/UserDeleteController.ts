import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { UserDeleteService } from '../../application/services/UserDeleteService';

@Controller('admin/users')
export class UserDeleteController {
  constructor(private readonly userDeleteService: UserDeleteService) {}

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async handle(@Param('id') id: string) {
    await this.userDeleteService.execute(id);
  }
}