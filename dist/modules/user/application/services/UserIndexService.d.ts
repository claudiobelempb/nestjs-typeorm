import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserEntity } from '../../domain/entities/use.entity';
export declare class UserIndexService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(): Promise<UserEntity[]>;
}
