import { Controller, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { UserDeactiveService } from '../../application/services/UserDeactiveService';

@Controller('admin/users')
export class UserDeactiveController {
  constructor(private readonly userDeactiveService: UserDeactiveService) {}

  @Patch('deactive/:id')
  @HttpCode(HttpStatus.OK)
  async handle(@Param('id') id: string) {
    await this.userDeactiveService.execute(id);
  }
}
