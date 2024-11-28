import { IRepository } from 'src/shared/domain/repositories/interfaces/repository.interface';
import { UserEntity } from '../entities/use.entity';

export interface IUserRepository extends IRepository<UserEntity> {
  findByEmail(email: string): Promise<UserEntity>;
  emailExists(email: string): Promise<void>;
  updatePassword(id: string, password: string): Promise<void>;
}
