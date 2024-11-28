import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';

@Injectable()
export class UserDeactiveService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string) {
    await this.userRepository.deactive(id);
  }
}
