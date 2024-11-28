import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
export declare class AuthRules {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    constructor({ firstName, lastName, email, password, createdAt, updatedAt, }: UserEntity);
}
