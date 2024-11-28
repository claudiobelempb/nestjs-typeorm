import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserEntity } from '../../domain/entities/use.entity';
export declare class UserShowService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string): Promise<UserEntity>;
}
