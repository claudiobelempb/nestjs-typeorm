import { UserRepository } from '../../domain/repositories/UserRepository';
import { HashProvider } from 'src/shared/common/interfaces/hash.interface';
import { UserRequest } from '../../infra/request/user.request';
export declare class UserUpdatePasswordService {
    private readonly userRepository;
    private readonly hashProvider;
    constructor(userRepository: UserRepository, hashProvider: HashProvider);
    execute(id: string, request: UserRequest.UpdatePassword): Promise<void>;
}
