import { Injectable } from '@nestjs/common';
import { HashProvider } from 'src/shared/common/interfaces/hash.interface';
import { AppBadRequestException } from 'src/shared/infra/exeptions/AppBadRequestException';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';
import { UserEntity } from '../../domain/entities/use.entity';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserRequest } from '../../infra/request/user.request';

@Injectable()
export class UserCreateService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
  ) {}

  async execute(request: UserRequest.Create): Promise<UserEntity> {
    const { firstName, lastName, email, password, passwordConfirm } = request;

    if (!firstName || !lastName || !email || !password || !passwordConfirm) {
      throw new AppBadRequestException(ConstantException.FIELD_REQUIRED);
    }

    if (password !== passwordConfirm) {
      throw new AppBadRequestException(ConstantException.PASSWORD_NOT_MATCH);
    }

    await this.userRepository.emailExists(email);

    const hashPassword = await this.hashProvider.generateHash(password);

    const entity = new UserEntity();
    entity.firstName = firstName;
    entity.lastName = lastName;
    entity.email = email;
    entity.password = hashPassword;

    return await this.userRepository.create(entity);
  }
}
