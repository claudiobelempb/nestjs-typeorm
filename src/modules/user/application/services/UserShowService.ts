import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserEntity } from '../../domain/entities/use.entity';
import { UserResponse } from '../response/user.response';
import { UserMapper } from '../mapper/user.mapper';

@Injectable()
export class UserShowService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<UserResponse.User> {
    const response = await this.userRepository.show(id);
    return UserMapper.toResponse(response);
  }
}
