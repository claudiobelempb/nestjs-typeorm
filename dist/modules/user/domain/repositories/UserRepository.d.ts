import { Repository } from 'typeorm';
import { UserEntity } from '../entities/use.entity';
import { IUserRepository } from './user.interface';
export declare class UserRepository implements IUserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity>;
    emailExists(email: string): Promise<void>;
    create(request: UserEntity): Promise<UserEntity>;
    show(id: string): Promise<UserEntity>;
    index(): Promise<UserEntity[]>;
    update(id: string, request: UserEntity): Promise<UserEntity>;
    delete(id: string): Promise<void>;
    active(id: string): Promise<void>;
    deactive(id: string): Promise<void>;
    updatePassword(id: string, password: string): Promise<void>;
}
