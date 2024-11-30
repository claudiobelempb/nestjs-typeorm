import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { HashProvider } from 'src/shared/common/interfaces/hash.interface';
import { UserRequest } from '../../infra/request/user.request';
import { AppInvalidPasswordException } from 'src/shared/infra/exeptions/AppInvalidPasswordException';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';

@Injectable()
export class UserUpdatePasswordService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
  ) {}

  async execute(id: string, request: UserRequest.UpdatePassword) {
    const { password, oldPassword } = request;
    const entity = await this.userRepository.show(id);

    if (!password || !oldPassword) {
      throw new AppInvalidPasswordException(
        ConstantException.OLD_PASSWORD_AND_NEW_PASSWORD_REQUERID,
      );
    }
    const checkOldPassword = await this.hashProvider.compareHash(
      oldPassword,
      entity.password,
    );

    if (!checkOldPassword) {
      throw new AppInvalidPasswordException(
        ConstantException.OLD_PASSWORD_NOT_MATH,
      );
    }
    const hashPassword = await this.hashProvider.generateHash(password);
    await this.userRepository.updatePassword(id, hashPassword);
  }
}
