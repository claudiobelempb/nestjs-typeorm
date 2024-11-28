import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserRequest } from '../../infra/request/user.request';
import { UserEntity } from '../../domain/entities/use.entity';

@Injectable()
export class UserUpdateService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, request: UserRequest.Update) {
    const { firstName, lastName } = request;
    const entity = new UserEntity();
    entity.firstName = firstName;
    entity.lastName = lastName;
    await this.userRepository.update(id, entity);
  }
}
