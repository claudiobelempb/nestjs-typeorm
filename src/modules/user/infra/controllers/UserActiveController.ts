import { Controller, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { UserActiveService } from '../../application/services/UserActiveService';

@Controller('admin/users')
export class UserActiveController {
  constructor(private readonly userActiveService: UserActiveService) {}

  @Patch('active/:id')
  @HttpCode(HttpStatus.OK)
  async handle(@Param('id') id: string) {
    await this.userActiveService.execute(id);
  }
}
