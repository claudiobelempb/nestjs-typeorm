import { HashProvider } from 'src/shared/application/interfaces/hash.interface';
import { UserEntity } from '../../domain/entities/use.entity';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserRequest } from '../../infra/request/user.request';
export declare class UserCreateService {
    private readonly userRepository;
    private readonly hashProvider;
    constructor(userRepository: UserRepository, hashProvider: HashProvider);
    execute(request: UserRequest.Create): Promise<UserEntity>;
}
