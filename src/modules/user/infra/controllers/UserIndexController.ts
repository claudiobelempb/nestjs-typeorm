import { Controller, Get } from '@nestjs/common';
import { UserIndexService } from '../../application/services/UserIndexService';

@Controller('admin/users')
export class UserIndexController {
  constructor(private readonly userIndexService: UserIndexService) {}

  @Get()
  async handle() {
    return await this.userIndexService.execute();
  }
}
