import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { AuthSignupService } from '../../application/services/auth-signup.service';
import { AuthRequest } from '../request/auth.request';
import { AuthResponse } from '../../application/response/auth.response';
import { AuthMapper } from '../../application/mapper/auth.mapper';

@Controller('admin/users/signup')
export class AuthSignupController {
  constructor(private readonly authSignupService: AuthSignupService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async handle(@Body() request: UserEntity): Promise<UserEntity> {
    return await this.authSignupService.execute(request);
  }
}
