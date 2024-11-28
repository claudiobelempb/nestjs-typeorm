import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserEntity } from '../../domain/entities/use.entity';

@Injectable()
export class UserIndexService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.index();
  }
}
