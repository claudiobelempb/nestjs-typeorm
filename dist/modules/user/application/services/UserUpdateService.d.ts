import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserRequest } from '../../infra/request/user.request';
export declare class UserUpdateService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string, request: UserRequest.Update): Promise<void>;
}
