import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';

@Injectable()
export class UserDeleteService {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
