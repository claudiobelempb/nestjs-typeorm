import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserResponse } from '../response/user.response';
export declare class UserShowService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string): Promise<UserResponse.User>;
}
