import { UserRepository } from '../../domain/repositories/UserRepository';
export declare class UserDeactiveService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string): Promise<void>;
}
