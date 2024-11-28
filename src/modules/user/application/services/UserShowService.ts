import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserEntity } from '../../domain/entities/use.entity';

@Injectable()
export class UserShowService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<UserEntity> {
    return await this.userRepository.show(id);
  }
}
