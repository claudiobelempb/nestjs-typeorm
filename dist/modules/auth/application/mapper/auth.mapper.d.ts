import { UserEntity } from 'src/modules/user/domain/entities/use.entity';
export declare class AuthMapper {
    static toResponse(entity: UserEntity): void;
    static toRequest(entiry: UserEntity): void;
}
