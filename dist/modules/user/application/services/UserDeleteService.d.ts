import { UserRepository } from '../../domain/repositories/UserRepository';
export declare class UserDeleteService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string): Promise<void>;
}
