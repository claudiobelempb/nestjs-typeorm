import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { IRepository } from 'src/shared/domain/repositories/interfaces/repository.interface';

export interface IAuthRepository extends IRepository<UserEntity> {
  findByEmail(email: string): Promise<UserEntity>;
  emailExists(email: string): Promise<void>;
  signup(request: UserEntity): Promise<UserEntity>;
}
