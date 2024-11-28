import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthSignupService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly authRepository: Repository<UserEntity>,
  ) {}

  async execute(request: UserEntity): Promise<UserEntity> {
    return await this.authRepository.save(request);
  }
}
