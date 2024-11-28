import { SearchParams as DefaultSearchParams } from 'src/shared/utils/search-params';
import { SearchResult as DefaultSearchResult } from 'src/shared/utils/search-result';

import { IAuthRepository } from './auth.interface';
import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class AuthRepository implements IAuthRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly authRepository: Repository<UserEntity>,
  ) {}

  async signup(request: UserEntity): Promise<UserEntity> {
    return await this.authRepository.save(request);
  }
  findByEmail(email: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  emailExists(email: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  create(entity: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  show(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  index(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }
  update(id: string, entity: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  active(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deactive(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
