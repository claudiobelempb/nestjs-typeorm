import { IAuthRepository } from './auth.interface';
import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
import { Repository } from 'typeorm';
export declare class AuthRepository implements IAuthRepository {
    private readonly authRepository;
    constructor(authRepository: Repository<UserEntity>);
    signup(request: UserEntity): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
    emailExists(email: string): Promise<void>;
    create(entity: UserEntity): Promise<UserEntity>;
    show(id: string): Promise<UserEntity>;
    index(): Promise<UserEntity[]>;
    update(id: string, entity: UserEntity): Promise<UserEntity>;
    delete(id: string): Promise<void>;
    active(id: string): Promise<void>;
    deactive(id: string): Promise<void>;
}
