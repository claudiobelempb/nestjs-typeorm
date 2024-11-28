import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { Repository } from 'typeorm';
export declare class AuthSignupService {
    private readonly authRepository;
    constructor(authRepository: Repository<UserEntity>);
    execute(request: UserEntity): Promise<UserEntity>;
}
